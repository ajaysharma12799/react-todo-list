import React from 'react'
import '../App.css'

const Card = ({todo, deleteTodo, editTodo}) => {
    return (
        <div className="card">
            <div className="lead">{ todo }</div>
            <div className="buttons">
            <span className="editButton">
                <i className="bi bi-pen" onClick={(e) => editTodo(e)} ></i>
            </span>
            <span className="deleteButton">
                <i className="bi bi-trash" onClick={(e) => deleteTodo(e)} ></i>
            </span>
            </div>
        </div>
    )
}

export default Card
