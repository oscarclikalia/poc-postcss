"use client";
import { DogCard, DogCardSkeleton } from "@/components";
import { useState } from "react";

export const RandonDog = () => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <button className="button button--primary" onClick={handleOnClick}>
        Get randon dog
      </button>
      {loading && <DogCardSkeleton />}
      {dog && !loading && <DogCard dog={dog} />}
    </div>
  );
};
