import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function Products() {
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