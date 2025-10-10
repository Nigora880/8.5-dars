"use client";

import { TabButtonType } from "@/@types/tabButtonType";
import { Heading } from "@/components";

const Button2 = ({ label, active, onClick, count }: TabButtonType) => {
    return (
        <button onClick={onClick} className={`w-[262px] py-[14px] text-center cursor-pointer border-b-2 ${active ? "border-[#A259FF] text-white" : "border-transparent text-[#858584]" }`}>
            <Heading tag="h3">{label}</Heading>
            {count !== undefined && (
                <span className={`px-2 py-1 rounded-[20px] text-sm ${active ? "bg-[#858584]" : "bg-[#3B3B3B]"}`}>
                    {count}
                </span>
            )}
        </button>
    );
};

export default Button2;
