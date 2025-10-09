import { getRequest } from '@/server/getRequest'
import CollectionContent from './CollectionContent'

const Collection = async () => {
    const collections = await getRequest("/collections")
    return <CollectionContent collections={collections.data} />
}

export default Collection
