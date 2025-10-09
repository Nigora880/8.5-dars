"use client"
import { usePathname, useRouter } from "@/i18n/navigation"
import { getCookie } from "cookies-next"
import { MouseEvent, useEffect, useState } from "react"

const LangConfig = () => {
    const pathname = usePathname()
    const b = getCookie("NEXT_LOCALE")
    const router = useRouter()
    const langList = ["EN", "RU", "UZ"]
    const [lang, setLang] = useState("EN")

    function handleLangChange(e: MouseEvent<HTMLParagraphElement>) {
        setLang((e.target as HTMLParagraphElement).textContent)
        router.push(pathname, { locale: (e.target as HTMLParagraphElement).textContent })
    }

    useEffect(() => {
        if (b == "UZ" || b == "EN" || b == "RU") {
            const findLang = langList.find(item => item == b)
            if (findLang) setLang(findLang)
        }
    }, [b])

    return (
        <div className="text-white hidden lg:block relative cursor-pointer hover:scale-[1.2] duration-300 lang-wrapper">
            {lang}
            <div className="absolute lang-inner duration-300 flex flex-col bg-[#A259FF] rounded-md right-[-9px] h-0 overflow-hidden top-[30px]">
                {langList.filter(item => item !== lang).map((item, index) => <p key={index} onClick={handleLangChange} className="inline-block p-2 hover:bg-white hover:text-black duration-300">{item}</p>)}
            </div>
        </div>
    )
}

export default LangConfig
