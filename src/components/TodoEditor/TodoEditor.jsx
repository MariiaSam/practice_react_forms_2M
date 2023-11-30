import React, { Component } from "react";
import './TodoEditor.css';

class TodoEditor extends Component {
    state = {
        message: '',
    }

    handleChange = e => {
        this.setState({ message: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                <button type='submit'>Add</button>
            </form>
        );
    }
}

export default TodoEditor;
