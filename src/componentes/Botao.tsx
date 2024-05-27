import { IButtonProps, Button, Link} from 'native-base';
import { ReactNode } from 'react';

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao({ children, autoSize = false, color, ...rest }: ButtonProps) {
    return (
        <>
            <Button mt={10} w={autoSize ? 'auto' : '100%'} bg={color || 'blue.800'} borderRadius="lg" _text={{ color: 'white' }} {...rest}>{children}</Button>
        </>
    )

}