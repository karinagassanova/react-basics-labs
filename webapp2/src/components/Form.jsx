import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <input
            type="text"
            name="title"
            required
            onChange={(event) => props.change(event)}/>
        </label>
        <br/>
        <label>
          Due date:
          <input
            type="date"
            name="deadline"
            required
            onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
          Details:
          <input
            type="text"
            name="description"
            onChange={(event) => props.change(event)}/>
        </label>
        <br/>
        <label>
          Priority: 
          <br></br>
          <select
            name="priority"
            required
            onChange={(event) => props.change(event)}>
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
