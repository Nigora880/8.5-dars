import { AuctionResultType } from '@/@types/AuctionResultType'
import { AuctionType } from '@/@types/AuctionsType'
import { UserType } from '@/@types/UserType'
import { Button, CustomImage, Heading, Text } from '@/components'
import { RocketIcon } from '@/icons'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'



const HeroContent:FC<{auctions: AuctionType[], artists:UserType[], totalSale:AuctionResultType[] }> = ({auctions, artists, totalSale}) => {
 const t = useTranslations('heroContent')
 
  return (
    <section className='py-[80px]'>
      <div className="containers flex flex-col gap-[40px] lg:gap-0 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[500px]">
            <Heading classList='!mb-[20px] !text-[28px] !leading-[110%]' tag='h1'>Discover digital art & Collect NFTs</Heading>
            <Text classList='!mb-[30px] !max-w-[370px] !capitalize'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</Text>
            <div className="hidden lg:block">
                <Button classList='!px-[50px]' iconPosition='left' icon={<RocketIcon/>}>Get Started</Button>
                <div className="flex mt-[30px] gap-[30px]">
                    <div>
                        <strong className='text-white text-[28px] font-bold'>{totalSale.length}+</strong>
                        <Text classList='!text-[23px]'>Total Sale</Text>
                    </div>
                    <div>
                        <strong className='text-white text-[28px] font-bold'>{auctions.length}+</strong>
                        <Text classList='!text-[23px]'>Auctions</Text>
                    </div>
                    <div>
                        <strong className='text-white text-[28px] font-bold'>{artists.length}+</strong>
                        <Text classList='!text-[23px]'>Artists</Text>
                    </div>
                </div>
            </div>
        </div>

     <div className='max-w-[510px]'>
					<CustomImage src='/hero-img.png' alt='Hero image' W={510} H={401} />
					<div className='py-[22px] px-[20px] mb-[40px] lg:mb-0 bg-[#3B3B3B] rounded-br-[20px] rounded-bl-[20px]'>
						<Heading tag='h3'>{t('imageTitle')}</Heading>
						<div className='flex items-center gap-[12px] mt-[10px]'>
							<CustomImage src='/avatar-img.png' alt='Hero image' W={24} H={24}/>
							<Text classList='!text-[16px]'>Animakid</Text>
						</div>
					</div>
					<div className='lg:hidden'>
						<Button classList='!w-full' icon={<RocketIcon />} iconPosition='left' > {t('heroButton')}
						</Button>
						<div className='mt-[30px] flex items-center justify-between'>
							<div>
								<strong className='font-bold text-[28px] text-white'> {totalSale.length}+ </strong>
								<Text classList='!text-[16px] sm:!text-[23px]'> {t('totalSale')} </Text>
							</div>
							<div>
								<strong className='font-bold text-[28px] text-white'> {auctions.length}+
								</strong>
								<Text classList='!text-[16px] sm:!text-[23px]'> {t('auctions')}
								</Text>
							</div>
							<div>
								<strong className='font-bold text-[28px] text-white'> {artists.length}+
								</strong>
								<Text classList='!text-[16px] sm:!text-[23px]'> {t('artists')}
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroContent