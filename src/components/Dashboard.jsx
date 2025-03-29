
import React, { useEffect, useState } from 'react';
import { getMedicines, deleteMedicine } from '../services/api';

const Dashboard = () => {
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
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Stock</th>
            <th>Use Indication</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(medicines).map((med, index) => (
            <tr key={index}>
              <td>{med.medicine_name}</td>
              <td>{med.stock}</td>
              <td>{med.use_indication}</td>
              <td>
                <button onClick={() => handleDelete(med.ids[0])}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;


