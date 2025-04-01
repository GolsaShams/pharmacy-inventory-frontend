
import React, { useEffect, useState } from 'react';
import { addMedicine } from '../services/api';

const NewInventory = () => {
    const [formData, setFormData] = useState({
        medicine_id: Math.floor(Math.random() * 100000), // Generate random integer for medicine_id
        name: '',
        manufacturer: '',
        dosage: '',
        expiry_date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Mock API call
        await addMedicine(formData);
        // Reset form with a new random medicine_id
        setFormData({
            medicine_id: Math.floor(Math.random() * 100000),
            name: '',
            manufacturer: '',
            dosage: '',
            expiry_date: '',
        });

        window.location.href = '/inventory'
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Medicine</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Medicine Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="manufacturer"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Manufacturer
                    </label>
                    <input
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="dosage"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Dosage
                    </label>
                    <input
                        type="text"
                        id="dosage"
                        name="dosage"
                        value={formData.dosage}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="expiry_date"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Expiry Date
                    </label>
                    <input
                        type="date"
                        id="expiry_date"
                        name="expiry_date"
                        value={formData.expiry_date}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300"
                    >
                        Add Medicine
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewInventory;


