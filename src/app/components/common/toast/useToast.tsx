import React, { useState } from "react";
import { Toast, ToastVariant } from "./toast";

interface ToastModel {
    variant: ToastVariant;
    text: string;
}

export function useToast() {
    const [toastModel, setToastModel] = useState<ToastModel[]>([]);

    const createToast = (options: ToastModel): void => {
        setToastModel([...toastModel, options]);
        setTimeout(() => {
            setToastModel((item) => item.slice(1));
        }, 5000);
    };

    const alerts = (
        <section className="toast-overlay">
            {toastModel.map((t) => (
                <Toast variant={t.variant}>{t.text}</Toast>
            ))}
        </section>
    );

    return {
        notificationsToasts: alerts,
        createToast,
    };
}
