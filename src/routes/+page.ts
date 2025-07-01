import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
    const urlName = url.searchParams.get('name')?.trim()

    let res = await fetch(`https://api.agify.io?name=${urlName}`, {
        method: "GET"
    })

    let data = await res.json()

    return {
        data
    };
};