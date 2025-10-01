import { FC, ReactNode } from "react"

interface HeadingType {
    tag?:"h1" | "h2" | "h3" | "h4",
    children:ReactNode,
    classList?:string
}

const Heading:FC<HeadingType> = ({tag,children, classList}) => {
    if(tag == "h1") {
          return <h1 className={`${classList} text-white sm:!text-[67px] font-semibold`} >{children}</h1>
    }
   else if(tag == "h2") {
        return <h1 className={`${classList} text-white sm:!text-[38px] font-semibold`} >{children}</h1>
  }
   else if(tag == "h3") {
    return <h1 className={`${classList} text-white sm:!text-[22px] font-semibold`} >{children}</h1>
}
   else if(tag == "h4") {
    return <h1 className={`${classList} text-white sm:!text-[16px] font-semibold`} >{children}</h1>
}
else {
    return <strong className={`${classList} inline-block text-white sm:!text-[22px] font-semibold`} >{children}</strong>

}
  

}

export default Heading