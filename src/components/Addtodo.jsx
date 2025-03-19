import InputText from "./InputText";
import AddButton from "./AddButton";
import { useState } from "react";

function Addtodo({ OnAddItem, today }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState(today);

  function handleNameChange(event) {
    setToDoName(event.target.value);
  }
  function handleDateChange(event) {
    setToDoDate(event.target.value);
  }
  function handleAddButtonClicked() {
    if (toDoName === "" || toDoDate == "") return;
    OnAddItem(toDoName, toDoDate);
  }

  return (
    <>
      <div className="todo-input">
        <InputText onTextChange={handleNameChange}></InputText>
        <input
          type="date"
          id="date"
          
          onChange={(event) => handleDateChange(event)}
        ></input>
        <AddButton OnClick={handleAddButtonClicked}></AddButton>
      </div>
    </>
  );
}
export default Addtodo;
