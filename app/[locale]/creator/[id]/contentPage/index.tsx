"use client"

import { useState } from "react"
import { CollectionCard, NFTCard } from "@/components"
import { SingleCreatorType } from "@/@types/SingleCreatorType"
import TabButton from "@/components/TabButton"

const ContentPage = ({ singleData }: { singleData: SingleCreatorType }) => {
    const [activeTab, setActiveTab] = useState<"created" | "owned" | "collections">("created")

    return (
        <div>
            <div className="flex justify-between items-center containers">
                <TabButton label="Created" count={singleData.createdNFTs.length} active={activeTab === "created"} onClick={() => setActiveTab("created")} />
                <TabButton label="Owned" count={singleData.ownedNFTs.length} active={activeTab === "owned"} onClick={() => setActiveTab("owned")} />
                <TabButton label="Collections" count={singleData.collections.length} active={activeTab === "collections"} onClick={() => setActiveTab("collections")} />
            </div>

            <div className="bg-[#3B3B3B] py-[40px]">
                <div className="containers">
                    {activeTab === "created" && (
                        <div className="flex flex-wrap  justify-between gap-[30px]">
                            {singleData.createdNFTs.length > 0 ? (
                                singleData.createdNFTs.map((item: any) => (
                                    <NFTCard className="bg-[#2B2B2B]" key={item.id} item={item} />
                                ))
                            ) : (
                                <p className="text-center w-full">No created NFTs</p>
                            )}
                        </div>
                    )}

                    {activeTab === "owned" && (
                        <div className="flex flex-wrap justify-between gap-[30px]">
                            {singleData.ownedNFTs.length > 0 ? (
                                singleData.ownedNFTs.map((owend: any) => (
                                    <NFTCard className="bg-[#2B2B2B]" key={owend.id} item={owend} />
                                ))
                            ) : (
                                <p className="text-center w-full">No owned NFTs</p>
                            )}
                        </div>
                    )}

                    {activeTab === "collections" && (
                        <div className="flex flex-wrap justify-between gap-[30px]">
                            {singleData.collections.length > 0 ? (
                                singleData.collections.map((col: any) => (
                                    <CollectionCard key={col.id} item={col} />
                                ))
                            ) : (
                                <p className="text-center w-full">No collections</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}



export default ContentPage
