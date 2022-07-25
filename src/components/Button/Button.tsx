import React, { FC } from "react";

export type PropsType = {
  label: string;
}

const Button: FC<PropsType> = (props) => (
  <button>{props.label}</button>
)

export default Button;
