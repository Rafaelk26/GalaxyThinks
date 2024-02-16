// Imports from development;
import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';

// Components;
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Icon
import { FaEye } from 'react-icons/fa';


export function Login(){

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [isCheck, setIsCheck] = useState(false);

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        alert('envio ao back-end...')
    }

    function isCheckButton(){
        setIsCheck(true);
        if(isCheck === true){
            setIsCheck(false);
        }
    }

    return(

        <>
            <div className="flex justify-center max-h-full">
            <main className="w-full max-h-screen h-screen flex justify-center items-center bg-transparent">
                <form method="#" onSubmit={handleSubmit} className='max-w-xs w-full flex flex-col border-solid border-2 rounded-lg p-3 px-7 bg-transparent items-center'>
                    <h1 className='text-white font-bold text-4xl flex justify-center pt-6 pe-6 ps-6 pb-2'>Login</h1>
                    <div className='w-full flex flex-col'>
                        <Input 
                        nLabel='User' 
                        type='text' 
                        classLabel='mt-5 mb-1 text-white font-light' 
                        className='text-white border w-full mb-4 p-2 rounded-lg'
                        onChange={(e)=> setUser(e.target.value)}
                        value={user}/>
                        <div className='flex flex-col mb-4'>
                        <div className="flex flex-col items-start relative">
                            <Input
                                nLabel='Password' 
                                type={isCheck == true ? 'text':'password'}
                                classLabel='mb-1 text-white font-light' 
                                className='text-white border w-full p-2 rounded-lg pr-10'
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                id='password'
                            />
                            <FaEye color='white' size={18} className='absolute top-10 right-3 cursor-pointer' onClick={isCheckButton} />
                        </div>
                            <Link to={"/password"} className='text-blue-300 mt-1 flex justify-end hover:text-white hover:underline'>Forgot password?</Link>
                        </div>
                        <div className="flex justify-center w-full mb-3">
                            <Button bName='Submit' type='submit'/>
                        </div>
                        <span className='text-white text-center mb-1'>Don't have account? <b><Link to={"/signup"} className='text-blue-300'>Sign up</Link></b></span>
                    </div>
                </form>
            </main>
            </div>
        </>


    )
}