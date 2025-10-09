import { CollectionType } from "./CollectionType"

export interface SingleCreatorType {
    id: string,
    username: string,
    email: string,
    password: string,
    image: string,
    role: string,
    bio: string,
    globeAccLink: string,
    discordAccLink: string,
    youtubeAccLink: string,
    twitterAccLink: string,
    instagramAccLink: string,
    createdAt: string,
    updatedAt: string,
    createdNFTs: [],
    ownedNFTs: [],
    collections: CollectionType[],
    auctionResults: []
}