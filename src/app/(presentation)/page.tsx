import { FeaturesSection } from '@/components/homepage/features-section';
import HeroSection from '@/components/homepage/hero-section';
import { LatestArrivals } from '@/components/homepage/latest-arrivals';
import { OurBrandsSection } from '@/components/homepage/our-brands-section';
import { PageProps } from '@/config/types';
import React from 'react'

const Home = async (props: PageProps) => {
    const searchParams = await props.searchParams;

  return (
    <div className='w-full min-h-screen bg-background'>
        <HeroSection searchParams={searchParams} />
        <FeaturesSection />
        <LatestArrivals />
        <OurBrandsSection />
    </div>
  )
}

export default Home
