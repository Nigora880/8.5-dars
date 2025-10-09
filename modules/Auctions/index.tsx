import { getRequest } from "@/server/getRequest"
import AuctionsContnet from "./AuctionsContnet"

const Auctions = async () => {
    const auctions = await getRequest("/auctions")
  return <AuctionsContnet auctions={auctions.data[0]}/>
}   

export default Auctions
