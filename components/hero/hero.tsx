import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/img-drone.webp"
        alt="Foto Masjid Muhammad Al Qosim diambil dari udara"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className=" mx-auto px-4 text-center text-white">

             <h1  className="
              hero-title
              mb-8
              text-6xl md:wrap-anywhere dark:text-white
            ">
              Menebarkan Sunnah Rasulullah ﷺ Membangun Umat
            </h1>

         

          <p className="max-w-xl mx-auto mb-28 text-sm md:text-base text-gray">
            Masjid Muhammad Al Qosim pusat pembinaan umat melalui dakwah dan
            pendidikan Islam berdasarkan Al-Qur’an dan Sunnah.
          </p>

          <Link
            href="/Tentang-kami"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-[#ffae00]
              px-6 py-3
              text-sm font-medium
              text-white
              transition
              hover:scale-105
              hover:shadow-xl
            "
          >
            <Image
              src="/icons/icon-eye.svg"
              alt="icon selengkapnya"
              width={18}
              height={18}
            />
            Selengkapnya
          </Link>

        </div>
      </div>

    </section>
  );
}