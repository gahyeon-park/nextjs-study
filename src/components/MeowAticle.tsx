"use client";
import { useState, useEffect } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비 중...");

  useEffect(() => {
    fetch(`https://meowfacts.herokuapp.com`)
      .then((res) => res.json())
      .then(data => setText(data.data[0]));
  }, []); // ← 컴포넌트가 Mount됬을 때 딱 한번만 실행되어야 하므로(감시하는 state가 없어야 함) 빈 배열로 정의

  return <article className={styles.article}>{text}</article>
}