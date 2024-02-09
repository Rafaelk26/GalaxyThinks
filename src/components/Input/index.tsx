interface inputProps extends React.HTMLProps<HTMLInputElement>{
    nLabel: string;
}

export function Input({nLabel, ...rest}: inputProps){
    return(

        <>

            <label>{nLabel}</label>
            <input {...rest} />
        
        </>



    )
}