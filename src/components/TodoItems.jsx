
import TodoItem from "./Todoitem"
function TodoItems({todoItems,onDeleteClick}){

  return(<>
  <div className="todo-container">



{todoItems.map((val)=><TodoItem key={val.task} value={val} onDeleteClick={onDeleteClick}></TodoItem>)}


  </div>
  
  
  
  </>)
}
export default TodoItems;