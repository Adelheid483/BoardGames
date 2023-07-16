export const apiRootUrl = "https://localhost:44366/api";
export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface RequestOptions<T> {
    url: string;
}

async function performRequest<TRequest, TResult>(
    method: HttpRequestMethod,
    options: RequestOptions<TRequest>
): Promise<TResult> {
    const response = await fetch(`${apiRootUrl}/${options.url}`, {
        method: method,
        headers: {
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

export async function httpGet<TResult>(options: RequestOptions<void>): Promise<TResult> {
    return performRequest("GET", options);
}
