// Components
import { Button } from '../../components/Button';

// Video
import EarthVideo  from '../../assets/images/Planets and Galaxys/Terra Animado.webm';

// Style
import './index.css'

export function Home(){
    return(
        <>
            <main className="
            flex min-h-screen items-center flex-col w-full md:flex-row">
                <div className="
                w-full flex items-start flex-col gap-6 mt-16 ps-6 pe-4
                xl:ps-10
                ">
                    <h1 className='
                    text-white font-bold flex justify-start mt-14 title-h1-home
                    md:text-5xl md:mt-0
                    xl:text-7xl
                    '>Da Terra às Estrelas</h1>
                    <h3 className='
                    text-white text-md w-full h3-subtitle
                    xl:text-2xl
                    '>
                        Explore a educação que brilha como estrelas nas constelações 
                        do conhecimento, expandindo horizontes, como o vasto universo!
                    </h3>
                    <Button bName='Partiuuu!' />
                </div>
                <div className="mt-24 w-full flex justify-center">
                    <video src={EarthVideo} className='opacity-75 w-full max-w-4xl' autoPlay muted loop ></video>
                </div>
            </main>
        </>
    )
}