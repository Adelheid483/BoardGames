import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main";
import { TyrantsOfTheUnderdark } from "./components/tyrantsOfTheUnderdark/tyrantsOfTheUnderdark";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/tyrants-of-the-underdark" element={<TyrantsOfTheUnderdark />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
