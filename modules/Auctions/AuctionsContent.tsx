import { AuctionType } from '@/@types/AuctionsType'
import { AuctionCountdown, Button, CustomImage, Heading } from '@/components'
import { API } from '@/hooks'
import { EyeIcon } from '@/icons'
import React, { FC } from 'react'

const AuctionsContent:FC<{auctions:AuctionType}> = ({auctions}) => {
  return (
    <section style={{backgroundImage: `url(${API}/file/${auctions.nft.image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundAttachment:"fixed"}} className="py-[80px] flex items-end relative h-[660px]">
        <div className="containers !w-full flex justify-between items-end AuctionCountdown">
            <div>
                <button className="mb-[30px] flex items-center gap-[12px] text-white bg-[#3B3B3B] py-[20px] px-[20px] rounded-[20px]">
                    <CustomImage src={`${API}/file/${auctions.nft.creator.image}`} alt="img" W={24} H={24}/>
                    {auctions.nft.creator.username}
                </button>
                <Heading classList="!mb-[30px]">{auctions.nft.title}</Heading>
                <Button classList="!bg-white !text-black !px-[50px]" icon={<EyeIcon/>} iconPosition="left">{("button")}</Button>
            </div>
            <AuctionCountdown/>
        </div>
    </section>
  )
}

export default AuctionsContent
