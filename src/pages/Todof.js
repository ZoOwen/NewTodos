import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';



const Todof = () => {
  const [todos, setTodos] = useState([
    { text: "Learn Coding", isComplete: true },

  ]);

  const [value, setValue] = useState("");
  console.log("value", value);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const removeTodo = (index) => {
    console.log("Sudah ke click");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    console.log("edit click");
    const newTodos = [...todos];
    const editTodos = newTodos[index].text;
    console.log(editTodos);

    const editedTodo = prompt(editTodos);
    console.log("editedTodo", editedTodo);
    newTodos.splice(index, 1, { text: editedTodo });
    setTodos(newTodos);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("isi value", value);
    if (!value) return alert("todo belum diisi");
    const newTodos = [...todos, { text: value }];
    console.log("newTodos", newTodos);
    setTodos(newTodos);
    setValue("");
  };


  const completeTodo = (index) => {
    console.log("complete click");
    const newTodos = [...todos];
    newTodos[index].isComplete = !todos[index].isComplete;
    setTodos(newTodos);
    console.log(todos)
  };

  const TodosC = ({ todo, index, removeTodo, editTodo, completeTodo }) => {
    return (
      <div style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
        <h3>{todo.text}</h3>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
        <button onClick={() => editTodo(index)}>Edit</button>
      </div>
    );
  };
  const styles ={
      'alignItems' : 'center',
      'justifyContent': 'center',
      'display':'flex',
      'flexDirection' : 'column'
    }

  return (
    <div style={styles}>
      <h1>React Todo function</h1>
      <form >
        <input type="text" value={value} onChange={handleChange} />
        <Button  type="primary" onClick={handleSubmit}>Click Me</Button>
      </form>

      {todos.map((todo, index) => (
        <TodosC
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default Todof;
