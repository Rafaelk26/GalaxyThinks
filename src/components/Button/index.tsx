interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    type: "submit" | "reset" | "button";
    bName: string;
}

export function Button({bName, type, ...rest}: buttonProps){
    return(

        <>
            <button type={type} className="
            bg-blue-600 text-white font-semibold w-max px-16 py-3 rounded-lg transition duration-500
            hover:shadow-md hover:shadow-cyan-500 hover:outline hover:outline-2 hover:outline-blue-400 hover:text-cyan-100" 
            {...rest}>
                {bName}
            </button>
        </>



    )
}