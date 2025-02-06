import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

let id = 1;
export default function Character({ id }) {
  const URL = `https://swapi.py4e.com/api/people/${id}`;
  const { data, error, isLoading } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data["height"]}
        eyeColor={data["eye_color"]}
        birthYear={data["birth_year"]}
      />
    </Layout>
  );
}
