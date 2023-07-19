import React from "react";
import { observer } from "mobx-react";
import store from "../../../store/store";

export const TyrantsOfTheUnderdarkAdd = observer(() => {
    return (
        <div className="category">
            <input
                type="text"
                placeholder="name"
                value={store.newName}
                onChange={(event) => (store.newName = event.target.value)}
            />
            <input
                type="text"
                placeholder="value"
                value={store.newValue}
                onChange={(event) => (store.newValue = Number(event.target.value))}
            />
            <button onClick={() => store.addCategory()}>Add Category</button>
        </div>
    );
});
