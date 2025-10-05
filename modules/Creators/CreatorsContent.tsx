import { Creatortype } from '@/@types/CreatorType'
import { Button, CreatorCard, Heading, Text } from '@/components'
import { RocketIcon } from '@/icons'
import React, { FC } from 'react'

const CreatorsContent:FC<{creators:Creatortype[]}> = ({creators}) => {
  return (
    <section className='py-[80px]'>
      <div className="containers">
        <div className="flex items-center justify-between mb-[60px]">
          <div>
            <Heading tag='h2'>Top creators</Heading>
            <Text>Checkout Top Rated Creators on the NFT Marketplace</Text>
          </div>
          <Button icon={<RocketIcon/>} iconPosition='left'>View Rankings</Button>
        </div>
        <div className="flex justify-between flex-wrap">
          {creators.map((item, index) => <CreatorCard key={item.id} item={item} index={index}/>)}
        </div>
      </div>
    </section>
  )
}

export default CreatorsContent
