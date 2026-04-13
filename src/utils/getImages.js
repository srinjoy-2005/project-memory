let images = [];

async function sendRequest() {
    const url = 'https://stranger-things-api.fly.dev/api/v1/characters/';
    const rawdata = await fetch(url);

    if (!rawdata.ok) {
        throw new Error('api request failed');
    }

    const data = await rawdata.json();
    return data;
}

async function getImages(number = 8) {
    try {
        const data = await sendRequest();

        images = data
        .map(item => ({ 
            url: item.photo, 
            name: item.name 
        }))
        .filter(item => Boolean(item.url))
        .slice(0, number)
        .map(item => ({
            id: crypto.randomUUID(),
            url: item.url,
            character: item.name 
        }));

    } catch (error) {
        console.error("API failed, using local images");

        // Fallback local images with IDs
        images = Array.from({ length: number }, (_, i) => ({
            id: crypto.randomUUID(),
            url: `/static/im${i + 1}.png`,
            character:'character'
        }));
    }

    return images;
}

export {getImages};