// Imports from development
import { ReactNode } from 'react';

interface headerProps extends React.HTMLProps<HTMLHeadElement>{
    children?: ReactNode;
}

export function Header({children, ...rest}: headerProps){
    return(
        
        <header {...rest}>
            {children}
        </header>
        
    )
}