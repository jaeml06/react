import React from 'react';
import styles from './Button1.module.css'; // 네임스페이스(styles 이건 원하는데로 정의) 객체를 전달해주는 거임

export default function Button1() {
  return <button className={styles.button}>Button1</button>; //객체에 접급하는것이므로 {styles.button} 사용
  // 동일한 이름의 클래스를 사용하면 가장 나중에 import된 css파일에 정의된 셀렉터가 앞을 덮는다.
}
