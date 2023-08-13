import React, { useState } from "react";
import { Title } from "../common/title";
import { useForm } from "react-hook-form";
import { createNewPlayer, getPlayers } from "../../api/playersApi";
import useAsyncEffect from "use-async-effect";
import { PlayerCreateModel } from "../../dataModels/playerCreateModel";
import { PlayerModel } from "../../dataModels/playerModel";
import { PlayerItem } from "./playerItem";
import { Modal } from "../common/modal";
import useModal from "../common/useModal";
import { Button } from "../common/button";

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
        <div className="players-section">
            <Title title="Create new Player" hideBackButton />
            <section className="create-player">
                <form onSubmit={handleSubmit(onSubmit)} className="add-player">
                    <input
                        type="text"
                        name="newPlayer"
                        placeholder="Enter name"
                        className="form-control"
                        {...register("newPlayer" as const, {
                            required: true,
                        })}
                    />
                    <Button class="btn-success" children="Save" />
                </form>
                <button onClick={loadPlayers} className="btn btn-primary">
                    Load all Players
                </button>
            </section>

            <Modal isOpen={isOpen} toggle={toggle}>
                <section className="players-list-modal">
                    <div className="modal-header">
                        <button type="button" className="btn-close" aria-label="Close" onClick={toggle} />
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">{allPlayers}</ul>
                    </div>
                </section>
            </Modal>
        </div>
    );
};
