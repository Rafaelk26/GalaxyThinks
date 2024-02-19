// Imports from development;
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Components;
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

// Icon
import { FaEye } from 'react-icons/fa';

interface signupProps{
    user: string;
    email: string;
    password: string;
    confirm_password: string;
}

export function Signup(){
    
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [checkPass, setCheckPass] = useState('')
    const [isCheck, setIsCheck] = useState(false);

    // const nav = useNavigate()

    function handleSubmit(){
        
        const sign: signupProps = {
            user: user,
            email: email,
            password: pass,
            confirm_password: checkPass
        }

        console.log(sign)
    }


    function isCheckButton(){
        setIsCheck(true);
        if(isCheck === true){
            setIsCheck(false);
        }
    }


    return(

        <>
            <div className="max-h-full flex justify-center">
                <main className="w-full max-h-screen h-screen flex justify-center items-center">
                    <form method="#" onSubmit={handleSubmit} className='max-w-xl w-full flex flex-col border-solid border-2 rounded-xl box shadow-slate-50 p-2 px-7 bg-transparent items-center mt-20'>
                        <h1 className='text-white font-bold text-4xl flex justify-center pe-6 ps-6 pb-2 sm:pt-2'>Sign up</h1>
                        <p className='font-light text-white text-center max-w-56'>Do fill formulary down for sign up in the plataform! </p>
                        <div className='max-w-full flex flex-col'>
                            <div className='max-w-full flex justify-center gap-5 mt-5 flex-wrap'>
                                <div className='max-w-56'>
                                    <Input 
                                    nLabel='User' 
                                    type='text' 
                                    classLabel='mt-5 mb-1 text-white font-light' 
                                    className='text-white border w-full p-2 rounded-lg'
                                    onChange={(e)=> setUser(e.target.value)}
                                    value={user}/>    
                                </div>
                                <div className='max-w-56'>
                                    <Input 
                                    nLabel='Email' 
                                    type='text' 
                                    classLabel='mt-5 mb-1 text-white font-light' 
                                    className='text-white border w-full p-2 rounded-lg'
                                    onChange={(e)=> setEmail(e.target.value)}
                                    value={email}/>
                                </div>
                                <div className='max-w-56'>
                                    <Input 
                                    nLabel='Password' 
                                    type='text' 
                                    classLabel='mt-5 mb-1 text-white font-light' 
                                    className='text-white border w-full p-2 rounded-lg'
                                    onChange={(e)=> setPass(e.target.value)}
                                    value={pass}/>    
                                </div>
                                <div className='max-w-56'>
                                    <Input 
                                    nLabel='Confirm Password' 
                                    type='text' 
                                    classLabel='mt-5 mb-1 text-white font-light' 
                                    className='text-white border w-full mb-5 p-2 rounded-lg'
                                    onChange={(e)=> setCheckPass(e.target.value)}
                                    value={checkPass}/>
                                </div>
                            </div>
                            <div className="flex justify-center w-full mb-3">
                                <Button bName='Submit' type='submit'/>
                            </div>
                            <span className='text-white text-center mb-1'>Do you have account? <b><Link to={"/login"} className='text-blue-300'>Login</Link></b></span>
                        </div>
                    </form>
                </main>
            </div>
        </>


    )
}



                            {/* <div className="flex flex-col items-start relative">
                                <Input
                                    nLabel='Password' 
                                    type={isCheck === true ? 'text':'password'}
                                    classLabel='mb-1 text-white font-light' 
                                    className='text-white border w-full p-2 rounded-lg pr-10'
                                    onChange={(e) => setPass(e.target.value)}
                                    value={pass}
                                />
                                <FaEye color='white' size={18} className='absolute top-10 right-3 cursor-pointer' onClick={isCheckButton} />
                            </div> */}