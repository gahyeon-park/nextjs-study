import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowAticle";

// export const revalidate = 3;

export default async function Products() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌.
  for (let i = 0; i < 10000000; i++) { }
  const products = await getProducts();

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map(({ id, name }, index) =>
          <li key={index}><Link href={`/products/${id}`}>{name}</Link></li>
        )}
      </ul>
      <MeowArticle />
    </>
  )
}