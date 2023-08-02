import React from "react";
import { BackButton } from "../common/backButton";
import { SaveButton } from "../common/saveButton";

export const TyrantsOfTheUnderdark = () => {
    return (
        <div>
            <div>
                <h3>Tyrants Of The Underdark</h3>
            </div>
            <form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Criteria/Player</th>
                            <th scope="col">
                                <input type="text" placeholder="Name" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Control Sites</th>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Total Control Sites</th>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Trophy Hall</th>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Deck</th>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Inner Circle Deck</th>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Tokens</th>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Sum</td>
                            <td>-</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="buttons-group">
                    <SaveButton onClick={() => {}} />
                    <BackButton />
                </div>
            </form>
        </div>
    );
};
