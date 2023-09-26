import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TyrantsOfTheUnderdarkMatchModel } from "../../../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { saveTyrantsOfTheUnderdark } from "../../../api/tyrantsOfTheUnderdarkApi";
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
import { useToast } from "../../common/toast/useToast";
import { ToastVariant } from "../../../types/types";

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

export const TyrantsOfTheUnderdarkForm = () => {
    const [player, setPlayer] = useState<PlayerModel>();
    const [totalCount, setTotalCount] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const { notificationsToasts, createToast } = useToast();

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

    const showToast = (variant: ToastVariant) => createToast({ variant });

    const onSubmit = async (data: FormModel) => {
        setLoading(true);
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
        setLoading(false);
        showToast("success");
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
                {notificationsToasts}
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
                                    name={"controlSites"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.controlSites` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"totalControlSites"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.totalControlSites` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"trophyHall"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.trophyHall` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"deck"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.deck` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"innerCircleDeck"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.innerCircleDeck` as const, inputValidation)}
                                />
                                <InputForm
                                    name={"tokens"}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.tokens` as const, inputValidation)}
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
