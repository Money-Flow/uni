import React, { FC } from 'react'

export type PropsType = {
    label: string
}

const Button: FC<PropsType> = ({ label }) => (
    <button type="button">{label}</button>
)

export default Button
