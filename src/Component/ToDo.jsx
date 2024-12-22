import React from "react";
import TodoStore from "../Store/ToDoStore.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToDo = () => {
    const {
        inputList,
        items,
        isEdit,
        setInputList,
        addItem,
        removeItem,
        setEditTodo,
        updateItem,
    } = TodoStore();

    const handleAddOrUpdate = () => {
        if (!inputList.trim()) {
            toast.error("Task cannot be empty!");
            return;
        }

        if (isEdit) {
            updateItem();
            toast.success("Task updated successfully!");
        } else {
            addItem();
            toast.success("Task added successfully!");
        }
    };

    const handleDelete = (index) => {
        removeItem(index);
        toast.success("Task deleted successfully!");
    };

    return (
        <div className="background">
            <div className="todo-container container">
                <h2 className="text-center mb-4 text-info fw-bold">To-Do List</h2>


                <form className="d-flex mb-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" className="form-control me-2" placeholder="Add a new task"
                           value={inputList}
                           onChange={(e) => setInputList(e.target.value)}
                    />
                    <button type="button" className={`btn ${isEdit ? "btn-warning" : "btn-primary"}`} onClick={handleAddOrUpdate}>
                        {isEdit ? "Update" : "Add"}
                    </button>
                </form>

                {/* Task List */}
                <ul className="list-group">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{item.name}</span>
                                <div>
                                    <button className="btn btn-warning btn-sm me-2"
                                        onClick={() => setEditTodo(item.id, item.name)}>Edit</button>
                                    <button className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            </li>
                        ))
                    ) : (<p className="text-center text-info fw-bold">No tasks added yet!</p>)}
                </ul>
            </div>
            <ToastContainer
                position={"top-center"}
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default ToDo;
