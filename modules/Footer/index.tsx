import { CustomImage, Heading, SendEmail, Text } from "@/components"
import { DisCordIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "@/icons"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ReactNode } from "react"

const Footer = () => {
    const mediaList = [< DisCordIcon />, <YouTubeIcon />, <TwitterIcon />, <InstagramIcon />]
    const t = useTranslations("footerContent")

    return (
        <footer className="bg-[#3B3B3B] py-[30px]">
            <div className="containers"> 
                <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between pb-[30px] border-b-[1px] border-[#858584] mb-[20px]">
                    <div className="max-w-[243px] ">
                        <Link href={"/"}>
                            <CustomImage classList="!mb-[20px] sm:!mb-[30px]" src="/site-logo.svg" alt="site logo" W={243} H={32} />
                        </Link>
                        <Text classList="!mb-[20px]">{t("nftMarketplaceUICreatedWithAnimaForFigma")}</Text>
                        <Text classList="!mb-[15px]">{t("joinOurCommunity")}</Text>
                        <div className="flex gap-[10px] items-center text-[#858584]">
                            {mediaList.map((item: ReactNode, index: number) => <Link className="hover:scale-[1.2] duration-300" key={index + 1} href={"/"}>{item}</Link>)}
                        </div>
                    </div>
                    <div className="max-w-[240px]">
                        <Heading>{t("explore")}</Heading>
                        <div className="flex flex-col gap-[20px] mt-[25px]">
                            <Link href={"/marketplace"}><Text>{t("marketplace")}</Text></Link>
                            <Link href={"/rankings"}><Text>{t("rankings")}</Text></Link>
                            <Link href={"/connect-wallet"}><Text>{t("connectWallet")}</Text></Link>
                        </div>
                    </div>
                    <div className="w-full sm:w-[420px]">
                        <Heading classList="mb-[25px]">{t("joinOurWeeklyDigest")}</Heading>
                        <Text classList="mb-[20px] max-w-[330px]">{t("getExclusivePromotions&UpdatesStraightToYourInbox")}</Text>
                        <SendEmail/>
                    </div>
                </div>
                <Text classList="!text-[12px] font-normal">Ⓒ {t("nFTMarketUseThisTemplateFreely")}</Text>
            </div>
        </footer>
    )
}

export default Footer
