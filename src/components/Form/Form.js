const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: 'false'
  };

  handlerChange = e => {
    const { name, value } = e.currentTarget.value;
    // console.log(e.currentTarget);
    // console.log(e.currentT arget.name);
    // console.log(e.currentTarget.value);

    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resert();
  };

  handlerLicenceChange = e => {

    this.setState({licence: e.currentTarget.checked})

}

  resert = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label htmlFor="">
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handlerChange}
          />
        </label>

        <label htmlFor="">
          Last name
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handlerChange}
          />
        </label>

        <p>You Level</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.onChange}
            checked={this.state.experience === 'junior'}
          ></input>{' '}
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.onChange}
            checked={this.state.experience === 'middle'}
          ></input>{' '}
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.onChange} 
            checked={this.state.experience === 'senior'}
          ></input>{' '}
          senior
        </label>
        <label><input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handlerLicenceChange}></input>Agree</label>
      

        <button type="submit" disabled={!this.state.licence}>Send</button>
      </form>
    );
  }
}

export default Form;
