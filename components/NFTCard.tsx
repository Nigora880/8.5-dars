import { NftType } from '@/@types/NftType'
import React, { FC } from 'react'
import CustomImage from './CustomImage'
import { API } from '@/hooks'
import Heading from './Heading'
import Text from './Text'

const NFTCard: FC<{ item: NftType; className?: string }> = ({ item, className }) => {
    return (
        <div className={`w-[330px] nft-wrapper cursor-pointer rounded-[20px] overflow-hidden ${className}`}>
            <div className="w-[330px] overflow-hidden h-[296px]">
                <CustomImage
                    classList="!duration-300"
                    src={item?.image ? `${API}/file/${item.image}` : "/default-nft.png"}
                    alt={item?.title || "nft img"}
                    W={330}
                    H={296}
                />
            </div>

            <div className="py-[20px] px-[30px]">
                <Heading classList="!mb-[5px]">{item?.title || "Untitled NFT"}</Heading>

                <div className="flex items-center gap-[12px]">
                    <CustomImage
                        classList="!rounded-full"
                        src={item?.creator?.image ? `${API}/file/${item.creator.image}` : "/default-avatar.png"}
                        alt={item?.creator?.username || "creator img"}
                        W={24}
                        H={24}
                    />
                </div>

                <div className="flex justify-between items-center mt-[25px]">
                    <div>
                        <Text classList="!text-[#858584] !text-[12px]">Price</Text>
                        <Text>{item?.price ? `${item.price} ETH` : "—"}</Text>
                    </div>
                    <div className="text-end">
                        <Text classList="!text-[#858584] !text-[12px]">Highest Bid</Text>
                        <Text>0.33 wETH</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard
