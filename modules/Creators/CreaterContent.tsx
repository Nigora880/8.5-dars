import { CreatorType } from '@/@types/CreatorType'
import { Button, CreatorCard, Heading, Text } from '@/components'
import { RoketaIcon } from '@/icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { FC } from 'react'

const CreaterContent: FC<{ creators: CreatorType[] }> = ({ creators }) => {
    const t = useTranslations("creatorsContent")

    return (
        <section className='py-[80px]'>
            <div className="containers">
                <div className='flex items-center justify-between mb-[60px]'>
                    <div>
                        <Heading tag='h2'>{t("topCreators")}</Heading>
                        <Text>{t("checkoutTopRatedCreatorsOnTheNFTMarketplace")}</Text>
                    </div>
                    <Link href={"/rankings"}>
                        <Button icon={<RoketaIcon />} iconPosition='left'>{t("viewRankings")}</Button>
                    </Link>
                </div>
                <div className='flex gap-10 justify-between cursor-pointer flex-wrap'>
                    {creators.map((item, index) =>
                        <Link key={item.id} href={`/creator/${item.id}`}>
                            <CreatorCard item={item} index={index} />
                        </Link>)}
                </div>
            </div>
        </section>
    )
}

export default CreaterContent
