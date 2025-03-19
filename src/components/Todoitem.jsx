import DeleteButton from "./DeleteButton";

function TodoItem({ value: { task, date } ,onDeleteClick}) {
  

  return (
    <div className="to-do-item">
      <div className="taskname"><h4>{task}</h4></div>
      <div className="task-date"><h5>{date}</h5></div>
     
      <DeleteButton onDeleteClick={onDeleteClick} task={task} date={date}/>
    </div>
  );
}

export default TodoItem;
