"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  console.log('안녕 - 클라이언트')

  return <>
    <p>{count}</p>
    <button onClick={() => setCount(prev => prev + 1)}>click</button>
  </>;
}