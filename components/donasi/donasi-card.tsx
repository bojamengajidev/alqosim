import { bankList } from "@/lib/bank";
import BankItem from "./bank-item";
import Image from "next/image";
import Link from "next/link";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function DonasiCard() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      
 

      {/* TABS */}
      <div className="flex border-b text-xl py-2">
        <Tab active>DONASI ONLINE</Tab>
      </div>

      <div className="flex justify-center">
      <Tabs
        defaultValue="transfer"
        className="w-full max-w-md"
      >
        <TabsList className="grid w-full grid-cols-2 mt-4 bg-white rounded-2xl">
          <TabsTrigger
            value="transfer"
            className="
              rounded-xl
              text-zinc-400
              transition-all
              duration-300
              data-[state=active]:bg-linear-to-r
              data-[state=active]:from-yellow-500
              data-[state=active]:to-amber-600
              data-[state=active]:text-white
              data-[state=active]:shadow-lg
            "
          >
            Transfer Bank
          </TabsTrigger>

          <TabsTrigger
            value="qris"
            className="
              rounded-xl
              text-zinc-400
              transition-all
              duration-300
              data-[state=active]:bg-linear-to-r
              data-[state=active]:from-yellow-500
              data-[state=active]:to-amber-600
              data-[state=active]:text-white
              data-[state=active]:shadow-lg
            "
          >
            QRIS
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="transfer">

        <div className="space-y-4 sm: p-4">

        <p className="text-sm text-gray-500">
          Silakan transfer ke salah satu rekening berikut.
        </p>

        {/* BANK LIST */}
        <div className="space-y-4">
          {bankList.map((bank) => (
            <BankItem key={bank.id} bank={bank} />
          ))}
        </div>

        {/* INFO */}
        <div className="rounded-xl bg-yellow-50 border border-yellow-100 py-4  p-4 text-sm text-gray-700">
          <p className="font-semibold mb-2">  ⚠️ <strong>Perhatian</strong></p>
          <p className="text-justify wrap-normal"> Setelah melakukan donasi, dimohon untuk melakukan konfirmasi dengan mengirim bukti transfer melalui WhatsApp Admin.
          </p>
       </div>
        <div className="py-2">
           <Link
              href="https://api.whatsapp.com/send/?phone=6285156245768&text&type=phone_number&app_absent=0"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#00ff2f]
                hover:bg-[#00cd03]
                px-5 py-3
                text-xs text-white
              "
            >
              <Image
                src="/icons/wa.svg"
                alt=""
                width={16}
                height={16}
                loading="lazy"
              />
              Konfirmasi
            </Link>
        </div>
       
      </div>
        </TabsContent>

        <TabsContent
          value="qris">
        <div className="flex justify-center items-center">

        <Image
                src="/images/qris.png"
                alt="metode pembayaran qris"
                width={320}
                height={640}
                priority
              
              /> 
      </div>

      <div className="p-8 space-y-4 ">
         <p>Gunakan aplikasi E-Wallet atau Mobile Banking apa saja untuk memindai QRIS di atas.</p>
      </div>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
}

function Tab({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`flex-1 py-3 font-semibold ${
        active
      }`}
    >
      {children}
    </button>
  );
}
