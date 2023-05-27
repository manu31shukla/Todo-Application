import { useState } from "react"
import "./mystyles.css"

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem]= useState("")

    
    function handleSubmit(e){
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem) 
       setNewItem("")
      }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
          <h2>GlowDo</h2>
          <div className="form-row">
            <label htmlFor="item">New Task</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)}  type="text" id="item" />
          </div>
          <button className="btn"><a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>Add Task</a></button>
        </form>
        )
    }