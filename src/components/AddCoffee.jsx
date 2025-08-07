import Swal from "sweetalert2";

const AddCoffee = () => {
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

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0f7] p-24">
      <h2 className="text-black text-3xl font-extrabold">Add A Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffe Name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Quantity Name"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Supplier Name"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Taste Name"
              name="taste"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Taste Name"
              name="category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-white">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Taste Name"
              name="details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label text-white">Photo</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            name="photo"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
