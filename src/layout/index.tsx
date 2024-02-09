// Import from development;
import { Outlet } from 'react-router-dom';

// Components;
import { Header } from '../components/Header';

// Images
import logoHeader  from '../assets/images/logoHeader.png';

export function Layout(){
    return (

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
            <Outlet />
        
        </>

    )
}