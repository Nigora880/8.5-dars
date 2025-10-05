import { Creatortype } from "./CreatorType";

export interface NFTType {
    id:string,
    title:string,
    image:string[],
    price:string,
    highestBid: null | any,
    createdAt:string,
    updatedAt:string,
    creatorId:string,
    ownerId:string;
    creator:Creatortype
    owner: {
        id:string,
        username:string,
        email:string,
        password:string,
        image:string,
        role:string,
        bio:string,
        globeAccLink:string,
        discordAccLink:string,
        youtubeAccLink:string,
        twitterAccLink:string,
        instagramAccLink:string,
        createdAt:string,
        updatesAt:string;
    },
    auctions: any[]
}