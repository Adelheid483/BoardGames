import React from "react";
import { Title } from "../common/title";
import { useForm } from "react-hook-form";
import { SaveButton } from "../common/saveButton";
import { createNewPlayer } from "../../api/playersApi";
import useAsyncEffect from "use-async-effect";
import { PlayerCreateModel } from "../../dataModels/playerCreateModel";

export const Players = () => {
    const form = useForm<PlayerCreateModel>({});

    const { register, handleSubmit, formState, reset } = form;

    const onSubmit = async (data: PlayerCreateModel) => {
        await createNewPlayer(data);
    };

    useAsyncEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState.isSubmitSuccessful, reset]);

    return (
        <div>
            <Title title="Create new Player" hideBackButton />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="create-player">
                    <input
                        type="text"
                        name="newPlayer"
                        placeholder="Enter name"
                        className="form-control"
                        {...register("newPlayer" as const, {
                            required: true,
                        })}
                    />
                    <SaveButton name="Add Player" />
                </div>
            </form>
        </div>
    );
};
