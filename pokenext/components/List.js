import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/List.module.css';

export default function List({ pokemons }) {
  return (
    <ul className={styles.list}>
      {pokemons.map(({ name, id }) => (
        <li key={id}>
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
            width='120'
            height='120'
            alt={name}
          />
          <h2>{name}</h2>
          <Link href={`/pokemon/${id}`}>
            <a className={styles.button}>Detalhes</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
