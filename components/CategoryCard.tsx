import { CategoryType } from "@/@types/CategoryType"
import { FC } from "react"
import CustomImage from "./CustomImage"
import { API } from "@/hooks"
import Heading from "./Heading"

const CategoryCard: FC<{ item: CategoryType }> = ({ item }) => {
    return (
        <div className="w-[240px] category-card rounded-[20px] overflow-hidden cursor-pointer">
            <div className="!relative w-[240px] h-[240px] overflow-hidden">
                <CustomImage classList="blur !duration-300 category-img" src={`${API}/file/${item.image}`} alt="category img" W={240} H={240} />
                <CustomImage classList="!absolute category-icon top-0 left-0 right-0 bottom-0 m-auto" src={`${API}/file/${item.icon}`} alt="category icon" W={100} H={100} />
            </div>
            <div className="py-[20px] px-[30px] bg-[#3B3B3B]">
                <Heading>{item.name}</Heading>
            </div>
        </div>
    )
}

export default CategoryCard
