import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TyrantsOfTheUnderdarkMatchModel } from "../../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { saveTyrantsOfTheUnderdark } from "../../api/tyrantsOfTheUnderdarkApi";
import { Constants } from "../../../static/constants";
import { SaveButton } from "../common/saveButton";
import { AddPlayerButton } from "../common/addPlayerButton";
import { RemovePlayerButton } from "../common/removePlayerButton";

interface FormModel {
    matches: TyrantsOfTheUnderdarkMatchModel[];
}

const defaultMatch = {
    playerName: "Guest",
    controlSites: 0,
    totalControlSites: 0,
    trophyHall: 0,
    deck: 0,
    innerCircleDeck: 0,
    tokens: 0,
};

const getTotalCount = (match: TyrantsOfTheUnderdarkMatchModel) => {
    // @ts-ignore
    const values = Object.keys(match).map((key) => match[key]);
    const numberValues = values.filter((item) => typeof item !== "string");

    return numberValues.reduce((total, item) => total + item);
};

export const TyrantsOfTheUnderdarkForm = () => {
    const form = useForm<FormModel>({
        defaultValues: {
            matches: [defaultMatch, defaultMatch],
        },
    });

    const { register, control, handleSubmit } = form;
    const { fields, append, remove } = useFieldArray({
        name: "matches",
        control,
    });

    const onSubmit = async (data: FormModel) => {
        for (const match of data.matches) {
            const totalCount = getTotalCount(match);

            await saveTyrantsOfTheUnderdark({
                ...match,
                totalCount: totalCount,
            });
        }
    };

    return (
        <div className="table-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="match-item">
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <input
                                type="text"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.playerName` as const, { required: true })}
                            />
                            <input
                                type="number"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.controlSites` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.totalControlSites` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.trophyHall` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.deck` as const, { valueAsNumber: true, required: true })}
                            />
                            <input
                                type="number"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.innerCircleDeck` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.tokens` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <span className="form-control criteria-item criteria-name">483</span>
                        </div>
                    ))}
                </div>
                <div className="game-buttons">
                    <SaveButton />
                    {fields.length === Constants.minNumPlayers ? (
                        <AddPlayerButton onClick={() => append(defaultMatch)} />
                    ) : fields.length === Constants.maxNumPlayers ? (
                        <RemovePlayerButton onClick={() => remove(fields.length - 1)} />
                    ) : (
                        <>
                            <RemovePlayerButton onClick={() => remove(fields.length - 1)} />
                            <AddPlayerButton onClick={() => append(defaultMatch)} />
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};
