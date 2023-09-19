import { rootReducer } from "../store/reducers/rootReducer";

// redux types
export type RootState = ReturnType<typeof rootReducer>;

// custom types
export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";
export type ToastVariant = "success" | "danger" | "warning";

export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]?: U;
};
