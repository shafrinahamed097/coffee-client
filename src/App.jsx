import { useState } from "react";

import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const [count, setCount] = useState(0);

  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);

  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-500 text-center my-20">
        Hot Cold Coffee {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
