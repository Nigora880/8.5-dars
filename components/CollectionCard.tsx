import { CollectionType } from "@/@types/CollectionType"
import { FC } from "react"
import CustomImage from "./CustomImage"
import { API } from "@/hooks"
import Heading from "./Heading"
import Text from "./Text"

const CollectionCard:FC<{item:CollectionType}> = ({item}) => {
    console.log(item)
  return (
    <div className="w-[32%] cursor-pointer">
        <div className="w-[330px] h-[330px] duration-300 rounded-[20px] overflow-hidden collection-img-wrapper">
          <CustomImage classList="!duration-300" src={`${API}/file/${item.images[0]}`} alt="collection img" W={330} H={330}/>
        </div> 
        <div className="flex justify-between mt-[15px]">
        <div className="!w-[30%] !h-[100px] duration-300 rounded-[20px] overflow-hidden collection-img-wrapper">
          <CustomImage src={`${API}/file/${item.images[1]}`} alt="collection img" W={100} H={100}/>
       </div>
        <CustomImage classList="!w-[30%]" src={`${API}/file/${item.images[2]}`} alt="collection img" W={100} H={100}/>
        <button className="w-[30%] h-[100px] rounded-[20px] bg-[#A259FF] text-white flex items-center justify-center font-bold text-[22px]">{item.images.length}+</button>
        </div>
        <div className="mt-[15px]">
            <Heading tag="h3" classList="!mb-[10px]">{item.title}</Heading>
             <div className="flex items-center gap-[12px]">
              <CustomImage src={`${API}/file/${item.creator.image}`} alt="creator img" W={24} H={24}/>
              <Text classList="!font-normal">{item.creator.username}</Text>
            </div> 
        </div>
    </div>
  )
}

export default CollectionCard