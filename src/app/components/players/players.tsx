import React from "react";
import { Title } from "../common/title";
import { useForm } from "react-hook-form";
import { SaveButton } from "../common/saveButton";

export const Players = () => {
    const form = useForm({
        defaultValues: {
            newPlayer: "New Player",
        },
    });

    const { register, handleSubmit } = form;

    const onSubmit = async (data: string) => {
        console.log(data);
    };

    return (
        <div>
            <Title title="Create new Player" hideBackButton />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="create-player">
                    <input
                        type="text"
                        name="newPlayer"
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
