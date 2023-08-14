import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TyrantsOfTheUnderdarkMatchModel } from "../../../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { saveTyrantsOfTheUnderdark } from "../../../api/tyrantsOfTheUnderdarkApi";
import { Constants } from "../../../../static/constants";
import { getGameMatchInfo } from "../../../api/gamesApi";
import { Button } from "../../common/button";

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

    const enableAddBtn = fields.length === Constants.minNumPlayers || fields.length < Constants.maxNumPlayers;
    const enableRemoveBtn = fields.length === Constants.maxNumPlayers || fields.length > Constants.minNumPlayers;

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
        <div className="game-match-block">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="game-match-buttons w-100 position-fixed start-0">
                    <button className="btn btn-success me-3">Save</button>
                    <Button class="btn-outline-primary me-3" onClick={() => reset()} children="Reset Match" />
                    <Button
                        class="btn-outline-secondary me-3"
                        onClick={() => append(defaultMatch)}
                        children="Add Player"
                        disabled={!enableAddBtn}
                    />
                    <Button
                        class="btn-outline-secondary"
                        onClick={() => remove(fields.length - 1)}
                        children="Remove Player"
                        disabled={!enableRemoveBtn}
                    />
                </div>
                <div className="game-match-col">
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
                                {...register(`matches.${index}.controlSites` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="totalControlSites"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.totalControlSites` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="trophyHall"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.trophyHall` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="deck"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.deck` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="innerCircleDeck"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.innerCircleDeck` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <input
                                type="number"
                                name="tokens"
                                className="form-control criteria-item"
                                {...register(`matches.${index}.tokens` as const, {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                            />
                            <span className="game-match-total-count ps-3 criteria-name">X</span>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};
