// Components;
import { Header } from '../../components/Header';

// Image;
import imgTeste  from '../../assets/images/Planets and Galaxys/Saturno.png';

export function Main(){
    return(
        <>
            <div className="flex justify-center max-h-full">
            <main className="w-full min-h-min flex items-center mt-32 flex-col border-2 border-solid border-red-600">
                <Header className='flex flex-col justify-center items-center bg-transparent'>
                    <h1 className='text-white font-bold text-5xl'>Lorem</h1>
                    <nav className='mt-10 text-white'>
                        <ul className='flex gap-20 text-xl'>
                            <li>Estrelas</li>
                            <li>Planetas</li>
                            <li>Satélites</li>
                            <li>Galáxias</li>
                            <li>Outros</li>
                        </ul>
                    </nav>
                </Header>
                <section className='w-11/12 border-solid border-white border-2'>
                    <div className='w-1/4 max-w-md border-solid border-blue-600 border-2'>
                        <div className='w-full p-2 border-2 border-solid border-green-400'>
                            <img src={imgTeste} alt={'teste'} />
                        </div>
                    </div>
                </section>
            </main>
            </div>
        </>

    )
}