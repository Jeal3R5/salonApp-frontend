import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import Services from "../Pages/Services";

function Main(props) {
  const [stylists, setStylists] = useState(null);

  const URL = "http://localhost:3001/stylists/";
  // const URL = "https://salonapp-backend-jr.herokuapp.com/stylists/";

  const getStylists = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setStylists(data);
  };

  const createStylist = async (stylist) => {
    //make post request to create stylist
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(stylist),
    });
    //update list of stylists
    getStylists();
  };
  const updateStylist = async (stylist, id) => {
    //make put request to create people
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(stylist),
    });
    //update list of stylists
    getStylists();
  };

  const deleteStylist = async (id) => {
    //make delete request to create people
    await fetch(URL + id, {
      method: "DELETE",
    });
    //update list of stylists
    getStylists();
  };

  useEffect(() => {
    getStylists();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index stylists={stylists} createStylist={createStylist} />}
        />

        <Route
          path="/stylists/:id"
          element={
            <Show
              stylists={stylists}
              updateStylist={updateStylist}
              deleteStylist={deleteStylist}
            />
          }
        />

        <Route path="/services" element={<Services />} />
      </Routes>
    </main>
  );
}

export default Main;
