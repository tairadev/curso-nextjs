import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World!!</h1>
      <ul>
        <li>
          <Link href='/products'>
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
