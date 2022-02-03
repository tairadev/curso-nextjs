import Link from 'next/link';

export default function Products() {
  return (
    <div>
      <h1>Produtos!</h1>
      <ul>
        <li>
          <Link href='/'>
            <a>Voltar</a>
          </Link>
        </li>
        <li>
          <Link href='/products/shirt'>
            <a>Camisa</a>
          </Link>
        </li>
        <li>
          <Link href='/products/pants'>
            <a>Calça</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
