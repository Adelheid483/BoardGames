import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ClankMatchModel } from "../../../dataModels/clankMatchModel";
import { saveClank } from "../../../api/clankApi";
import { getGameMatchInfo } from "../../../api/gamesApi";
import local from "../../../../static/localization.json";
import { PlayerModel } from "../../../dataModels/playerModel";
import { getTotalCount, inputValidation } from "../../../helpers/helpers";
import { Constants } from "../../../../static/constants";
import { Loader } from "../../common/loader";
import { ControlsButtons } from "../../common/controlsButtons";
import { PlayerSelect } from "../../common/gameForm/playerSelect";
import { ValidationMessage } from "../../common/gameForm/validationMessage";
import { InputForm } from "../../common/gameForm/inputForm";

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

export const ClankForm = () => {
    const [player, setPlayer] = useState<PlayerModel>();
    const [totalCount, setTotalCount] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);

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
                                    <PlayerSelect
                                        player={player}
                                        hookForm={register(`matches.${index}.playerId` as const, {
                                            required: {
                                                value: true,
                                                message: local.RequiredPlayerName,
                                            },
                                            onChange: (e) => handleChange(e),
                                        })}
                                    />
                                    <ValidationMessage criteriaName={"playerId"} index={index} errors={errors} />
                                </td>

                                <InputForm
                                    name={"artefacts"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.artefacts` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"prisoners"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.prisoners` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"tokens"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.tokens` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"deck"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.deck` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"coins"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.coins` as const, inputValidation)}
                                />

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
        </div>
    );
};
