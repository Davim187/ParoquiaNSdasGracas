import { ReactNode } from 'react';
import { Div } from './style';

// Define a prop type interface
interface BottonWhatsappProps {
  children?: ReactNode;
}

export function BottonWhatsapp({ children }: BottonWhatsappProps) {
  return (
    <Div>
      {children}
    </Div>
  );
}
