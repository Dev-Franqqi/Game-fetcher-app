'use client'
import Image from 'next/image'
import DOMPurify from 'dompurify'
import Link from 'next/link'
export default function Detailspage({game}:any){
    console.log(game)
    return(<main className={` md:w-3/5 md:mx-auto bg-white  py-5 px-2`}>
        <div className='flex justify-between items-center'>

        <h1 className="text-3xl font-bold">{game.name}</h1>
        <p><span className='font-medium'>Released: </span>{game.released}</p>
        </div>
        <Link className='text-blue-500 font-medium' href={`${game.website}`}>Link to website</Link>
        
        <Image src={game.background_image} width={500} height={200} quality={100} alt="game image" />
        <div>
            {game.developers && game.developers.map((dev:any,index:number)=>(<div key={index}>{dev.name}
                <Image src={dev.image_background} width={500} height={200} alt='' />
            </div>))}
        </div>
        <div className='text-sm' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(game.description)}}></div>
        <Image src={game.background_image_additional} width={500} height={200} quality={100} alt="game image" />

                    <h2 className='mt-10 font-semibold text-xl'>Where to buy</h2>
                    {game.stores && game.stores.map((store:any,index:number)=>(<div className='text-blue-400 font-semibold' key={index}><Link href={`${store.domain}`}>
                        {store.store.name}
                    </Link></div>))}
    </main>)
}