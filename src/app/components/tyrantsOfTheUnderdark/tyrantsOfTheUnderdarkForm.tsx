import React, { useState } from "react";
import { CountButton } from "../common/countButton";
import { useForm } from "react-hook-form";
import { TyrantsOfTheUnderdarkCountModel } from "../../dataModels/tyrantsOfTheUnderdarkCountModel";
import { countTyrantsOfTheUnderdarkSet } from "../../api/tyrantsOfTheUnderdarkApi";

interface Props {}

export const TyrantsOfTheUnderdarkForm = (props: Props) => {
    const [totalCount, setTotalCount] = useState(0);

    const { register, handleSubmit } = useForm<TyrantsOfTheUnderdarkCountModel>();

    const onSubmit = async (data: TyrantsOfTheUnderdarkCountModel) => {
        setTotalCount(await countTyrantsOfTheUnderdarkSet(data));
    };

    return (
        <div className="table-col">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                <div className="sum-field">
                                    <CountButton />
                                    <span className="btn-light">{totalCount}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};
