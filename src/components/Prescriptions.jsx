import { useState, useEffect } from 'react';
import { getPrescriptions } from '../services/api';


const PrescriptionList = () => {
    const [prescriptions, setPrescriptions] = useState([]);
  
    useEffect(() => {
      fetchPrescriptions();
    }, []);
  
    const fetchPrescriptions = async () => {
      try {
        const response = await getPrescriptions();
        setPrescriptions(response.data);
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      }
    };
  
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Prescription Dashboard</h2>
        <p className="text-lg font-medium text-gray-600 mb-4">
          <b>Total Prescriptions:</b> {prescriptions.length}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left border border-gray-300">Prescription ID</th>
                <th className="px-4 py-2 text-left border border-gray-300">Patient Name</th>
                <th className="px-4 py-2 text-left border border-gray-300">Medicine Name</th>
                <th className="px-4 py-2 text-left border border-gray-300">Dosage</th>
                <th className="px-4 py-2 text-left border border-gray-300">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr
                  key={prescription.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition duration-300`}
                >
                  <td className="px-4 py-2 border border-gray-300">{prescription.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{prescription.patient_name}</td>
                  <td className="px-4 py-2 border border-gray-300">{prescription.medicine_name}</td>
                  <td className="px-4 py-2 border border-gray-300">{prescription.dosage}</td>
                  <td className="px-4 py-2 border border-gray-300">{prescription.expiry_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default PrescriptionList;