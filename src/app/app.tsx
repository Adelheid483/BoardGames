import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main";
import { TyrantsOfTheUnderdark } from "./components/gamesStore/tyrantsOfTheUnderdark/tyrantsOfTheUnderdark";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Clank } from "./components/gamesStore/clank/clank";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/tyrants-of-the-underdark" element={<TyrantsOfTheUnderdark />} />
                        <Route path="/clank" element={<Clank />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
};
