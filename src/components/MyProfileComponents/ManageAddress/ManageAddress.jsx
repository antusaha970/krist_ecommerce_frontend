import { useEffect, useState } from "react";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import client from "../../../api_client/api_client";
import AddressCard from "../AddressCard/AddressCard";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await client.get("/api/delivery_address/");
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAddresses();
  }, []);
  console.log(addresses);

  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Addresses</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <ProfileNavigation />
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          {addresses?.map((address) => (
            <AddressCard address={address} key={address.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageAddress;
