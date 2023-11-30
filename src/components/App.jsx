import React, { Component } from 'react';
import Form from './Form/Form';

import TodoList from './TodoList/TodoList';
import TodoEditor from './TodoEditor/TodoEditor';

import Filter from './Filter/Filter';

class App extends Component {
  state = {
    todos: [
      { id: 'id_1', text: 'Learn', completed: true },
      { id: 'id_2', text: 'Counter', completed: true },
      { id: 'id_3', text: 'Redux', completed: false },
    ],
    filter: '',
    inputValue: '',
  };

  addTodo = text => {
    const todo = {
      id: 12,
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getfilteredTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  // handlerNameChange = event => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  // };

  // handlerTagChange = event => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ tag: event.currentTarget.value });
  // };

  // handlerInputChange = event => {
  //   console.log(event.currentTarget.value)

  //   this.setState({inputValue: event.currentTarget.value})
  // };

  getCompletedTodoCount = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = this.getCompletedTodoCount();

    const filteredTodos = this.getfilteredTodos();

    return (
      <div>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handlerInputChange}
        ></input> */}
        <Form onSubmit={this.formSubmitHandler}></Form>

        {/* onSubmit - props */}
        <div>
          <p> Загальна кількість: {totalTodoCount} </p>
          <p> Загальна кількість виконаних: {completedTodoCount} </p>
        </div>
        <TodoEditor onSubmit={this.addTodo}></TodoEditor>

        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
