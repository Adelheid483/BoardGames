import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TyrantsOfTheUnderdarkMatchModel } from "../../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { saveTyrantsOfTheUnderdark } from "../../api/tyrantsOfTheUnderdarkApi";
import { Constants } from "../../../static/constants";
import { getGameMatchInfo } from "../../api/gamesApi";
import { Button } from "../common/button";

interface FormModel {
    matches: TyrantsOfTheUnderdarkMatchModel[];
}

const defaultMatch = {
    playerName: "Name",
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

    const { register, control, handleSubmit, reset } = form;
    const { fields, append, remove } = useFieldArray({
        name: "matches",
        control,
    });

    const onSubmit = async (data: FormModel) => {
        const info = await getGameMatchInfo();

        for (const match of data.matches) {
            const totalCount = getTotalCount(match);

            await saveTyrantsOfTheUnderdark({
                ...match,
                matchId: info.matchId,
                dateMatch: info.dateMatch,
                totalCount: totalCount,
            });
        }
    };

    return (
        <div className="table-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="game-buttons">
                    <Button class="btn-success" children="Save" />
                    <Button class="btn-outline-primary" onClick={() => reset()} children="Reset Match" />
                    <Button
                        class="btn-outline-secondary"
                        onClick={() => append(defaultMatch)}
                        children="Add Player"
                        disabled={
                            !(fields.length === Constants.minNumPlayers || fields.length < Constants.maxNumPlayers)
                        }
                    />
                    <Button
                        class="btn-outline-secondary"
                        onClick={() => remove(fields.length - 1)}
                        children="Remove Player"
                        disabled={
                            !(fields.length === Constants.maxNumPlayers || fields.length > Constants.minNumPlayers)
                        }
                    />
                </div>
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
                                name="controlSites"
                                className="form-control criteria-item"
                                placeholder="0"
                                {...register(`matches.${index}.controlSites` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="totalControlSites"
                                className="form-control criteria-item"
                                placeholder="0"
                                {...register(`matches.${index}.totalControlSites` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="trophyHall"
                                className="form-control criteria-item"
                                placeholder="0"
                                {...register(`matches.${index}.trophyHall` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="deck"
                                className="form-control criteria-item"
                                placeholder="0"
                                {...register(`matches.${index}.deck` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="innerCircleDeck"
                                className="form-control criteria-item"
                                placeholder="0"
                                {...register(`matches.${index}.innerCircleDeck` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="tokens"
                                className="form-control criteria-item"
                                placeholder="0"
                                {...register(`matches.${index}.tokens` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <span className="total-count criteria-name">X</span>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};
