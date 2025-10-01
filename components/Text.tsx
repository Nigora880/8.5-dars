import React, { FC, ReactNode } from 'react'

interface TextType {
    classList?:string,
    children:ReactNode
}

const Text:FC<TextType> = ({classList, children}) => {
  return ( 
    <p className={`font-normal text-[16px] text-[#CCCCCC] ${classList}`}>{children}</p>
  )
}

export default Text