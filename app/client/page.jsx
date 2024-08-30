"use client";

import Table from "@/components/Table";
import { useEffect, useState, useMemo } from "react";

export default function ClientPage() {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      const api = await fetch(
        `https://66d182af62816af9a4f3e718.mockapi.io/api/v1/pets`
      );
      const pets = await api.json();
      setPets(pets);
    };
    getApi();
  }, []);

  const petFilter = useMemo(() => {
    if (!filter) return pets
    return pets.filter((p) => p.name.toLowerCase().includes(filter))
  }, [filter, pets])

  if (!pets.length) return 'loading'
  
  return (
    <>
      <input className="w-full border border-gray-300 mb-5 py-5 px-5" placeholder="search name" onChange={(e) => setFilter(e.target.value)} />
      <Table pets={petFilter}></Table>
    </>
  );
}
