import { getRequest } from '@/server/getRequest'
import React from 'react'
import AuctionsContent from './AuctionsContent'

const Auctions = async () => {
    const auctions = await getRequest("/auctions")
  return <AuctionsContent auctions={auctions.data[0]}/>
}

export default Auctions
