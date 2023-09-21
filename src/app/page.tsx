import styles from './page.module.css'
import os from 'os'; // 노드 API 중 하나인 os (노드가 실행되는 운영체제에 대한 정보를 갖고있는 모듈)
import Counter from '@/components/Counter';


export default function Home() {
  //  app 폴더에 있는 컴포넌트는 기본적으로 서버에서 실행되는 컴포넌트 ★
  // -> ※ 이 서버 컴포넌트 안에서 입력한 console은 서버에서 컴포넌트를 HTML로 렌더링하면서 실행하기 때문에
  // 브라우저에서 HTML을 보여줄 때는 console이 출력되지 않는 것.
  console.log('안녕 - 서버');
  console.log(os.hostname());
  // 또한 서버 컴포넌트이기 때문에 서버가 동작하고 있는 node.js의 API는 실행할 수 있지만, 브라우저 API는 실행할 수 없음. 
  // (브라우저에서 컴포넌트가 제대로 동작하는 지에 관한 상태를 확인하거나 저장하거나, 로컬호스트에 저장하고 읽고 쓰는 것등은 불가능)

  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Counter />
    </main>
  )
}
