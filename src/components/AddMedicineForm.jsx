import React, { useState } from 'react';
import { addMedicine } from '../services/api';

const AddMedicineForm = ({ refreshMedicines }) => {
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || isNaN(stock) || stock <= 0) {
            alert('Please enter a valid medicine name and stock quantity.');
            return;
        }

        try {
            await addMedicine({ name, stock: Number(stock) });
            refreshMedicines();
            setName('');
            setStock('');
        } catch (error) {
            console.error('Error in adding medicine:', error);
            alert('Error in adding medicine!');
        }
    };

    return (
        <div>
            <h2>Adding Medicine</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Medicine Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Inventory Quantity"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddMedicineForm;

