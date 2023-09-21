import Link from "next/link";
import { getProducts } from "@/service/products";

const products = getProducts();

export default function Products() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌.
  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) =>
          <li key={index}><Link href={`/products/${product}`}>{product}</Link></li>
        )}
      </ul>
    </>
  )
}