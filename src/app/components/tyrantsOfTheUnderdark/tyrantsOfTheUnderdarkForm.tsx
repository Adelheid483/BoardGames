import React, { useState } from "react";
import { CountButton } from "../common/countButton";
import { useForm } from "react-hook-form";
import { TyrantsOfTheUnderdarkCountModel } from "../../dataModels/tyrantsOfTheUnderdarkCountModel";
import { countTyrantsOfTheUnderdark } from "../../api/tyrantsOfTheUnderdarkApi";

export const TyrantsOfTheUnderdarkForm = () => {
    const [totalCount, setTotalCount] = useState(0);

    const { register, handleSubmit } = useForm<TyrantsOfTheUnderdarkCountModel>({
        defaultValues: {
            controlSites: 0,
            totalControlSites: 0,
            trophyHall: 0,
            deck: 0,
            innerCircleDeck: 0,
            tokens: 0,
        },
    });

    const onSubmit = async (data: TyrantsOfTheUnderdarkCountModel) => {
        // @ts-ignore
        const values: number[] = Object.keys(data).map((key) => data[key]);

        setTotalCount(await countTyrantsOfTheUnderdark({ values: values }));
    };

    return (
        <div className="table-col">
            <form onChange={handleSubmit(onSubmit)}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" className="form-control" name="playerName" placeholder="Guest" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="controlSites"
                                    {...register("controlSites", { valueAsNumber: true, required: true })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="totalControlSites"
                                    {...register("totalControlSites", { valueAsNumber: true, required: true })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="trophyHall"
                                    {...register("trophyHall", { valueAsNumber: true, required: true })}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="deck"
                                    {...register("deck", { valueAsNumber: true, required: true })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="innerCircleDeck"
                                    {...register("innerCircleDeck", { valueAsNumber: true, required: true })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="tokens"
                                    {...register("tokens", { valueAsNumber: true, required: true })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="total-count">{totalCount}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};
