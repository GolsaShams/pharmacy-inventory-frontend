
import React, { useEffect, useState } from 'react';
import { getMedicines, deleteMedicine } from '../services/api';

const Inventory = () => {
  const [medicines, setMedicines] = useState({});

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await getMedicines();
      const data = response.data.reduce((carry, item) => {
        if (carry[item.medicine_name] === undefined) {
          carry[item.medicine_name] = {
            ids: [item.id],
            medicine_name: item.medicine_name,
            use_indication: item.use_indication,
            stock: 0,
            production_date: item.production_date,
            expiration_date: item.expiration_date
          }
        } else {
          carry[item.medicine_name].ids.push(item.id);
          carry[item.medicine_name].stock += 1;
        }

        return carry;
      }, {});
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const handleDelete = async (medicineId) => {
    try {
      await deleteMedicine(medicineId);
      fetchMedicines();
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  return (
    <div>
      <h2>Pharmacy Dashboard</h2>
      <p
        style={{
          paddingTop: "20px"
        }}
      ><b>Total</b>: {Object.values(medicines).reduce((c, i) => c + i.stock, 0)}</p>
      <div className='flex justify-end py-4'>
        <button
          onClick={() => window.location.href = "/inventory/new"}
          style={{
            backgroundColor: "#28A745", // Green color
            color: "white",
            padding: "4px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")} // Darker green on hover
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28A745")} // Original green on mouse out
        >
          New
        </button>

      </div>
      <table style={{ fontSize: '0.7rem', width: "100%", borderCollapse: "collapse", border: "1px solid gray", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
        <thead>
          <tr style={{ backgroundColor: "#007BFF", color: "white", textAlign: "left" }}>
            <th style={{ padding: "8px", border: "1px solid gray" }}>Medicine Name</th>
            <th style={{ padding: "8px", border: "1px solid gray" }}>Stock</th>
            <th style={{ padding: "8px", border: "1px solid gray" }}>Use Indication</th>
            <th style={{ padding: "8px", border: "1px solid gray" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(medicines).map((med, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white", transition: "background 0.3s" }}>
              <td style={{ padding: "8px", border: "1px solid gray" }}>{med.medicine_name}</td>
              <td style={{ padding: "8px", border: "1px solid gray" }}>{med.stock}</td>
              <td style={{ padding: "8px", border: "1px solid gray" }}>{med.use_indication}</td>
              <td style={{ padding: "8px", border: "1px solid gray" }}>
                <button
                  onClick={() => handleDelete(med.ids[0])}
                  style={{
                    backgroundColor: "#DC3545",
                    color: "white",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background 0.3s"
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#C82333"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#DC3545"}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;


