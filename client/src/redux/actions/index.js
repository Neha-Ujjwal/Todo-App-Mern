import axios from "axios";
import { TOGGLE_TAB } from "./type";

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

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: "TOGGLE_TODO", payload: res.data });
  } catch (error) {
    console.log("Error while fetching all Todos", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: "UPDATE_TODO", payload: res.data });
  } catch (error) {
    console.log("Error while calling");
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: "DELETE_TODO", payload: res.data });
  } catch (error) {
    console.log("erorr in deleting the todo");
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
