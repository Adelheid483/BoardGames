import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TyrantsOfTheUnderdarkMatchModel } from "../../../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { saveTyrantsOfTheUnderdark } from "../../../api/tyrantsOfTheUnderdarkApi";
import { getGameMatchInfo } from "../../../api/gamesApi";
import { Button } from "../../common/button";
import local from "../../../../static/localization.json";
import { MenuItem, TextField } from "@mui/material";
import useAsyncEffect from "use-async-effect";
import { PlayerModel } from "../../../dataModels/playerModel";
import { getPlayers } from "../../../api/playersApi";
import { DevTool } from "@hookform/devtools";
import { enableAddBtn, enableRemoveBtn, getTotalCount } from "../../../helpers/helpers";
import { Constants } from "../../../../static/constants";

interface FormModel {
    matches: TyrantsOfTheUnderdarkMatchModel[];
}

const defaultMatch = {
    playerId: "",
    controlSites: null as number,
    totalControlSites: null as number,
    trophyHall: null as number,
    deck: null as number,
    innerCircleDeck: null as number,
    tokens: null as number,
};

const numberValueValidation = {
    value: true,
    message: local.RequiredValue,
};

export const TyrantsOfTheUnderdarkForm = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    const [player, setPlayer] = useState<PlayerModel>();
    const [totalCount, setTotalCount] = useState<number[]>([]);

    useAsyncEffect(async () => {
        setPlayers(await getPlayers());
    }, []);

    const { register, control, handleSubmit, reset, formState } = useForm<FormModel>({
        defaultValues: {
            matches: [defaultMatch, defaultMatch],
        },
    });

    const { fields, append, remove } = useFieldArray({
        name: "matches",
        control,
    });

    const { errors } = formState;

    const onSubmit = async (data: FormModel) => {
        const matchInfo = await getGameMatchInfo();
        const totalSum: number[] = [];

        for (const match of data.matches) {
            const matchTotal = getTotalCount(match);
            totalSum.push(matchTotal);

            await saveTyrantsOfTheUnderdark({
                ...match,
                matchId: matchInfo.matchId,
                dateMatch: matchInfo.dateMatch,
                totalCount: matchTotal,
            });
        }

        setTotalCount([...totalSum]);
    };

    return (
        <div className="game-match-block">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="game-match-buttons w-100 position-fixed start-0">
                    <button className="btn btn-success me-3">{local.Save}</button>
                    <Button
                        class="btn-outline-primary me-3"
                        onClick={() => {
                            reset();
                            setTotalCount([]);
                        }}
                        children={local.ResetMatch}
                    />
                    <Button
                        class="btn-outline-secondary me-3"
                        onClick={() => append(defaultMatch)}
                        children={local.AddPlayer}
                        disabled={!enableAddBtn(fields.length)}
                    />
                    <Button
                        class="btn-outline-secondary"
                        onClick={() => remove(fields.length - 1)}
                        children={local.RemovePlayer}
                        disabled={!enableRemoveBtn(fields.length)}
                    />
                </div>
                <table className="table table-striped">
                    <tbody className="game-match-col">
                        {fields.map((field, index) => (
                            <tr key={field.id}>
                                <td className="parent">
                                    <TextField
                                        select
                                        label={local.SelectPlayer}
                                        defaultValue={""}
                                        value={player}
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.playerId` as const, {
                                            required: {
                                                value: true,
                                                message: local.RequiredPlayerName,
                                            },
                                        })}
                                    >
                                        {players.map((item) => (
                                            <MenuItem value={item.id} key={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.playerId?.message
                                        )}
                                    </div>
                                </td>

                                <td className="parent">
                                    <input
                                        type="number"
                                        name="controlSites"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.controlSites` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.controlSites?.message
                                        )}
                                    </div>
                                </td>

                                <td className="parent">
                                    <input
                                        type="number"
                                        name="totalControlSites"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.totalControlSites` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.totalControlSites?.message
                                        )}
                                    </div>
                                </td>

                                <td className="parent">
                                    <input
                                        type="number"
                                        name="trophyHall"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.trophyHall` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.trophyHall?.message
                                        )}
                                    </div>
                                </td>

                                <td className="parent">
                                    <input
                                        type="number"
                                        name="deck"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.deck` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map((player, idx) => idx === index && player.deck?.message)}
                                    </div>
                                </td>

                                <td className="parent">
                                    <input
                                        type="number"
                                        name="innerCircleDeck"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.innerCircleDeck` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.innerCircleDeck?.message
                                        )}
                                    </div>
                                </td>

                                <td className="parent">
                                    <input
                                        type="number"
                                        name="tokens"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.tokens` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map((player, idx) => idx === index && player.tokens?.message)}
                                    </div>
                                </td>

                                <td className="game-match-total-count ps-3 criteria-name">
                                    {totalCount.length === 0 ? Constants.emptyString : totalCount[index]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
            <DevTool control={control} />
        </div>
    );
};
