import Table from "@/components/Table";

export default async function Home() {

  const api = await fetch(`https://66d182af62816af9a4f3e718.mockapi.io/api/v1/pets`)
  const pets = await api.json()

  return (
    <Table pets={pets}></Table>
  );
}
