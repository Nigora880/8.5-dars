import { getRequest } from '@/server/getRequest'
import React from 'react'
import CreaterContent from './CreaterContent'

const Creators = async () => {
  const creators = await getRequest("/user?role=ARTIST")
  return <CreaterContent creators={creators.data}/>
}

export default Creators
