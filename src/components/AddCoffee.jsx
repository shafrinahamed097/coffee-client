const AddCoffee = () => {
  return (
    <div>
      <h2>Add A Coffee</h2>
      <form>
        <div className="flex gap-4">
          <div className="form-control">
            <labal className="label">
              <span className="label-text">Coffee Name </span>
            </labal>
            <br />
            <div className="join">
              <input className="input join-item" placeholder="Coffee Name" />
              
            </div>
          </div>
            <div className="form-control">
            <labal className="label">
              <span className="label-text">Available Quantity </span>
            </labal>
            <br />
            <div className="join">
              <input className="input join-item" placeholder="Available Quantity" />
              
            </div>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default AddCoffee;
