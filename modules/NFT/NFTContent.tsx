import { NftType } from "@/@types/NftType"
import { Button, Heading, NFTCard } from "@/components"
import { EyeIcon } from "@/icons"
import { useTranslations } from "next-intl"
import { FC } from "react"

const NFTContent: FC<{ nft: NftType[] }> = ({ nft }) => {
    const t = useTranslations("nftContnent")
    return (
        <section className="py-[80px]">
            <div className="containers">
                <div className="flex  items-center justify-between mb-[60px]">
                    <div>
                        <Heading tag="h2" classList="!mb-[10px]">{t("discoverMoreNfts")}</Heading>
                        <Heading classList="!font-normal">{t("exploreNewTrendingNfts")}</Heading>
                    </div>
                    <Button icon={<EyeIcon />} iconPosition="left" classList="!px-[50px]">{t("seeAll")}</Button>
                </div>
                <div className="flex flex-wrap justify-between gap-[30px]">
                    {nft.map(item => <NFTCard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    )
}

export default NFTContent
