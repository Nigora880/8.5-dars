import { NFTType } from '@/@types/NftType'
import { Button, Heading, NFTCard } from '@/components'
import { EyeIcon } from '@/icons'
import React, { FC } from 'react'

const NFTContent:FC<{nft:NFTType[]}> = ({nft}) => {
  return (
    <section className='py-[80px]'>
        <div className="containers">
            <div className="flex items-center justify-between mb-[60px]">
                <div>
                    <Heading classList='!mb-[10px]' tag='h2' >Discover More NFTs</Heading>
                    <Heading classList='!font-normal'>Explore new trending NFTs</Heading>
                </div>
                <Button classList='!px-[50px]' icon={<EyeIcon/>} iconPosition='left'>See All</Button>
            </div>
            <div className="flex items-center justify-between">
                {nft.map(item => <NFTCard item={item} key={item.id} />)}
            </div>
        </div>
    </section>
  )
}

export default NFTContent