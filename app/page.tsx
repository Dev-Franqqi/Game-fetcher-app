import Image from "next/image";
import { useEffect, useState } from "react";
import getGames from  "./lib/getGames"
import Loading from "./loading";
import { Suspense } from "react";
import Link from "next/link";
export default async function Home() {

  const gamesData = getGames();
  const games = await gamesData;

  

  

  return (
    <div className="md:w-3/5 md:mx-auto bg-gray-100 ">
     
      <main className="px-2">

        <Suspense fallback={<Loading />}>
      <div className="  py-10 ">
        {Array.from(games).map((game,index) => (
          <div key={index} className="border mb-3 bg-white shadow-sm rounded-md p-5 w-fit mx-auto">
            <h1 className="font-semibold">{game.name}</h1>
              <Image
                src={game.background_image}
                width={500}
                height={200}
                quality={100}
                alt="game image"
                />
                <div className="flex justify-between mt-2 text-xs md:text-sm">
            <p>{game.released}</p>
            <Link className="font-medium text-blue-400" href={`/${game.id}`}>Game Details</Link>

                </div>

          </div>
        ))}
      </div>
        </Suspense>
                </main>
    </div>
  );
}
