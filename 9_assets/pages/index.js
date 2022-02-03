import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name='keywords' content='Roupas, Calçados, Boné' />
        <meta name='description' content='A melhor roupa para você' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World!!</h1>
        <Image
          src='/images/city.jpg'
          width='400px'
          height='600px'
          alt='Cidade à noite'
        />
      </div>
    </>
  );
}
