import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ClankMatchModel } from "../../../dataModels/gamesStore/clank/clankMatchModel";
import { getClankMatchInfo, saveClank } from "../../../api/clankApi";
import { PlayerModel } from "../../../dataModels/playerModel";
import { getTotalCount, inputValidation, selectValidation } from "../../../helpers/helpers";
import { ControlsButtons } from "../../common/gameForm/controlsButtons";
import { PlayerSelect } from "../../common/gameForm/playerSelect";
import { InputForm } from "../../common/gameForm/inputForm";
import { useAlert } from "../../common/alert/useAlert";
import { AlertVariant } from "../../../types/types";
import { TotalCount } from "../../common/gameForm/totalCount";
import { SavedInfo } from "../../common/gameForm/savedInfo";

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
    const [saveDate, setSaveDate] = useState<Date>();
    const [matchOrderNumber, setMatchOrderNumber] = useState<number>();
    const { notificationsAlerts, createAlert } = useAlert();

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

    const showAlert = (variant: AlertVariant) => createAlert({ variant });

    const onSubmit = async (data: FormModel) => {
        setLoading(true);
        const matchInfo = await getClankMatchInfo();
        const totalSum: number[] = [];

        for (const match of data.matches) {
            const matchTotal = getTotalCount(match);
            totalSum.push(matchTotal);

            await saveClank({
                ...match,
                matchId: matchInfo.matchId,
                matchNumber: matchInfo.matchNumber,
                dateMatch: matchInfo.dateMatch,
                totalCount: matchTotal,
            });
        }

        setTotalCount([...totalSum]);
        setLoading(false);
        setSaveDate(new Date(matchInfo.dateMatch));
        setMatchOrderNumber(matchInfo.matchNumber);
        showAlert("success");
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
                {notificationsAlerts}
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
                                <TotalCount totalCount={totalCount} index={index} loading={loading} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                <SavedInfo saveDate={saveDate} matchNumber={matchOrderNumber} />
            </form>
        </div>
    );
};
