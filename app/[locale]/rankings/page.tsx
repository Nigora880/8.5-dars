
import { Heading } from "@/components";
import { getRequest } from "@/server/getRequest";
import { CreatorType } from "@/@types/CreatorType";
import CreatorsPage from "../creator/[id]/UserPage";

const RankingsPage = async () => {
    const response = await getRequest("/user?role=ARTIST");

    const creators: CreatorType[] = response?.data || [];

    return (
        <section className="containers">
            <div className="py-[80px]">
                <Heading classList="!text-[51px]" tag="h1">Top Creators</Heading>
                <Heading>Check out top ranking NFT artists on the NFT Marketplace.</Heading>
            </div>
            <div className="py-[40px]">
                <CreatorsPage creators={creators} />
            </div>
        </section>
    );
};

export default RankingsPage;
