import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

export default class Todoc extends React.Component {
  constructor(key, index,todo ,removeTodo,editedTodo,completeTodo) {
    super();
    this.state = {
      Todos: [{ text: "Learning Coding", isComplete: false }],
      input: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.input)
  };
  handleClick = (event) => {
    
    this.setState({
     Todos :[...this.state.Todos,{text :  this.state.input, isComplete : false}],
     input : ""
    });

    console.log(this.state.Todos)
  };
   completeTodo = (index) => {
    console.log("complete click");
    const newTodos = [...this.state.Todos];
    newTodos[index].isComplete = !this.state.Todos[index].isComplete;
    this.setState({Todos:newTodos});
  };
   editTodo = (index) => {
    const newTodos = [...this.state.Todos];
    const editTodos = newTodos[index].text;
    console.log(editTodos);

    const editedTodo = prompt(editTodos);
    newTodos.splice(index, 1, { text : editedTodo, });
    this.setState({Todos:newTodos});
  };
   removeTodo = (index) => {
    console.log("Sudah ke click");
    const newTodos = [...this.state.Todos];
    newTodos.splice(index, 1);
    this.setState({Todos:newTodos});

  };




   TodosF = ({ todo, index, removeTodo, editTodo, completeTodo }) => {
    return (
      <div style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
        <h3>{todo.text}</h3>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
        <button onClick={() => editTodo(index)}>Edit</button>
      </div>
    );
  };
  render() {
    const styles ={
        'alignItems' : 'center',
        'justifyContent': 'center',
        'display':'flex',
        'flexDirection' : 'column'
      }
    return (
      <div style={styles}>
        <h1>Todos With Class Base</h1>
        <form>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <Button type="primary" onClick={this.handleClick}>
            Click Me
          </Button>
        </form>

        {this.state.Todos.map((item, index) => (
            <this.TodosF
              key={index}
              index={index}
              todo={item}
              removeTodo={this.removeTodo}
              editTodo={this.editTodo}
              completeTodo={this.completeTodo}
            />
          ))}
        
      </div>
    );
  }
}
