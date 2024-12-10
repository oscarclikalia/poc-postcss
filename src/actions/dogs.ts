"use server";

export async function getDog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => data.message);
}

export async function getDogsByBreed(breed: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => data.message);
}
