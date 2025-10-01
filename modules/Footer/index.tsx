import { CustomImage, Heading, SendEmail, Text } from '@/components'
import { DiscordIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/icons'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const Footer = () => {
  const mediaList = [<DiscordIcon/>, <YoutubeIcon/>, <TwitterIcon/>, <InstagramIcon/>]
  return (
    <footer className='bg-[#3B3B3B] py-[40px]'>
      <div className="containers">
        <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between pb-[30px] border-b-[1px] border-[#858584] mb-[20px]">
          <div className="max-w-[243px]">
            <Link className='mb-[30px] inline-block' href={"/"}>
            <CustomImage src='/logo.svg' alt='logo' W={243} H={32}/>
            </Link>
            <Text classList='!mb-[20px]'>NFT marketplace UI created with Anima for Figma.</Text>
            <Text classList='!mb-[15px]'>Join our community</Text>
            <div className="flex items-center gap-[10px] text-[#858584]">
              {mediaList.map((item:ReactNode, index:number) => <Link className='hover:scale-[1.2] duration-300' key={index + 1} href={"/"} >{item}</Link>)}
            </div>
          </div>
          <div className="max-w-[133px]">
            <Heading>Explore</Heading>
            <div className="flex mt-[25px] flex-col gap-[20px]">
              <Link href={"/marketplace"}><Text>Marketplace</Text></Link>
              <Link href={"/ranking"}><Text>Rankings</Text></Link>
              <Link href={"/connect-wallet"}><Text>Connect a wallet</Text></Link>
            </div>
          </div>
          <div className="w-full sm:w-[420px]">
            <Heading classList='!mb-[25px]'>Join our weekly digest</Heading>
            <Text classList='!mb-[20px] max-w-[320px]'>Get exclusive promotions & updates straight to your inbox.</Text>
            <SendEmail/>
          </div>
        </div>
        <Text classList='!font-normal !text-[12px]'>Ⓒ NFT Market. Use this template freely.</Text>
      </div>
      
    </footer>
  )
}

export default Footer
