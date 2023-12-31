import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CardDetails from "./pages/CardDetails/CardDetails";
import Account from "./pages/Account";
import EditProfile from "./pages/EditProfile/EditProfile";
import MapPage from "./pages/MapPage";
import Map from "./components/Map/Map";
import Favorite from "./pages/Favourite/Favourite";
import axios from "axios";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const options = {
      method: "GET",
      url: "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch",
      params: {
        location: "Vancouver, CA",
        status_type: "ForRent",
      },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setItems(response.data.props);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/rent" element={<HomePage items={items} />} />
          <Route path="/" element={<HomePage items={items} />} />
          <Route path="/card/:cardId" element={<CardDetails items={items} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/mapPage" element={<MapPage items={items} />} />
          <Route path="/favourite" element={<Favorite items={items} />} />
          <Route path="/contact" element={<UnderConstruction />} />
          <Route path="/map" element={<Map />} />
          <Route path="/guide" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
