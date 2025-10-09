import CategoriesContnet from './CategoriesContnet'
import { getRequest } from '@/server/getRequest'

const Categories = async () => {
    const categories = await getRequest("/categories")
    return <CategoriesContnet categories={categories.data} />
}

export default Categories