let images = [];

async function sendRequest() {
    const url = 'https://stranger-things-api.fly.dev/api/v1/characters/1';
    const rawdata = await fetch(url);

    if (!rawdata.ok) {
        throw new Error('api request failed');
    }

    const data = await rawdata.json();
    return data;
}

function shuffleArray(array) {
    const newArray = [...array]; 
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

async function getImages(number = 10) {
    try {
        const data = await sendRequest();

        //take random images each time
        const first100 = data
            .map(item => ({
                url: item.photo,
                name: item.name
            }))
            .filter(item => Boolean(item.url))
            .slice(0, 100);

        const randomSelection = shuffleArray(first100).slice(0, number);

        images = randomSelection.map(item => ({
            id: crypto.randomUUID(),
            url: item.url,
            character: item.name
        }));

    } catch (error) {
        console.warn("API failed, using local images",error);

        images = Array.from({ length: number }, (_, i) => ({
            id: crypto.randomUUID(),
            url: `src/static/im${i + 1}.png`,
            character: 'character'
        }));
    }

    return images;
}

export {getImages};