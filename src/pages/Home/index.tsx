// Imports from development
import { useNavigate } from 'react-router-dom';

// Components
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

// Video and Image
import EarthVideo  from '../../assets/images/Planets and Galaxys/Terra Animado.webm';
import logoHeader from '../../assets/images/logoHeader.png'

// Style
import './index.css'

export function Home(){

    // Link for Login page
    const nav = useNavigate()

    return(
        <>
            <Header className='w-full flex justify-start items-center bg-black ps-2 z-20 absolute'>
                <img 
                src={logoHeader} 
                alt="Logo of site"
                className='header-logo
                w-56 
                sm:w-1/3 
                md:w-1/5 
                lg:w-1/6
                ' />
            </Header>
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
                    <Button type='button' bName='Partiuuu!' onClick={()=> nav("/login")} />
                </div>
                <div className="mt-24 w-full flex justify-center">
                    <video src={EarthVideo} className='opacity-75 w-full max-w-4xl' autoPlay muted loop ></video>
                </div>
            </main>
        </>
    )
}