const AddressCard = ({ address }) => {
  return (
    <div className="border-bottom my-3 p-3">
      <h6>{address.state}</h6>
      <p className="mb-1">
        <i className="fa-solid fa-location-dot"></i> {address.apartment},{" "}
        {address.area}, {address.city}
      </p>
      <p>
        <i className="fa-solid fa-phone-volume"></i> {address.mobile_number}
      </p>
      <button className="btn btn-outline-dark me-3">
        <i className="fa-regular fa-pen-to-square"></i> Edit
      </button>
      <button className="btn btn-outline-danger">
        <i className="fa-solid fa-trash"></i> Delete
      </button>
    </div>
  );
};

export default AddressCard;
