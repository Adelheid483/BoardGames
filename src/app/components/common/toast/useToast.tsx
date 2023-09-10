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
        }, 4000);
    };

    const alerts = (
        <section className="toast-overlay">
            {toastModel.map((toast, index) => (
                <Toast variant={toast.variant} key={index}>
                    {toast.text}
                </Toast>
            ))}
        </section>
    );

    return {
        notificationsToasts: alerts,
        createToast,
    };
}
