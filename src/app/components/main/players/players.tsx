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

export const Players = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    const { isOpen, toggle } = useModal();

    const form = useForm<PlayerCreateModel>({});
    const { register, handleSubmit, formState, reset } = form;

    useAsyncEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState.isSubmitSuccessful, reset]);

    const onSubmit = async (data: PlayerCreateModel) => {
        await createNewPlayer(data);
    };

    const loadPlayers = async () => {
        setPlayers(await getPlayers());
        toggle();
    };

    const allPlayers = players.map((player) => <PlayerItem key={player.id} name={player.name} />);

    return (
        <section className="players-section mb-5">
            <Title title="Create new Player" />
            <div className="players-content">
                <form onSubmit={handleSubmit(onSubmit)} className="add-player-form">
                    <input
                        type="text"
                        name="newPlayer"
                        placeholder="Enter name"
                        className="form-control me-2"
                        {...register("newPlayer" as const, {
                            required: true,
                        })}
                    />
                    <Button class="btn-success me-2" children="Save" />
                </form>
                <Button class="btn-primary" children="Show All" onClick={loadPlayers} />
            </div>

            <Modal
                isOpen={isOpen}
                toggle={toggle}
                title="All Players"
                children={<ul className="list-group">{allPlayers}</ul>}
            />
        </section>
    );
};
