import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";




export default function BlogCard() {
    return (
    <Card className="mt-10 ml-10">
      <CardHeader>
        <CardTitle>Artikel & Berita</CardTitle>
        <CardDescription>
          Baca artikel dan berita terbaru seputar kegiatan, kajian, dan informasi dari Masjid Muhammad Al Qosim dan Boja Mengaji.
        </CardDescription>
      </CardHeader>

      <CardContent>
       <Image
         src="/images/ppdb.webp"
         alt="poster penerimaan peserta didik baru"
         width={360}
         height={640}
         loading="lazy"
          className="rounded-xl w-full h-auto"
        />
      </CardContent>

      <CardFooter>
      <Link  className="w-full rounded-md bg-primary py-2 text-primary-foreground" href="/posts">
         <p className="text-center">
          Lihat Selengkapnya
        </p>
      </Link>
      </CardFooter>
    </Card>
  )

}