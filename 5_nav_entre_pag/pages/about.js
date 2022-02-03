import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About!</h1>
      <ul>
        <li>
          <Link href='/'>
            <a>Voltar</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
