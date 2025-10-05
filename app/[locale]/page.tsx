import { Auctions, Categories, Creators, Hero, NFT } from "@/modules";
import Collections from "@/modules/Collection";
// import Creators from "@/modules/Creators";

export default function Home() {
  return (
  <main>
    <Hero/>
    <Collections/>
    <Creators/>
    <Categories/>
    <NFT/>
    <Auctions/>
  </main>
  );
}
