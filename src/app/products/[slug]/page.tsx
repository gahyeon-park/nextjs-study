import NotFound from "@/app/not-found";
import GoProducts from "@/components/GoProducts";
import { getProduct, getProducts, } from "@/service/products";
import Image from "next/image";
import { redirect } from "next/navigation";

export const revalidate = 3;

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
  // console.log(slug);
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // NotFound();
  }

  return <>
    <h2>{product?.name} 제품소개 page</h2>
    <Image src={`/images/${product?.img}`} width={400} height={600} alt={`${product?.name} image`} />
    <GoProducts />
  </>
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id
  }))
}