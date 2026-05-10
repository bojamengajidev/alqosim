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


export default function CustomTabs() {
  return (
    <div className="flex justify-center py-10">
      <Tabs
        defaultValue="transfer"
        className="w-full max-w-md"
      >
        <TabsList className="grid w-full grid-cols-2 bg-white shadow-xl p-1 rounded-2xl">
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
          value="transfer"
          className="
            mt-6
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-xl
          "
        >
           <div className="p-6 space-y-4">
        <h3 className="font-semibold text-gray-800">Transfer Manual</h3>

        <p className="text-sm text-gray-500">
          Silakan transfer ke salah satu rekening berikut.
          
        </p>

        {/* BANK LIST */}
        <div className="space-y-5">
          {bankList.map((bank) => (
            <BankItem key={bank.id} bank={bank} />
          ))}
        </div>

        {/* INFO */}
        <div className="rounded-xl bg-yellow-50 border border-yellow-100 py-4  p-4 text-sm text-gray-700">
          <p className="font-semibold mb-2">  ⚠️ <strong>Perhatian</strong></p>
          <p className="text-justify wrap-normal"> Setelah melakukan transfer, dimohon untuk melakukan konfirmasi dengan mengirim bukti transfer melalui WhatsApp Admin.
          </p>
       </div>
        <div className="py-5">
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
          value="qris"
          className="
            mt-6
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-xl
          "
        >
          <h2 className="text-xl font-bold mb-2">
            qris Settings
          </h2>

          <p>
            Change your qris here.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}