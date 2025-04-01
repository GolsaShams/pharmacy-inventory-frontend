import React, { useEffect, useState } from "react";

function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/medicines")
      .then((response) => response.json())
      .then((data) => setMedicines(data))
      .catch((error) => console.error("Error fetching medicines:", error));
  }, []);

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((med) => (
          <li key={med.id}>
            {med.name} - {med.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;

