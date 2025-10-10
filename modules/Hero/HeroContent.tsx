import { AuctionResulType } from '@/@types/AuctionResultType'
import { AuctionType } from '@/@types/AuctionType'
import { UserType } from '@/@types/UserType'
import { Button, CustomImage, Heading, Text } from '@/components'
import { RoketaIcon } from '@/icons'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

const HeroContent: FC<{ auctions: AuctionType[], artists: UserType[], totalSale: AuctionResulType[] }> = ({ auctions, artists, totalSale }) => {
  const t = useTranslations("heroContent")

  return (
    <section className='py-[80px]'>
      <div className="containers flex flex-col gap-[40px] lg:gap-0 lg:flex-row justify-between items-center">
        <div className='w-full lg:w-[500px]'>
          <Heading classList='!mb-[20px] !text-[28px] lg:!text-[60px] !leading-[110%]' tag='h1'>{t("HeadingNFTMARKETPLACE")}</Heading>
          <Text classList='!mb-[30px] !max-w-[400px] capitalize'>{t("titleNFTMARKETPLACE")}</Text>
          <div className='hidden lg:block'>
            <Button icon={<RoketaIcon />} iconPosition='left' >{t("getStarted")}</Button>
            <div className='pt-[30px] flex items-center gap-[25px]'>
              <div>
                <strong className='font-bold text-white text-[28px]'>{totalSale.length}+</strong>
                <Text classList='!text-[23px]'>{t("totalSale")}</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{auctions.length}+</strong>
                <Text classList='!text-[23px]'>{t("auctions")}</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{artists.length}+</strong>
                <Text classList='!text-[23px]'>{t("artists")}</Text>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[510px]'>
          <CustomImage src={"/hero-img.png"} alt='hero img' W={510} H={401} />
          <div className='py-[22px] mb-[40px] lg:mb-0 px-[20px] bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px]'>
            <Heading tag='h3'>{t("spaceWalking")}</Heading>
            <div className='flex items-center gap-[12px] pt-[10px]'>
              <CustomImage src={"/avatar.svg"} alt='avatar img' W={24} H={24} />
              <Text classList='!text-[16px] !text-[#FFFFFF]'>{t("animakid")}</Text>
            </div>
          </div>
          <div className='lg:hidden'>
            <Button classList='!w-full' icon={<RoketaIcon />} iconPosition='left'>{t("getStarted")}</Button>
            <div className='pt-[30px] flex items-center justify-between'>
              <div>
                <strong className='font-bold text-white text-[28px]'>{totalSale.length}k+</strong>
                <Text classList='!text-[16px]'>{t("totalSale")}</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{auctions.length}k+</strong>
                <Text classList='!text-[16px]'>{t("auctions")}</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{artists.length}k+</strong>
                <Text classList='!text-[16px]'>{t("artists")}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroContent
