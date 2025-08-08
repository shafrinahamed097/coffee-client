import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo, price } =
    coffee;
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="flex">
        <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
      </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn  join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

// 10:18
/*
  https://web.programming-hero.com/update-1/video/update-1-56-6-view-all-coffee-and-create-coffee-card
*/
