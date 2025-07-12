import React from "react";
import HeaderNavBar from "components/HeaderNavBar";
import HeaderLetterist from "components/HeaderLetterist";
import LocationCard from "components/LocationCard";

function BrazilianWedding() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <h1 style={{ color: "red" }}>Brazilian Wedding Page</h1>
      <HeaderNavBar />
      <HeaderLetterist />
      <LocationCard />
    </div>
  );
}

export default BrazilianWedding;
