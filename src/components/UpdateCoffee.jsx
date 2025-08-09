import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, photo, price,category, details } = coffee;
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0f7] p-24">
      <h2 className="text-black text-3xl font-extrabold">Update Coffee: {name}</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Name</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={name}
              placeholder="Coffe Name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Quantity</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={quantity}
              placeholder="Quantity Name"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Supplier</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={supplier}
              placeholder="Supplier Name"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Taste</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={taste}
              placeholder="Taste Name"
              name="taste"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Category</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={category}
              placeholder="Taste Name"
              name="category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Details</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={details}
              placeholder="Details"
              name="details"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label text-white">Photo</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={photo}
              placeholder="Photo URL"
              name="photo"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label text-white">price</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={price}
              placeholder="Price"
              name="price"
            />
          </fieldset>
        </div>

        <input type="submit" className="btn w-full" value=" Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
