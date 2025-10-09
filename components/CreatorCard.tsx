import { CreatorType } from '@/@types/CreatorType'
import React, { FC } from 'react'
import CustomImage from './CustomImage'
import { API } from '@/hooks'
import Heading from './Heading'
import Text from './Text'

const CreatorCard: FC<{ item: CreatorType, index:number }> = ({ item, index }) => {
    return (
        <div className='w-[240px] relative bg-[#3B3B3B] text-center rounded-[20px] p-[20px]'>
            <CustomImage classList='!mb-[20px] !mx-auto' src={`${API}/file/${item.image}`} alt='creator img' W={120} H={120} />
            <Heading classList='!mb-[5px]' tag='h3'>{item.username}</Heading>
            <Text><span className='text-[#858584]'>Total Sales:</span> 34.53 ETH</Text>
            <button className='w-[30px] h-[30px] bg-[#2B2B2B] rounded-full text-[16px] font-normal text-[#858584] absolute top-[18px] left-[20px] flex items-center justify-center'>{index + 1}</button>
        </div>
    )
}

export default CreatorCard
