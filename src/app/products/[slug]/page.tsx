import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

type Props = {
  params: {
    slug: string
  }
}

export default function Pants({ params }: Props) {
  console.log(params);
  
  return <div>{params.slug} page</div>
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product
  }))
}