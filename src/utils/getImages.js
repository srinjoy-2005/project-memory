// import all images at build time
const imageModules = import.meta.glob('../static/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

// convert to array of URLs
const localImages = Object.values(imageModules);

let images = [];

async function sendRequest() {
    const url = 'https://stranger-things-api.fly.dev/api/v1/characters/';
    const rawdata = await fetch(url);

    if (!rawdata.ok) {
        throw new Error('api request failed');
    }

    return rawdata.json();
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

async function getImages(number = 8) {
    try {
        const data = await sendRequest();

        const valid = data
            .map(item => ({
                url: item.photo,
                name: item.name
            }))
            .filter(item => item.url)
            .slice(0, 100);

        const randomSelection = shuffleArray(valid).slice(0, number);

        images = randomSelection.map(item => ({
            id: crypto.randomUUID(),
            url: item.url,
            character: item.name
        }));

    } catch (error) {
        console.warn("API failed, using local images", error);

        const shuffledLocal = shuffleArray(localImages).slice(0, number);

        images = shuffledLocal.map((url) => ({
        id: crypto.randomUUID(),
        url,
        character: 'character',
        }));
    }

    return images;
}

export { getImages };