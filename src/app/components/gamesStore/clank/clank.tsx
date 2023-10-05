import { Title } from "../../common/title";
import { ClankCriteria } from "./clankCriteria";
import { ClankForm } from "./clankForm";
import local from "../../../../static/localization.json";

export const Clank = () => {
    return (
        <section>
            <Title title={local.ClankTitle} showBackButton />
            <div className="game-match d-flex justify-content-center mt-5">
                <ClankCriteria />
                <ClankForm />
            </div>
        </section>
    );
};
