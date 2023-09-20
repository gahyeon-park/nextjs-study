type Props = {
  params: {
    slug: string
  }
}

export default function Pants({ params }: Props) {
  console.log(params);
  
  return <div>{params.slug} page</div>
}

