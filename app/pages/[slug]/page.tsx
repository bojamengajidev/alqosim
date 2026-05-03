import ClientLayout from "@/app/client-layout";
import { getPageBySlug } from "@/lib/wordpress";
import { generateContentMetadata, stripHtml } from "@/lib/metadata";
import { Section, Container, Prose } from "@/components/craft";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

// ⏱️ Revalidate (ISR) setiap 1 jam
export const revalidate = 3600;


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const page = await getPageBySlug(slug);

  if (!page) return {};

  const description = page.excerpt?.rendered
    ? stripHtml(page.excerpt.rendered)
    : stripHtml(page.content.rendered).slice(0, 200) + "...";

  return generateContentMetadata({
    title: page.title.rendered,
    description,
    slug: page.slug,
    basePath: "pages",
  });
}

// 📄 Render halaman berdasarkan slug
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const page = await getPageBySlug(slug);


  if (!page) {
    notFound();
  }

  return (
    <ClientLayout>
      <Section>
        <Container>
          <Prose>
            <h1>{page.title.rendered}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: page.content.rendered,
              }}
            />
          </Prose>
        </Container>
      </Section>
    </ClientLayout>
  );
}