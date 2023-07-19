import React, { useState } from "react";
import { observer } from "mobx-react";
import store, { Category } from "../../../store/store";
import { getTyrantsOfTheUnderdark } from "../../api/gamesApi";

const TyrantsOfTheUnderdarkCategories = observer(() => {
    return (
        <div>
            {store.categoriesList.map((category: Category) => (
                <div className="category">
                    <input
                        type="text"
                        value={category.name}
                        onChange={(event) => (category.name = event.target.value)}
                    />
                    <input
                        type="text"
                        value={category.value}
                        onChange={(event) => (category.value = Number(event.target.value))}
                    />
                </div>
            ))}
        </div>
        /*        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">Category/Player</th>
                <th scope="col">Alina</th>
                <th scope="col">Maksim</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Trophy Hall</th>
                <td>15</td>
                <td>8</td>
            </tr>
            </tbody>
        </table>*/
    );
});

export const TyrantsOfTheUnderdarkList = () => {
    const [list, setList] = useState<Array<string>>();

    const onLoad = async () => {
        setList(await getTyrantsOfTheUnderdark());
    };

    return (
        <div>
            <h4>Tyrants Of The Underdark Score Points</h4>
            <button onClick={onLoad}>Load</button>
            <div>{list}</div>
            <TyrantsOfTheUnderdarkCategories />
        </div>
    );
};
