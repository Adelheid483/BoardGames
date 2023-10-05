import { useState } from "react";
import { Alert } from "./alert";
import { AlertVariant } from "../../../types/types";

interface AlertModel {
    variant: AlertVariant;
    text?: string;
}

export function useAlert() {
    const [alertModels, setAlertModels] = useState<AlertModel[]>([]);

    const createAlert = (options: AlertModel): void => {
        setAlertModels([...alertModels, options]);
        setTimeout(() => {
            setAlertModels((item) => item.slice(1));
        }, 4000);
    };

    const alerts = (
        <section className="alert-overlay">
            {alertModels.map((alert, index) => (
                <Alert variant={alert.variant} key={index}>
                    {alert.text}
                </Alert>
            ))}
        </section>
    );

    return {
        notificationsAlerts: alerts,
        createAlert: createAlert,
    };
}
