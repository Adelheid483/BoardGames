import local from "../../../../static/localization.json";
import { dateFormat } from "../../../helpers/helpers";
import { Constants } from "../../../../static/constants";

interface Props {
    saveDate: Date;
    matchNumber: number;
}

export const SavedInfo = (props: Props) => {
    return (
        <section className="saved-info d-flex flex-column align-items-center justify-content-center top w-100 position-fixed start-0">
            <div className="">
                {local.MatchNumber} {props.matchNumber ?? Constants.emptyString}
            </div>
            <div>
                {local.SaveDate} {props.saveDate ? dateFormat(props.saveDate) : Constants.emptyString}
            </div>
        </section>
    );
};
