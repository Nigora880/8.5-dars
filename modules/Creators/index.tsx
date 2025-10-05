import { getRequest } from "@/server/getRequest"
import CreatorsContent from "./CreatorsContent"

const Creators = async () => {
  const creators = await getRequest("/user?role=ARTIST")
  return <CreatorsContent creators = {creators.data ? creators.data : []}/>
}

export default Creators
