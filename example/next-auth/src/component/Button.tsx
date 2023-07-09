import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

type Props = PropsWithChildren &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export function Button(props: Props) {
  return (
    <button
      {...props}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
}
