import { getRequest } from '@/server/getRequest'
import React from 'react'
import NFTContent from './NFTContent'

const NFT = async () => {
    const nft = await getRequest("/nfts")
  return <NFTContent nft={nft.data} />
}

export default NFT