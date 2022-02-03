import Link from 'next/link';

export default function NotFounte() {
  return (
    <>
      <h1>404</h1>
      <p>Parece que esta página não existe</p>
      <Link href='/'>
        <a>Voltar para o início</a>
      </Link>
    </>
  );
}
