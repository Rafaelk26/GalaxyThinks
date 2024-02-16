import { ReactNode } from "react";

interface inputProps extends React.HTMLProps<HTMLInputElement>{
    nLabel: string;
    classLabel: string;
}

export function Input({nLabel, classLabel, ...rest}: inputProps){
    return(

        <>

            <label className={classLabel}>{nLabel}</label>
            <input className="" {...rest} />
    
        </>



    )
}