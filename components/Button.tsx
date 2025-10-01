import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface ButtonType {
    classList?:string,
    iconPosition?:"left" | "right",
    children:ReactNode,
    icon?:ReactNode,
    onClick?:MouseEventHandler<HTMLButtonElement>
}
const Button:FC<ButtonType> = ({classList, children, icon, iconPosition, onClick}) => {

  return (
    <button onClick={onClick} className={`${classList} flex py-[19px] px-[30px] gap-[12px] cursor-pointer hover:bg-transparent border-[2px] hover:text-[#A259FF] text-white rounded-[20px] border-transparent hover:border-[#A259FF] duration-300 bg-[#A259FF]`}>
        {iconPosition == "left" && icon && icon}
        {children}
        {iconPosition == "right" && icon && icon}
    </button>
  )
}

export default Button