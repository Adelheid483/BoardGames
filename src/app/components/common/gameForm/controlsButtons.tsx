import local from "../../../../static/localization.json";
import { Button } from "../button";
import { enableAddBtn, enableRemoveBtn } from "../../../helpers/helpers";

interface Props {
    resetHandler: () => void;
    appendHandler: () => void;
    removeHandler: () => void;
    fieldsLength: number;
}

export const ControlsButtons = (props: Props) => {
    return (
        <div className="controls-buttons d-flex align-items-center justify-content-center top w-100 position-fixed start-0">
            <button className="btn btn-success me-3">{local.Save}</button>
            <Button class="btn-outline-primary me-3" onClick={props.resetHandler} children={local.ResetMatch} />
            <Button
                class="btn-outline-secondary me-3"
                onClick={props.appendHandler}
                children={local.AddPlayer}
                disabled={!enableAddBtn(props.fieldsLength)}
            />
            <Button
                class="btn-outline-secondary"
                onClick={props.removeHandler}
                children={local.RemovePlayer}
                disabled={!enableRemoveBtn(props.fieldsLength)}
            />
        </div>
    );
};
