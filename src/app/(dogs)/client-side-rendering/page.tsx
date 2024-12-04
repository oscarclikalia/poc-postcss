"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { Title } from "@/components";

export default function ClientPage() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(Object.keys(data.message)));

    setLoading(false);
  }, []);

  const filteredBreed = useMemo(
    () => breeds.filter((breed) => breed.includes(search)),
    [breeds, search]
  );

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.mainContainerrrr}>
      <Title title="Breeds" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by breed"
        className={styles["search-input"]}
        value={search}
        onChange={handleSearchChange}
      />
      <div className={styles["bred-container"]}>
        {!loading &&
          filteredBreed.map((breed) => (
            <Link key={breed} href={`sever-side-rendering/${breed}`}>
              {breed}
            </Link>
          ))}
        {loading &&
          Array.from({ length: 10 }).map((e, i) => (
            <div key={i} className={styles["skeleton-container"]} />
          ))}
      </div>
    </div>
  );
}
