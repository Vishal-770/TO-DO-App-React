import Container from "./components/Container";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([
    { task: "Follow Me on Linkdin", date: "Now" },
    {
      task: "Link",
      date: "https://www.linkedin.com/in/vishal-prabhu-130b1a323/",
    },
  ]);

  function OnNewItem(name, date) {
    setTodoItems([...todoItems, { task: name, date: date }]);
    console.log(name, date);
  }

  function handleDeleteItem(item, date) {
    const newTodoitems = todoItems.filter(
      (items) => !(items.task === item && items.date === date)
    );
    setTodoItems(newTodoitems);
  }
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Container>
        <Header />

        <Addtodo OnAddItem={OnNewItem}   today={today} ></Addtodo>
        {todoItems.length === 0 ? <WelcomeMessage></WelcomeMessage> : null}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </Container>
    </>
  );
}

export default App;
