import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowAticle";

// export const revalidate = 3;

export default async function Products() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌.
  const products = await getProducts();
  const res = await fetch(`https://meowfacts.herokuapp.com`, {
    next: { revalidate: 3 },
    // cache: "no-store"
  });
  const data = await res.json();
  const factText = data.data[0];

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