import { Section, Container } from "@/components/craft";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { mainMenu, contentMenu } from "@/lib/menu.config";
import { siteConfig } from "@/lib/site.config";
import Logo from "@/public/icons/bojamengaji.ico";
import YKBM from "@/public/icons/ykbm-logo.ico";
import Alqosim from "@/public/icons/alqosim-logo.ico";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/" className="flex items-center gap-3">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
           
             <Image
              src={YKBM}
              alt="Yayasan Kajian Boja Mengaji"
              width={48}
              height={48}
              className="w-13 h-auto"
            
            />

                <Image
              src={Logo}
              alt="Logo"
              width={56}
              height={56}
              className="w-auto h-13 dark:invert"
            />

                <Image
              src={Alqosim}
              alt="Logo"
              width={46}
              height={46}
              className="w-13 h-auto dark:invert"
            />
            
            </Link>
            <p className="dark:invert">{siteConfig.site_description}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base dark:invert">Website</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4 dark:invert"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base dark:invert">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4 dark:invert"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <ThemeToggle />
          <p className="text-muted-foreground ">
            &copy; <a className="dark:invert" href="/">BojaMengaji</a>. All rights reserved.
            2026.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
