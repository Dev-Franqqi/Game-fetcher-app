import {BsSearch} from "react-icons/bs"
import Image from "next/image";
import { useEffect, useState } from "react";
import getGames from  "./lib/getGames"
import Loading from "./loading";
import { Suspense } from "react";
export default async function Home() {

  const gamesData = getGames();
  const games = await gamesData;

  

  

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

          <button className="ml-2">
            <BsSearch />
          </button>
        </div>
      </nav>
      <div className="text-white  py-10 bg-gradient-to-r from-black to-purple-800">
        {Array.from(games).map((game) => (
          <div className="border mb-3 rounded-md p-5 md:w-3/5 mx-auto">
            <h1>{game.name}</h1>
            <Suspense fallback={<Loading />}>
              <Image
                src={game.background_image}
                width={500}
                height={200}
                quality={100}
                alt="game image"
              />
            </Suspense>

            <p>{game.released}</p>
          </div>
        ))}
      </div>
    </>
  );
}
