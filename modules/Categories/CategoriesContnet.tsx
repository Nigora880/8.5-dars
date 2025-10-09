import { CategoryType } from "@/@types/CategoryType"
import { CategoryCard, Heading } from "@/components"
import { useTranslations } from "next-intl"
import { FC } from "react"

const CategoriesContnet: FC<{ categories: CategoryType[] }> = ({ categories }) => {
  const t = useTranslations("categoriesContent")
  return (
    <section className="py-[80px]">
      <div className="containers">
        <Heading tag="h2" classList="!mb-[60px]">{t("browseCategories")}</Heading>
        <div className="flex justify-between gap-[30px] flex-wrap">
          {categories.map(item => <CategoryCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}

export default CategoriesContnet
