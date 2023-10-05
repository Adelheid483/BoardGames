import useAsyncEffect from "use-async-effect";
import useModal from "../../common/modal/useModal";
import { Title } from "../../common/title";
import { useForm } from "react-hook-form";
import { createNewPlayer } from "../../../api/playersApi";
import { PlayerCreateModel } from "../../../dataModels/playerCreateModel";
import { PlayerItem } from "./playerItem";
import { Modal } from "../../common/modal/modal";
import { Button } from "../../common/button";
import local from "../../../../static/localization.json";
import { useAlert } from "../../common/alert/useAlert";
import { Loader } from "../../common/loader";
import { AlertVariant } from "../../../types/types";
import { useActions, useTypedSelector } from "../../../helpers/reduxHooks";

export const Players = () => {
    const { players, error, loading } = useTypedSelector((state) => state.players);
    const { fetchPlayers } = useActions();
    const { isOpen, toggle } = useModal();
    const { notificationsAlerts, createAlert } = useAlert();

    const showAlert = (variant: AlertVariant, message?: string) => {
        createAlert({
            text: message,
            variant,
        });
    };

    const form = useForm<PlayerCreateModel>({});
    const { register, handleSubmit, formState, reset } = form;

    useAsyncEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState.isSubmitSuccessful, reset]);

    const onSubmit = async (data: PlayerCreateModel) => {
        const result = await createNewPlayer(data);
        if (!result.isSucceeded) {
            showAlert("warning", result.error);
        }
        if (result.isSucceeded) {
            showAlert("success");
        }
    };

    const loadPlayers = async () => {
        toggle();
        fetchPlayers();
    };

    const allPlayers = players.map((player) => <PlayerItem key={player.id} name={player.name} />);

    return (
        <section className="mb-5">
            <Title title={local.CreateNewPlayer} />
            <div className="d-flex justify-content-between">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex w-100">
                    <input
                        type="text"
                        name="newPlayer"
                        placeholder={local.EnterName}
                        className="form-control me-2"
                        {...register("newPlayer" as const, {
                            required: true,
                        })}
                    />
                    <button className="btn btn-success me-2" children={local.Save} />
                </form>
                <Button class="btn-primary" children={local.ShowAll} onClick={loadPlayers} />
            </div>
            {notificationsAlerts}
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                title={local.AllPlayers}
                error={error}
                children={loading ? <Loader loading={loading} /> : <ul className="list-group">{allPlayers}</ul>}
            />
        </section>
    );
};
