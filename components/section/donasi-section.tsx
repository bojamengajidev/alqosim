import DonasiCard from "@/components/donasi/donasi-card";
import Image from "next/image";



export default function Donasi() {
  return (
    <main className=" bg-amber-200 py-20 px-5">

      <div className="mx-auto max-w-6xl mb-10">
             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sudah Persiapkan <span className="text-gray-400">Investasi Akhirat</span> Anda Hari Ini?
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            "Mari salurkan kebaikan dengan infaq terbaik hari ini."
          </p>
      </div>
       
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
      

        {/* LEFT CONTENT */}
        <section className="space-y-6">
      
         
            <Image
                            src="/images/program-wakaf.png"
                            alt="poster program wakaf jariyah"
                            width={360}
                            height={640}
                            priority
                            className="w-full h-auto"
                          />
        </section>

        {/* RIGHT CARD */}
        <DonasiCard />
      </div>
    </main>
  );
}
