import ClientLayout from "./client-layout";

import SubHeader from "@/components/section/sub-section";
import SubAmalan from "@/components/section/amalan-section";
import Hero from "@/components/hero/hero";
import Donasi from "@/components/section/donasi-section";


import FeatureSection from "@/components/masjid/feature-section";

import BlogSection from "@/components/masjid/blog-section";
import SubMedia from "@/components/section/media-section";



// This page is using the craft.tsx component and design system
export default function Home() {
   

  return (

    <ClientLayout>
    <Hero />
    <section className="px-0 sm:px-10 md:px-10 lg:px-20"> 
      <SubHeader />
      <FeatureSection />
      <BlogSection/>
      <SubMedia/>
    </section>
    <SubAmalan />
    <Donasi />
    
 
    </ClientLayout>
  );
}



