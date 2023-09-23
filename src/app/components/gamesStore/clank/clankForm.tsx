import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ClankMatchModel } from "../../../dataModels/clankMatchModel";
import { saveClank } from "../../../api/clankApi";
import { getGameMatchInfo } from "../../../api/gamesApi";
import local from "../../../../static/localization.json";
import { MenuItem, TextField } from "@mui/material";
import useAsyncEffect from "use-async-effect";
import { PlayerModel } from "../../../dataModels/playerModel";
import { DevTool } from "@hookform/devtools";
import { getTotalCount } from "../../../helpers/helpers";
import { Constants } from "../../../../static/constants";
import { Loader } from "../../common/loader";
import { ControlsButtons } from "../../common/controlsButtons";
import { Error } from "../../common/error";
import { useActions, useTypedSelector } from "../../../helpers/reduxHooks";

interface FormModel {
    matches: ClankMatchModel[];
}

const defaultMatch = {
    playerId: "",
    artefacts: null as number,
    prisoners: null as number,
    tokens: null as number,
    deck: null as number,
    coins: null as number,
};

const numberValueValidation = {
    value: true,
    message: local.RequiredValue,
};

export const ClankForm = () => {
    const players = useTypedSelector((state) => state.players);
    const { fetchPlayers } = useActions();
    const [player, setPlayer] = useState<PlayerModel>();
    const [totalCount, setTotalCount] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);

    useAsyncEffect(async () => {
        fetchPlayers();
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
        setLoading(true);
        const matchInfo = await getGameMatchInfo();
        const totalSum: number[] = [];

        for (const match of data.matches) {
            const matchTotal = getTotalCount(match);
            totalSum.push(matchTotal);

            await saveClank({
                ...match,
                matchId: matchInfo.matchId,
                dateMatch: matchInfo.dateMatch,
                totalCount: matchTotal,
            });
        }

        setTotalCount([...totalSum]);
        setLoading(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setPlayer(event.target.value as string);
    };

    const resetHandler = () => {
        reset();
        setTotalCount([]);
    };

    return (
        <div className="d-flex">
            <form onSubmit={handleSubmit(onSubmit)}>
                <ControlsButtons
                    resetHandler={resetHandler}
                    appendHandler={() => append(defaultMatch)}
                    removeHandler={() => remove(fields.length - 1)}
                    fieldsLength={fields.length}
                />
                <table className="table table-striped">
                    <tbody className="d-flex">
                        {fields.map((field, index) => (
                            <tr key={field.id}>
                                <td className="game-match-field">
                                    <TextField
                                        select
                                        label={local.SelectPlayer}
                                        defaultValue=""
                                        value={player}
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.playerId` as const, {
                                            required: {
                                                value: true,
                                                message: local.RequiredPlayerName,
                                            },
                                            onChange: (e) => handleChange(e),
                                        })}
                                    >
                                        {players.error ? (
                                            <Error errorMessage={players.error} />
                                        ) : (
                                            players.players.map((item) => (
                                                <MenuItem value={item.id} key={item.id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.playerId?.message
                                        )}
                                    </div>
                                </td>

                                <td className="game-match-field">
                                    <input
                                        type="number"
                                        name="artefacts"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.artefacts` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.artefacts?.message
                                        )}
                                    </div>
                                </td>

                                <td className="game-match-field">
                                    <input
                                        type="number"
                                        name="prisoners"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.prisoners` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map(
                                            (player, idx) => idx === index && player.prisoners?.message
                                        )}
                                    </div>
                                </td>

                                <td className="game-match-field">
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

                                <td className="game-match-field">
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

                                <td className="game-match-field">
                                    <input
                                        type="number"
                                        name="coins"
                                        className="form-control criteria-item ms-2 me-2"
                                        {...register(`matches.${index}.coins` as const, {
                                            valueAsNumber: true,
                                            required: numberValueValidation,
                                        })}
                                    />
                                    <div className="error-validation">
                                        {errors.matches?.map((player, idx) => idx === index && player.coins?.message)}
                                    </div>
                                </td>

                                <td className="game-match-total-count ps-3 criteria-name">
                                    {totalCount.length === 0 && !loading ? (
                                        Constants.emptyString
                                    ) : loading ? (
                                        <Loader loading={loading} />
                                    ) : (
                                        totalCount[index]
                                    )}
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
