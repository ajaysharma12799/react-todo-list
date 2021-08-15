import React from 'react'
import '../App.css'

const Card = ({todo, deleteTodo}) => {
    return (
        <div className="todoCard d-flex justify-content-between">
           <div className="lead">{todo}</div>
           <div className="lead"><i className="bi bi-trash" onClick={(e) => deleteTodo(e)} ></i></div>
        </div>
    )
}

export default Card