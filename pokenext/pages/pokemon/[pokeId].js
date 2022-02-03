import Image from 'next/image';

import styles from '../../styles/Pokemon.module.css';

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`
  );

  const pokemon = await data.json();

  return {
    props: { pokemon }
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=55');

  const data = await response.json();

  const pokemons = data.results;

  pokemons.forEach((item, index) => {
    item.id = index + 1;
  });

  const paths = pokemons.map((pokemon) => {
    return {
      params: {
        pokeId: `${pokemon.id}`
      }
    };
  });

  return { paths, fallback: false };
}

export default function Pokemon({ pokemon }) {
  return (
    <>
      <h1>{pokemon.forms[0].name}</h1>
      {pokemon.types.map((item) => (
        <Image
          src={`https://veekun.com/dex/media/types/en/${item.type.name}.png`}
          width='70'
          height='30'
          alt={item.type.name}
          className={styles.type}
          style='margin: 0 auto;'
        />
      ))}
    </>
  );
}
