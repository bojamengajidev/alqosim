"use client"

import dynamic from "next/dynamic";
import { HijriCalendar } from "@/components/calender/hijriyah-calender";


const QuotesRotator = dynamic(
  () => import("@/components/section/quotes").then(m => m.QuotesRotator),
  {
    ssr: false,
    loading: () => (
      <div className="h-40 rounded-xl bg-slate-100 dark:bg-slate-900 animate-pulse" />
    ),
  }
);

export default function SubHeader() {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">

          {/* KALENDER — 40% */}
          <div className="w-full lg:basis-[40%] lg:max-w-[40%] max-w-md mx-auto lg:mx-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 dark:invert">
              Kalender
            </h1>
            <HijriCalendar />
            <p className="py-2 text-sm text-justify lg:text-base text-gray-600">
              Kalender hijriyah dilengkapi dengan pengingat ayyamul bidh. Setiap tanggal 13,14,15 bulan hijriyah. 
            </p>
          </div>

          {/* QUOTES — 60% */}
          <div className="w-full lg:basis-[60%] lg:max-w-[60%]">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 dark:invert">
              Kutipan Hadits
            </h1>


            <div className="
              relative
              -mx-4 md:mx-0
              overflow-x-auto
              motion-safe:animate-in
              motion-safe:fade-innp
              motion-safe:slide-in-from-bottom-2
              duration-500
              will-change-transform
            ">
              <QuotesRotator />

              <p className="py-2 text-justify text-sm lg:text-base text-gray-600 max-w-2xl">
                Menyajikan hadits-hadits shahih pilihan sebagai pengingat jiwa, Semoga kita dapat memperoleh pelajaran serta kemudahan dalam meneladani dan mengikuti beliau Shalallahu A'laihi Wasalam.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
