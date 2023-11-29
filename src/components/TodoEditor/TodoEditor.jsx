import React, {Component} from "react";

class TodoEditor extends Component {

    state = {
        message: ''
    }

    handlerChange = e => {
    
    }

    render() {
        return (
            <form>
                <textarea value={this.state.message} onChange={this.handlerChange}></textarea>
            <button type='button'>Add</button>
            </form> );
    }

}

export default TodoEditor