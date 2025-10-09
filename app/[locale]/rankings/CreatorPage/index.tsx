"use client";

import { useState } from "react";
import { CreatorType } from "@/@types/CreatorType";
import Image from "next/image";
import { API } from "@/hooks";
import TabButton from "@/components/TabButton";

const CreatorsPage = ({ creators }: { creators: CreatorType[] }) => {
    const [activeTab, setActiveTab] = useState<"today" | "week" | "month" | "all">("today");

    return (
        <div className="w-full">
            <div className="flex justify-between items-center containers">
                <TabButton label="Today" active={activeTab === "today"} onClick={() => setActiveTab("today")} />
                <TabButton label="This Week" active={activeTab === "week"} onClick={() => setActiveTab("week")} />
                <TabButton label="This Month" active={activeTab === "month"} onClick={() => setActiveTab("month")} />
                <TabButton label="All Time" active={activeTab === "all"} onClick={() => setActiveTab("all")} />
            </div>

            <div className="mt-[40px]">
                {activeTab === "today" && (
                    <div>
                        {creators.length > 0 ? (
                            <table className="w-full text-left border-separate border-spacing-y-[20px]">
                                <thead className="text-gray-400 text-sm border-b border-[#3B3B3B]">
                                    <tr>
                                        <th className="px-4">#</th>
                                        <th>Artist</th>
                                        <th className="px-4">Change</th>
                                        <th className="px-4">NFTs Sold</th>
                                        <th className="px-4">Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {creators.map((creator, index) => (
                                        <tr key={creator.id} className="bg-[#3B3B3B] text-white">
                                            <td className="px-4 py-[12px] rounded-l-[20px]">
                                                <p className="bg-[#2B2B2B] text-[#858584] flex justify-center items-center w-[30px] h-[30px] rounded-full">
                                                    {index + 1}
                                                </p>
                                            </td>
                                            <td className="py-[12px]">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={creator.image ? `${API}/file/${creator.image}` : "/default-avatar.png"}
                                                        alt={creator.username}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    {creator.username}
                                                </div>
                                            </td>
                                            <td className="px-4 text-green-400">{creator.change ?? "+1.41%"}</td>
                                            <td className="px-4">{creator.createdNFTs?.length ?? 0}</td>
                                            <td className="px-4 rounded-r-[20px]">{creator.volume ?? "12.4 ETH"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-center py-10 text-gray-400 text-lg">No creators found</p>
                        )}
                    </div>
                )}

                {activeTab === "week" && (
                    <div>
                        <p className="text-center py-10 text-gray-400 text-lg">No data for This Week</p>
                    </div>
                )}

                {activeTab === "month" && (
                    <div>
                        <p className="text-center py-10 text-gray-400 text-lg">No data for This Month</p>
                    </div>
                )}

                {activeTab === "all" && (
                    <div>
                        <p className="text-center py-10 text-gray-400 text-lg">No data for All Time</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatorsPage;
