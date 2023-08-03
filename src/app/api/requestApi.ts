export const apiRootUrl = "https://localhost:44366/api";
export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface RequestOptions<T> {
    url: string;
    body?: T;
}

async function performRequest<TRequest, TResult>(
    method: HttpRequestMethod,
    options: RequestOptions<TRequest>
): Promise<TResult> {
    const response = await fetch(`${apiRootUrl}/${options.url}`, {
        method: method,
        body: getBody(options),
        headers: {
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

function getBody<T>(options: RequestOptions<T>) {
    if (!options || !options.body) {
        return undefined;
    }

    if (options.body instanceof FormData) {
        return options.body;
    }

    return JSON.stringify(options.body);
}

export async function httpGet<TResult>(options: RequestOptions<void>): Promise<TResult> {
    return performRequest("GET", options);
}

export async function httpPost<TRequest, TResult = void>(options: RequestOptions<TRequest>): Promise<TResult> {
    return performRequest<TRequest, TResult>("POST", options);
}
