import { Heading, Text } from "@/components"
import { useTranslations } from "next-intl"


const WorksContent = () => {
    const t = useTranslations("worksContent")

    return (
        <section className="py-[80px]">
            <div className="containers">
                <Heading tag="h2">{t("howItWorks")}</Heading>
                <Heading classList="!font-normal">{t("findOutHowToGetStarted")}</Heading>
                <div className="flex justify-between gap-[30px]">
                    <div className="max-w-[330px] text-center rounded-[20px] mt-[48px] bg-[#3B3B3B] pb-[30px] pt-[10px] px-[40px]">
                        <img src="/works1.png" alt="works img" width={250} height={250} className="mb-[20px]" />
                        <Heading>{t("setupYourWallet")}</Heading>
                        <Text classList="!mt-[10px]">{t("setUpYourWalletOfChoice")}</Text>
                    </div>
                    <div className="max-w-[330px] text-center rounded-[20px] mt-[48px] bg-[#3B3B3B] pb-[30px] pt-[10px] px-[40px]">
                        <img src="/works2.png" alt="works img" width={250} height={250} className="mb-[20px]" />
                        <Heading>{t("createCollection")}</Heading>
                        <Text classList="!mt-[10px]">{t("uploadYourWork")} </Text>
                    </div>
                    <div className="max-w-[330px] text-center rounded-[20px] mt-[48px] bg-[#3B3B3B] pb-[30px] pt-[10px] px-[40px]">
                        <img src="/works3.png" alt="works img" width={250} height={250} className="mb-[20px]" />
                        <Heading>{t("startEarning")} </Heading>
                        <Text classList="!mt-[10px]">{t("chooseBetweenAuctions")}</Text>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorksContent
