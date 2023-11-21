import React, { useState, useEffect } from "react";
import axios from "axios";
const API_LAB_BASE = process.env.REACT_APP_API_LAB_BASE;

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = `${API_LAB_BASE}/a5/welcome`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([]);
    const fetchTodos = async() => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    const removeTodo = async(todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const deleteTodo = async(todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    const createTodo = async() => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async(id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async() => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async() => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const updateTodo = async() => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    return ( <
        div >
        <
        h3 > Working with Arrays < /h3> <
        input value = { todo.id }
        className = "form-control mb-2" / >
        <
        input onChange = {
            (e) =>
            setTodo({
                ...todo,
                title: e.target.value,
            })
        }
        value = { todo.title }
        type = "text"
        className = "form-control mb-2" /
        >
        <
        textarea onChange = {
            (e) => setTodo({...todo, description: e.target.value }) }
        value = { todo.description }
        type = "text"
        className = "form-control mb-2" /
        >
        <
        input onChange = {
            (e) =>
            setTodo({
                ...todo,
                due: e.target.value,
            })
        }
        value = { todo.due }
        type = "date"
        className = "form-control mb-2" /
        >
        <
        label >
        <
        input onChange = {
            (e) =>
            setTodo({
                ...todo,
                completed: e.target.checked,
            })
        }
        value = { todo.completed }
        type = "checkbox" /
        >
        Completed <
        /label> <
        button onClick = { postTodo }
        className = "btn btn-warning mb-2 w-100" >
        Post Todo <
        /button> <
        button onClick = { updateTodo }
        className = "btn btn-warning mb-2 w-100" >
        Update Todo <
        /button> <
        button onClick = { createTodo }
        className = "btn btn-primary mb-2 w-100" >
        Create Todo <
        /button> {
            errorMessage && ( <
                div className = "alert alert-danger mb-2 mt-2" > { errorMessage } < /div>
            )
        } <
        ul className = "list-group" >

        {
            todos.map((todo) => ( <
                li key = { todo.id }
                className = "list-group-item" >
                <
                button onClick = {
                    () => fetchTodoById(todo.id) }
                className = "btn btn-warning me-2 float-end" >
                Edit <
                /button> <
                button onClick = {
                    () => removeTodo(todo) }
                className = "btn btn-danger float-end" >
                Remove <
                /button> <
                button onClick = {
                    () => deleteTodo(todo) }
                className = "btn btn-danger float-end ms-2" >
                Delete <
                /button> <
                input checked = { todo.completed }
                type = "checkbox"
                readOnly / > { todo.title } < p > { todo.description } < /p> <p> {todo.due} </p >
                <
                /li>
            ))
        } <
        /ul> <
        h3 > Deleting from an Array < /h3> <
        a href = { `${API}/${todo.id}/delete` }
        className = "btn btn-primary me-2" >
        Delete Todo with ID = { todo.id } <
        /a> <
        h4 > Retrieving Arrays < /h4> <
        a href = { API }
        className = "btn btn-primary me-2" >
        Get Todos <
        /a> <
        h4 > Retrieving an Item from an Array by ID < /h4> <
        input className = "form-control"
        value = { todo.id }
        onChange = {
            (e) => setTodo({...todo, id: e.target.value }) }
        /> <
        a href = { `${API}/${todo.id}` }
        className = "btn btn-primary me-2" >
        Get Todo by ID <
        /a> <
        h3 > Filtering Array Items < /h3> <
        a href = { `${API}?completed=true` }
        className = "btn btn-primary me-2" >
        Get Completed Todos <
        /a> <
        h4 > Creating new Items in an Array < /h4> <
        a href = { `${API}/create` }
        className = "btn btn-primary me-2" >
        Create Todo <
        /a> <
        h3 > Updating Title in an Array < /h3> <
        input value = { todo.title }
        onChange = {
            (e) =>
            setTodo({
                ...todo,
                title: e.target.value,
            })
        }
        className = "form-control mb-2"
        type = "text" /
        >
        <
        button onClick = { updateTitle }
        className = "btn btn-success mb-2 w-100" >
        Update Title <
        /button> <
        a href = { `${API}/${todo.id}/title/${todo.title}` }
        className = "btn btn-primary me-2" >
        Update Title to { todo.title } <
        /a> <
        h3 > Updating Description in an Array < /h3> <
        input value = { todo.description }
        onChange = {
            (e) =>
            setTodo({
                ...todo,
                description: e.target.value,
            })
        }
        className = "form-control mb-2"
        type = "text" /
        >
        <
        a href = { `${API}/${todo.id}/description/${todo.description}` }
        className = "btn btn-primary me-2" >
        Update Description to { todo.description } <
        /a> <
        h3 > Updating Completed Status in an Array < /h3> <
        input type = "checkbox"
        checked = { todo.completed }
        onChange = {
            (e) =>
            setTodo({
                ...todo,
                completed: e.target.checked,
            })
        }
        className = "form-check-input me-2" /
        >
        <
        a href = { `${API}/${todo.id}/completed/${todo.completed}` }
        className = "btn btn-primary me-2" >
        Mark as { todo.completed ? "Complete" : "Incomplete" } <
        /a> <
        /div>
    );
}
export default WorkingWithArrays;