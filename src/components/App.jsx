import React, { Component } from 'react';
import Form from './Form/Form';

import TodoList from './TodoList/TodoList';
import TodoEditor from './TodoEditor/TodoEditor';

import Filter from './Filter/Filter';
import { IconButton } from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

import { Modal } from './Modal/Modal';

class App extends Component {
  state = {
    todos: [
      // { id: 'id_1', text: 'Learn', completed: true },
      // { id: 'id_2', text: 'Counter', completed: true },
      // { id: 'id_3', text: 'Redux', completed: false },
    ],
    filter: '',
    inputValue: '',
    showModal: false,
  };

  //забрати з беку
  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    setTimeout(() => {}, 2000);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  //записати в сховище, відправити запит
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log('Оновилось поле todos, запису ю todos в сховище');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

    this.toggleModal();
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
    const { filter } = this.state;
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
    const { showModal } = this.state;

    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = this.getCompletedTodoCount();

    const filteredTodos = this.getfilteredTodos();

    return (
      <div>
        <IconButton onClick={this.toggleModal} aria-label='add todo'>
          <AddIcon width="40" height="40"></AddIcon>
        </IconButton>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handlerInputChange}
        ></input> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <h1>Hi, there is a content for The Modal Window </h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis distinctio quas eos ea provident, sunt enim sed hic suscipit quibusdam quasi fuga, quisquam labore? Neque tempora ratione nulla ipsam.</p> */}
            {/* <button type='button' onClick={this.toggleModal} >Close </button> */}
          </Modal>
        )}

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
