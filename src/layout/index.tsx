// Import from development;
import { Outlet } from 'react-router-dom';

// Components;
import { Header } from '../components/Header';

// Images
import logoHeaderShort  from '../assets/images/logoLogin.png';

export function Layout(){
    return (

        <>
            <Header className='w-full flex justify-start items-center bg-black ps-2 z-20 absolute'>
                <img 
                src={logoHeaderShort} 
                alt="Logo of site"
                className='header-logo
                mt-5
                w-44
                sm:w-2/12 
                md:w-2/12 
                lg:w-2/12
                xl:w-2/12
                ' />
            </Header>
            <Outlet />
        
        </>

    )
}