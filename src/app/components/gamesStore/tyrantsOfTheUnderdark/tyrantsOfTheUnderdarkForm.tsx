import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TyrantsOfTheUnderdarkMatchModel } from "../../../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { saveTyrantsOfTheUnderdark } from "../../../api/tyrantsOfTheUnderdarkApi";
import { getGameMatchInfo } from "../../../api/gamesApi";
import { PlayerModel } from "../../../dataModels/playerModel";
import { getTotalCount, inputValidation, selectValidation } from "../../../helpers/helpers";
import { ControlsButtons } from "../../common/controlsButtons";
import { PlayerSelect } from "../../common/gameForm/playerSelect";
import { InputForm } from "../../common/gameForm/inputForm";
import { useToast } from "../../common/toast/useToast";
import { ToastVariant } from "../../../types/types";
import { TotalCount } from "../../common/gameForm/totalCount";

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
                                <PlayerSelect
                                    player={player}
                                    index={index}
                                    errors={errors}
                                    hookForm={register(`matches.${index}.playerId` as const, {
                                        required: selectValidation,
                                        onChange: (e) => handleChange(e),
                                    })}
                                />
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
                                <TotalCount totalCount={totalCount} index={index} loading={loading} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};
