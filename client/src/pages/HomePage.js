import React, { useEffect, useState } from "react";
import { getPets } from "../api/petsApi";
import PetCard from "../components/PetCard";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
function HomePage() {
  const [pets, setPets] = useState(null);
  const [ages, setAges] = useState(0);
  const navigate = useNavigate();
  const fetchPets = async () => {
    const response = await getPets();
    const petsData = response.data;
    setPets(petsData);
    const sum = petsData.reduce((n, { age }) => n + age, 0);
    setAges(sum);
  };
  useEffect(() => {
    fetchPets();
  }, []);
  if (!pets || !ages) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="home-page">
        <div className="top">
          <div>number of pets: {pets.length} </div>
          <div>sum of ages: {ages} </div>
          <button className="add-pet-btn" onClick={() => navigate("/add")}>add pet</button>
        </div>
        <div className="bottom">
          <div className="pets-list">
            {pets.map((p) => (
              <PetCard key={p.id} pet={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
