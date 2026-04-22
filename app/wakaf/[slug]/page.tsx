import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
         
          <p className="mb-8">
            Sedang dalam proses pengembangan.
          </p>
          <Button asChild className="not-prose mt-6">
            <Link href="/">Kembali</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
