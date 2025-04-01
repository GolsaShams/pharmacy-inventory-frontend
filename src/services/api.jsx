import axios from 'axios';

const API_URL = 'https://e-react-node-backend-22ed6864d5f3.herokuapp.com';

const validUsers = {
    'test': '1234',
    'admin': 'admin123',
    'user1': 'password1',
    'user2': 'password2'
};

// تابع ورود
export const login = async ({ username, password }) => {
    if (validUsers[username] && validUsers[username] === password) {
        return {
            data: {
                token: 'fake-jwt-token',
                username: username
            },
        };
    } else {
        throw new Error('Invalid username or password');
    }
};

// دریافت لیست داروها
export const getMedicines = async () => {
    return await axios.get(`${API_URL}/table/medicine_v2`);
};

export const getPrescriptions= async () => {
    return await axios.get(`${API_URL}/table/prescriptions`);
};

// افزودن داروی جدید
export const addMedicine = async (medicineData) => {
    return await axios.post(`${API_URL}/table/medicine_v2`, medicineData);
};

// حذف دارو بر اساس ID
export const deleteMedicine = async (medicineId) => {
    return await axios.delete(`${API_URL}/table/medicine_v2/${medicineId}`);
};
