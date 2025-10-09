import { CollectionType } from "@/@types/CollectionType"
import { FC } from "react"
import CustomImage from "./CustomImage"
import { API } from "@/hooks"
import Heading from "./Heading"
import Text from "./Text"

const CollectionCard: FC<{ item: CollectionType; className?: string }> = ({ item, className }) => {
  return (
    <div className={`w-full sm:w-[330px] ${className || ""}`}>
      <div className="w-full sm:w-[330px] h-[330px] overflow-hidden rounded-[20px] duration-300 collection-img-wrapper">
        <CustomImage classList="cursor-pointer !mx-auto !duration-300 rounded-[20px]" src={item?.images?.[0] ? `${API}/file/${item.images[0]}` : "/default-nft.png"} alt="collection img" W={330} H={330}/>
      </div>

      <div className="flex justify-between pt-[15px]">
        <div className="w-[100px] h-[100px] overflow-hidden rounded-[20px] duration-300 collection-img-wrapper">
          <CustomImage classList="cursor-pointer !duration-300 !w-full" src={item?.images?.[1] ? `${API}/file/${item.images[1]}` : "/default-nft.png"} alt="collection img" W={100} H={100}/>
        </div>
        <div className="w-[100px] h-[100px] overflow-hidden rounded-[20px] duration-300 collection-img-wrapper">
          <CustomImage classList="cursor-pointer !duration-300 !w-full" src={item?.images?.[2] ? `${API}/file/${item.images[2]}` : "/default-nft.png"} alt="collection img" W={100} H={100}/>
        </div>
        <button className="w-[100px] cursor-pointer flex items-center justify-center bg-[#A259FF] text-white font-bold text-[22px] rounded-[20px]">
          {item.images?.length || 0}+
        </button>
      </div>

      <div className="pt-[15px]">
        <Heading classList="!mb-[10px]" tag="h3">{item.title}</Heading>
        <div className="flex items-center gap-[12px]">
          <CustomImage classList="!rounded-full" src={item?.creator?.image ? `${API}/file/${item.creator.image}` : "/default-avatar.png"} alt={item?.creator?.username || "creator img"} W={24} H={24}/>
          <Text>{item?.creator?.username || "Unknown"}</Text>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
