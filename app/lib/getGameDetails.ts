

export default async function getGameDetails(id:string){

    const apiKey = process.env.API_KEY
    const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);

    if (!res.ok) {
        throw new Error("couldn't fetch the required data")
    }

    return res.json()


}