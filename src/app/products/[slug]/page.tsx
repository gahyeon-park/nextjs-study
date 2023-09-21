import type { Metadata } from 'next'

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

export default function Pants({ params }: Props) {
  console.log(params);

  return <div>{params.slug} 제품소개 page</div>
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product
  }))
}