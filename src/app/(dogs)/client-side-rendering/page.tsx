"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { Title } from "@/components";

export default function ClientPage() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(Object.keys(data.message)));
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
    <div className={styles.mainContainer}>
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
        {filteredBreed.map((breed) => (
          <Link
            key={breed}
            href={`sever-side-rendering/${breed}`}
            className={styles.link}
          >
            {breed}
          </Link>
        ))}
      </div>
    </div>
  );
}
