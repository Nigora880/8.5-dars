import { Auctions, Categories, Collection, Creators, Hero, NFT, Rankings, Works } from '@/modules'

const page = () => {
  return (
    <main>
      <Hero/>
      <Collection/>
      <Creators/>
      <Categories/>
      <NFT/>
      <Auctions/>
      <Works/>
      <Rankings/>
    </main>
  )
}

export default page
