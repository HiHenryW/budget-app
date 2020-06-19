import React from 'react';
import axios from 'axios';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      monthly_budget: '',
    };

    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }

  clearForm() {
    this.setState({
      user_name: '',
      monthly_budget: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3000/users', this.state)
      .then((res) => {
        this.props.updateUserBudget(res.data);
      })
      .then(() => {
        this.clearForm();
      })
      .then(() => {
        alert('Successfully submitted!');
      })
      .catch((err) => {
        console.log('err in handleSubmit in userForm: ', err);
      });
  }

  handleNameChange(event) {
    this.setState({ user_name: event.target.value });
  }

  handleBudgetChange(event) {
    this.setState({ monthly_budget: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>
          Welcome!
          <small class="text-muted"> Enter name and monthly budget below</small>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            class="form-control w-25"
            placeholder="Please enter your name"
            value={this.state.user_name}
            onChange={this.handleNameChange}
          />
          <small class="form-text text-muted">
            We'll never share your information with anyone else.
          </small>
          <br></br>
          <label>Monthly Budget</label>
          <input
            type="number"
            class="form-control w-25"
            min="0"
            placeholder="Monthly budget target ($)"
            value={this.state.monthly_budget}
            onChange={this.handleBudgetChange}
          />
          <br></br>
          <label>Upload transactions</label>
          <div class="input-group mb-3 form-control-sm">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile02"
              />
              <label
                class="custom-file-label"
                for="inputGroupFile02"
                aria-describedby="inputGroupFileAddon02"
              >
                Choose file
              </label>
            </div>
          </div>
          <br></br>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
