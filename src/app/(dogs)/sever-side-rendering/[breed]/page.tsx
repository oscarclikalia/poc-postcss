import { Suspense } from "react";
import { getDogsByBreed } from "@/actions/dogs";
import { DogCard, DogCardSkeleton, Title } from "@/components";
import styles from "./page.module.css";

export default async function ServerPage({
  params,
}: {
  params: { breed: string };
}) {
  const { breed } = await params;

  return (
    <>
      <Title title={breed} />
      <div className={styles.container}>
        <Suspense
          fallback={
            <>
              <DogCardSkeleton />
              <DogCardSkeleton />
              <DogCardSkeleton />
              <DogCardSkeleton />
              <DogCardSkeleton />
              <DogCardSkeleton />
            </>
          }
        >
          <DogCardSuspense breed={breed} />
        </Suspense>
      </div>
    </>
  );
}

async function DogCardSuspense({ breed }: { breed: string }) {
  const breeds = await getDogsByBreed(breed);
  return breeds.map((dog: string) => <DogCard dog={dog} />);
}
