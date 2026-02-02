import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { BookOpen, Heart, Users, HandCoins } from "lucide-react"
import BlogCard from "./blog-card"

const features = [
  {
    icon: BookOpen,
    title: "Kajian",
    desc: "Majelis Ilmu Syar'i",
  },
  {
    icon: Heart,
    title: "Pendidikan",
    desc: "Sekolah TK & SD Islam",
  },
  {
    icon: Users,
    title: "Komunitas",
    desc: "Merajut Ukhuwah Islamiyah",
  },
  {
    icon: HandCoins,
    title: "Sosial",
    desc: "Sosial Kemasyarakatan",
  },
]

export default function BlogSection() {
  return (
   <main>
     <section className="mb-20 px-5">
     <div className="grid grid-cols-1 lg:grid-cols-2">
     <section className="py-12 ">
      <h1 className="text-2xl font-semibold leading-none tracking-tight py-2 dark:invert">Boja Mengaji</h1>
      <p className="dark:invert">Kami berfokus memberikan kontribusi terbaik bagi kaum muslimin.</p>
         <div className="grid grid-cols-2 py-5 gap-6">
        {features.map((item, i) => (
          <Card
            key={i}
            className="
              h-full
              rounded-2xl
              border
              hover:shadow-md
              transition
            "
          >
            <CardContent
              className="
                flex flex-col items-center
                text-center
                gap-4
                p-6
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    <BlogCard />    
     </div>
     </section>
   </main>
  )
}
