import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, photo, price } = coffee;
  const handleDelete = (_id) => {
    console.log("Deleted ID", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);

        // startint deleting the coffee
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="flex">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p className="text-blue-400">Quantity: {quantity}</p>
            <p className="text-blue-400">Supplier: {supplier}</p>
            <p className="text-blue-400">Taste: {taste}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn  join-item bg-blue-500">View</button>
            <button className="btn join-item bg-green-500">
              <Link to={`updateCoffee/${_id}`}>Edit</Link>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
