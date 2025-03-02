import Loading from "../loading";
const apiKey = process.env.API_KEY;

export default async function getGames():Promise<Game[]> {

  const res = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
  

  if (!res.ok) {
    throw new Error("couldn't fetch the required data")
  }
  const data =await res.json()
  

  return data.results
}