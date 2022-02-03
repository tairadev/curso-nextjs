import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <div className={styles.navbar}>
        <Image
          src='/images/logo.png'
          width='400px'
          height='170px'
          alt='Logo do Pokémon'
        />
      </div>
    </>
  );
}
