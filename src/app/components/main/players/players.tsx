import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import useModal from "../../common/modal/useModal";
import { Title } from "../../common/title";
import { useForm } from "react-hook-form";
import { createNewPlayer, getPlayers } from "../../../api/playersApi";
import { PlayerCreateModel } from "../../../dataModels/playerCreateModel";
import { PlayerModel } from "../../../dataModels/playerModel";
import { PlayerItem } from "./playerItem";
import { Modal } from "../../common/modal/modal";
import { Button } from "../../common/button";
import local from "../../../../static/localization.json";
import { useToast } from "../../common/toast/useToast";
import { ToastVariant } from "../../common/toast/toast";
import { Loader } from "../../common/loader";

export const Players = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    const [loading, setLoading] = useState(false);
    const { isOpen, toggle } = useModal();
    const { notificationsToasts, createToast } = useToast();

    const showToast = (variant: ToastVariant, message?: string) => {
        createToast({
            text: message,
            variant,
        });
    };

    const form = useForm<PlayerCreateModel>({});
    const { register, handleSubmit, formState, reset } = form;

    useAsyncEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState.isSubmitSuccessful, reset]);

    const onSubmit = async (data: PlayerCreateModel) => {
        const result = await createNewPlayer(data);
        if (!result.isSucceeded) {
            showToast("warning", result.error);
        }
        if (result.isSucceeded) {
            showToast("success");
        }
    };

    const loadPlayers = async () => {
        toggle();
        setLoading(true);
        setPlayers(await getPlayers());
        setLoading(false);
    };

    const allPlayers = players.map((player) => <PlayerItem key={player.id} name={player.name} />);

    return (
        <section className="players-section mb-5">
            <Title title={local.CreateNewPlayer} />
            <div className="players-content">
                <form onSubmit={handleSubmit(onSubmit)} className="add-player-form">
                    <input
                        type="text"
                        name="newPlayer"
                        placeholder={local.EnterName}
                        className="form-control me-2"
                        {...register("newPlayer" as const, {
                            required: true,
                        })}
                    />
                    <button className="btn btn-success me-2" children={local.Save} />
                </form>
                <Button class="btn-primary" children={local.ShowAll} onClick={loadPlayers} />
            </div>

            {notificationsToasts}

            <Modal
                isOpen={isOpen}
                toggle={toggle}
                title={local.AllPlayers}
                children={
                    loading ? <Loader loading={loading} /> : <ul className="list-group">{allPlayers}</ul>
                }
            />
        </section>
    );
};
