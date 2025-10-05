import { CategoryType } from '@/@types/CategoryType'
import { CategoryCard, Heading } from '@/components'
import React, { FC } from 'react'

const CategoryContent:FC<{categories:CategoryType[]}> = ({categories}) => {
  return (
    <section className='py-[80px]'>
        <div className="containers">
            <Heading tag='h2' classList='pb-[60px]'>Browse Categories</Heading>
            <div className="flex justify-between gap-[30px] flex-wrap">
                {categories.map(item => <CategoryCard key={item.id} item={item}/>)}
            </div>
        </div>
    </section>
  )
}

export default CategoryContent