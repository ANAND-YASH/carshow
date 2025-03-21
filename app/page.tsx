import Image from "next/image";
import {  CarCard ,CustomFilter,Hero ,SearchBar} from "./components";
import { fetchCars } from "@/utils";
 

export default  async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.
  length <1 || !allCars;
  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className="mt-12 padding-x padding-y max-width"
     id = "discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">
          Car Catalogue</h1>
          <p>Explore the cars you might like</p>
          <p>This is new feature</p>
          <p>this feature</p>
          <p>One more feature</p>
      
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <SearchBar/>
        <div className="flex gap-4">
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
      </div>
      {isDataEmpty ? (
          <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) =>
            <CarCard car={car} />
            )}
          </div>
        </section>
      ):(
        <div className="home__error-container"> 
          <h2 className="text-black text-xl
          font-bold">Oops,no result</h2>
          <p>{allCars?.message}</p>
        </div>

      )}
     </div>
    
    </main>
  );
}
