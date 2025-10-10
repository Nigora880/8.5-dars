import { SingleCreatorType } from "@/@types/SingleCreatorType"
import { Button, Heading, Text } from "@/components"
import { API } from "@/hooks"
import { CopyIcon, DisCordIcon, GlobusIcon, InstagramIcon, PlusIcon, TwitterIcon, YouTubeIcon } from "@/icons"
import { getRequest } from "@/server/getRequest"
import Image from "next/image"
import { FC } from "react"



const SingleCreator: FC<{ params: { id: string } }> = async ({ params }) => {
    const { id } = await params
    const singleData: SingleCreatorType = await getRequest(`/user/${id}`)
    return (
        <section>
            <div className="background-img h-[320px] w-full">
            </div>
            <div className="containers">
                <div>
                    <div className="mt-[-60px]">
                        <Image src={`${API}/file/${singleData.image}`} alt={singleData.username} width={120} height={120} className="rounded-md" />
                    </div>
                    <div className="flex justify-between py-[40px]">
                        <div className="w-[600px]">
                            <Heading tag="h2">{singleData.username}</Heading>
                            <div className="flex gap-[30px] pt-[30px]">
                                <div>
                                    <Heading>{singleData.createdNFTs.length}+</Heading>
                                    <Text>Created</Text>
                                </div>
                                <div>
                                    <Heading>{singleData.ownedNFTs.length}+</Heading>
                                    <Text>Owned</Text>
                                </div>
                                <div>
                                    <Heading>{singleData.collections.length}+</Heading>
                                    <Text>Collections</Text>
                                </div>
                            </div>
                            <div className="pt-[30px]">
                                <Text classList="!font-semibold !text-[20px]">Bio</Text>
                                <Text classList="!text-white">{singleData.bio}</Text>
                            </div>

                            <div className="pt-[30px]">
                                <Text classList="!font-semibold !text-[20px]">Links</Text>
                                <div className="flex gap-[10px] pt-[10px] text-[#858584]">
                                    {singleData.globeAccLink && (
                                        <a href={singleData.globeAccLink} target="_blank" rel="noreferrer"><GlobusIcon /></a>
                                    )}
                                    {singleData.discordAccLink && (
                                        <a href={singleData.discordAccLink} target="_blank" rel="noreferrer"><DisCordIcon /></a>
                                    )}
                                    {singleData.youtubeAccLink && (
                                        <a href={singleData.youtubeAccLink} target="_blank" rel="noreferrer"><YouTubeIcon /></a>
                                    )}
                                    {singleData.twitterAccLink && (
                                        <a href={singleData.twitterAccLink} target="_blank" rel="noreferrer"><TwitterIcon /></a>
                                    )}
                                    {singleData.instagramAccLink && (
                                        <a href={singleData.instagramAccLink} target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[20px] items-center top-0">
                            <Button classList="!p-[20px]" icon={<CopyIcon />} iconPosition="left">0xc0E3...B79C</Button>
                            <Button classList="!bg-transparent !border-[#A259FF] !p-[20px]" icon={<PlusIcon />} iconPosition="left">Follow</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[10px] border-t-[1px] border-[#858584]">
            </div>
        </section >
    )
}

export default SingleCreator
