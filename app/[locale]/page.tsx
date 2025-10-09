import { Auctions, Categories, Collection, Creators, Hero, NFT, Weekly, Works } from '@/modules'

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
      <Weekly/>
    </main>
  )
}

export default page
