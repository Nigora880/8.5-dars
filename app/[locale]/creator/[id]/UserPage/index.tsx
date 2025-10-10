"use client";

import { useState } from "react";
import { CreatorType } from "@/@types/CreatorType";
import TabButton from "@/components/Button2";

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
        </div>
    );
};

export default CreatorsPage;
