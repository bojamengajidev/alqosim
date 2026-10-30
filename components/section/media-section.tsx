import Link from "next/link";
import { Youtube } from "lucide-react";

import { Container, Section } from "@/components/craft";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import YouTubeLite from "../stream/youtube-embeded";

export default function MediaSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Media"
          title="Taman-taman surga"
          description="Ikuti channel kami untuk mendapatkan pembaruan konten kajian rutin dan siaran langsung dari Boja Mengaji."
        />

        <Card className="mx-auto mt-10 max-w-4xl overflow-hidden border-border/60 p-0 shadow-soft">
          <CardContent className="p-0">
            <YouTubeLite videoId="p1-OzHaN3gU" />
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full">
            <Link
              href="https://www.youtube.com/@bojamengaji"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="size-4" />
              Subscribe Boja Mengaji
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
