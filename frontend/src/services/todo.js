import axios from 'axios';

const URL = 'http://localhost:8080/api/todo/'
 
const fetchTodos = async () => {
    const result = await axios.get(URL);
    return result.data;
};

const addTodoDB = async (name, complete=false) => {
    const result = await axios.post(URL, { name, complete });
    return result.data;
}

const getTodoById = async (id) => {
    const result = await axios.get(`${URL}/${id}`);
    return result.data;
}

const removeTodoDB = async (id) => {
    await axios.delete(`${URL}/${id}`);
}

const updateTodoDB = async (id, todo) => {
    await axios.put(`${URL}/${id}`, todo);
}

export default { fetchTodos, addTodoDB, removeTodoDB, updateTodoDB, getTodoById };
