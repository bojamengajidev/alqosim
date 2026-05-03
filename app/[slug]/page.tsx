import ClientLayout from "@/app/client-layout";
import { getPageBySlug } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { notFound } from "next/navigation";

// matikan cache dulu biar aman
export const revalidate = 0;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ WAJIB di-await
  const { slug } = await params;

  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <ClientLayout>
      <Section>
        <Container>
          <Prose>
            <h1>{page.title?.rendered}</h1>

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