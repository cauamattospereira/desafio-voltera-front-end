import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
    const urlName = url.searchParams.get('name')?.trim()

    if (urlName === null || urlName === undefined || urlName?.length <= 0) {
        return {message: "Nenhum nome inserido"}
    }

    let res = await fetch(`https://api.agify.io?name=${urlName}`, {
        method: "GET"
    })

    if (!res.ok) {
        return {
            message: "Ocorreu um erro: " + res.statusText
        }
    }

    let data = await res.json()

    console.log(data)

    return {
        data
    };
};