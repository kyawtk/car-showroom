import { BikeCard, Hero, SearchBar, CustomFilter } from "@/components";
import { getMotorcycles } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCycles = await getMotorcycles();
  console.log(allCycles);

  const isDataEmpty =
    allCycles.length === 0 || !allCycles || Array.isArray(allCycles) === false;
  return (
    <main className="overflow-hidden">
      <Hero></Hero>

      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCycles.map((bike) => (
                <BikeCard key={bike.model} bike={bike}></BikeCard>
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black font-bold text-3xl">OOPs ! No results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
