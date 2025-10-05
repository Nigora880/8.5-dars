"use client"
import { getCookie } from 'cookies-next'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { MouseEvent, useEffect, useState } from 'react'

const LangConfig = () => {
    const router = useRouter()
    const b = getCookie("NEXT_LOCALE")
    const langList = ["EN", "UZ"]
    const pathname = usePathname()
    const [lang, setLang] = useState("EN")

    function handleLangChange(e:MouseEvent<HTMLParagraphElement>){
        setLang((e.target as HTMLParagraphElement).textContent)
        router.push(pathname, {locale : (e.target as HTMLParagraphElement).textContent})
    }
    useEffect(() => {
       const b = getCookie("NEXT_LOCALE")?.toString().toUpperCase()
       if (b && langList.includes(b)) {
        setLang(b)
       }
    },[])
  return (
    <div className="lang-wrapper hidden lg:block text-white relative cursor-pointer !duration-500">
    <p className="p-2 mb-[2px]">{lang}</p>
    <div className="absolute lang-inner duration-300 flex flex-col bg-[#A259FF] h-0 right-[-10] top-[30px] overflow-hidden rounded-md ">
        {langList.filter(item => item !== lang).map((item, index) => <p key={index} onClick={handleLangChange} className="inline-block p-2 hover:bg-white hover:text-[#A259FF] duration-500">{item}</p>)}
    </div>
</div>
)
}

export default LangConfig
