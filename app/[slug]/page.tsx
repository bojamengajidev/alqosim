import ClientLayout from "@/app/client-layout";
import { getPageBySlug } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { notFound } from "next/navigation";

// ⏱️ ISR (cache 1 jam)
export const revalidate = 120;

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // ambil data dari WordPress berdasarkan slug
  const page = await getPageBySlug(slug);

  // kalau tidak ada → 404
  if (!page || !page.content) {
    notFound();
  }

  return (
    <ClientLayout>
      <Section>
        <Container>
          <Prose>
            {/* Judul halaman */}
            <h1>{page.title?.rendered}</h1>

            {/* Konten dari WordPress */}
            <div
              dangerouslySetInnerHTML={{
                __html: page.content?.rendered || "",
              }}
            />
          </Prose>
        </Container>
      </Section>
    </ClientLayout>
  );
}