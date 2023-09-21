import NotFound from "@/app/not-found";
import { getProduct, getProducts, } from "@/service/products";

type Props = {
  params: {
    slug: string
  }
}

// 제품별로 dynamic한 메타데이터를 만들기 위해 generateMetadata() 사용
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `제품명: ${params.slug} | 멋진 제품 사이트`
  }
}

export default async function Product({ params: { slug } }: Props) {
  console.log(slug);
  const product = await getProduct(slug);

  if (!product) {
    NotFound();
  }

  return <h2>{product?.name} 제품소개 page</h2>
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id
  }))
}