import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-20">
      <div className="container mx-auto py-12">
        <div className="
          flex flex-col
          gap-12
          items-center
          lg:flex-row
          lg:items-center
        ">

          {/* TEXT — 40% */}
          <div className="
            w-full
            lg:basis-[40%]
            lg:max-w-[40%]
          ">
            <h1  className="
              hero-title
              mb-4
              text-4xl md:wrap-anywhere dark:text-white
            ">
              Menebarkan Sunnah Rasulullah ﷺ Membangun Umat
            </h1>

            <p className="
              font-caption
              mb-8
              max-w-80
              text-justify
              text-sm text-slate-600
            ">
              Masjid Muhammad Al Qosim pusat pembinaan umat melalui dakwah dan pendidikan Islam berdasarkan Al-Qur’an dan Sunnah.
            </p>

            <Link
              href="/page/jalan-buntu"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#ffae00]
                px-5 py-3
                text-xs text-white
              "
            >
              <Image
                src="/icons/icon-eye.svg"
                alt=""
                width={16}
                height={16}
               
              />
              Selengkapnya
            </Link>
          </div>

          {/* IMAGE — 60% */}
          <div className="
            relative w-full
            lg:basis-[60%]
            lg:max-w-[60%]
            max-w-xl mx-auto
          ">

            {/* MOBILE */}
            <div className="md:hidden space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/img-header.webp"
                  alt="Hero utama"
                  fill
                  fetchPriority="high"
                  loading="lazy"
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    40vw
                  "
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/img-header2.webp"
                  alt="Hero kedua"
                  fill
                  loading="lazy"
                  sizes="                 (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    40vw
                  "
                  className="object-cover"
                />
              </div>
            </div>

            {/* DESKTOP */}
            <div className="relative hidden md:block aspect-video">

              {/* LCP IMAGE */}
              <div className="absolute top-0 right-0 w-[85%] h-[95%] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/img-header.webp"
                  alt="Hero utama"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              {/* SECOND IMAGE */}
              <div className="absolute bottom-[-5%] left-[-5%] w-[55%] h-[70%] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/img-header2.webp"
                  alt="Hero kedua"
                  fill
                  loading="lazy"
                  sizes="25vw"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
