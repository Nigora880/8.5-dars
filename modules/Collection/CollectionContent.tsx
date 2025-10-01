import { CollectionType } from "@/@types/CollectionType"
import { CollectionCard, Heading, Text } from "@/components"
import { FC } from "react"

const CollectionContent:FC<{collections:CollectionType[]}> = ({collections}) => {
  return (
    <section className="py-[80px]">
      <div className="containers">
        <Heading tag="h2" classList="!mb-[10px]" >Trending collection</Heading>
        <Text classList="!text-[22px] !mb-[60px]">Checkout our weekly updated trending collection.</Text>
         <div className="flex justify-between">
         {collections.map(item => <CollectionCard key={item.id} item={item}/>)}
         </div>
      </div>
      
    </section>
  )
}

export default CollectionContent
