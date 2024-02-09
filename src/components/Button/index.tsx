interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    bName: string;
}

export function Button({bName, ...rest}: buttonProps){
    return(

        <>
            <button className="bg-blue-500 text-white font-semibold w-max px-16 py-4 rounded-lg" {...rest}>{bName}</button>
        </>



    )
}