import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button ({children, ...rest}: ButtonProps) {
  return (
    <button style={buttonStyle} data-testid="button" {...rest}>
      {children}
    </button>
  );
}

export const buttonStyle = {
  backgroundColor: 'red',
  width: '200px'
}