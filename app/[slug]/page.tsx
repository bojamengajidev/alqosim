import ClientLayout from "@/app/client-layout";
import { getPageBySlug } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { notFound } from "next/navigation";

// ISR
export const revalidate = 3600;

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