import ClientLayout from "./client-layout";
import type { Metadata } from "next";
import SubHeader from "@/components/section/sub-section";
import SubAmalan from "@/components/section/amalan-section";
import Hero from "@/components/hero/hero";
import Donasi from "@/components/section/donasi-section";


import FeatureSection from "@/components/masjid/feature-section";

import BlogSection from "@/components/masjid/blog-section";
import SubMedia from "@/components/section/media-section";

export const metadata: Metadata = {
  title: "Masjid Muhammad Al Qosim",
  description:
    "Masjid Muhammad Al Qosim di Kecamatan Boja sebagai pusat dakwah dan pendidikan Islam.",
};

// This page is using the craft.tsx component and design system
export default function Home() {
   

  return (

    <ClientLayout>
  <main>

    <header>
      <Hero />
    </header>

    <section className="px-0 sm:px-10 md:px-10 lg:px-20">
      <SubHeader />
      <FeatureSection />
      <BlogSection />
      <SubMedia />
    </section>

    <section>
      <SubAmalan />
    </section>

    <section>
      <Donasi />
    </section>

  </main>
</ClientLayout>
  );

  
}



