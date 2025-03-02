import { redirect, useParams } from "next/navigation"
import getGameDetails from "../lib/getGameDetails"
import { Redirect } from "next"
import Detailspage from "./Detailsclientcomp"
export default async function GameDetails({params}:{params:Promise<{id:string}>}){
    const {id} = await params

   
    const gameDetails = await getGameDetails(id)
    if (!gameDetails) {
        console.log('there was no details about this game')
        setTimeout(()=>{redirect('/')},3000)
    }
    console.log(gameDetails)

    return <Detailspage game={gameDetails} />
}