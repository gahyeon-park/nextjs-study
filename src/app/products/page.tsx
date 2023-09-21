import Link from "next/link";

export default function Products() {
  return <div>
    <h2>Products</h2>
    <ul>
      <li>
        <Link href="/products/skirt">skirt</Link>
      </li>
      <li>
        <Link href="/products/pants">pants</Link>
      </li>
      <li>
        <Link href="/products/shoes">shoes</Link>
      </li>
      <li>
        <Link href="/products/outer">outer</Link>
      </li>
    </ul>
  </div>
}