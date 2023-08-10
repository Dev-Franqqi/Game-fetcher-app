"use client"
import {BsSearch} from "react-icons/bs"

import { useEffect, useState } from "react";

type Game = {
  id: string;
  name: string;
  background_image: string;
  released: string
};

const apiKey ="05d65ef601fa4b3faa7a09894e78563c"
const getGames = async (): Promise<Game[]> => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);

  if (!response.ok) {
    throw new Error("Can't fetch data");
  }

  const data = await response.json(); // Use await to get the JSON data
  return data.results; // Return the results array
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]); // UseState to manage games state

  useEffect(() => {
    getGames()
      .then((data) => {
        setGames(data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array for fetching data once
console.log(games)
  return (
    <>
      <nav className="py-2 px-3 flex justify-between">
        <header className="font-bold">GAME FINDER </header>
        <div>
          <input
            className="border-green-400 border p-2 rounded-md"
            placeholder="e.g Grand Theft Auto"
            type="text"
          />

          <button className="ml-2"><BsSearch /></button>
        </div>
      </nav>
      <div className="text-white  py-10 bg-gradient-to-r from-black to-purple-800">
        {games.map((game) => (
          <div
            className="border  mb-3 rounded-md p-5 md:w-3/5 mx-auto"
            key={game.id}
          >
            <h1 className="text-2xl mb-2 font-bold">{game.name}</h1>
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-md "
            />

            <h3 className="text-sm">Release date: {game.released}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
