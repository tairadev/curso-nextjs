import List from '../components/List';

export async function getStaticProps() {
  const limit = 55;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  const values = await data.json();
  const pokemons = values.results;

  pokemons.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: { pokemons }
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <List pokemons={pokemons} />
    </>
  );
}
