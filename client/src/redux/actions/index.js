import axios from "axios";

const API_URL = "http://localhost:8000";
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: "ADDNEW_TODO", payload: res.data });
  } catch (error) {
    console.log("Error in adding new Todo", error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: "GETALL_TODO", payload: res.data });
  } catch (error) {
    console.log("Error while fetching all Todos", error.message);
  }
};