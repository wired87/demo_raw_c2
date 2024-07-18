import {getPage} from "@/lib/shopify";
import OpengraphImage from "@/components/components/opengraph-image";


export const runtime = 'edge';

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
