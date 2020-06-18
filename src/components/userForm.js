import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: ''
    }
  }

  render() {
    return (
    <div>
      <h2>User Form</h2>
      <form>
      <label>
          Name:
          <input type="text"/>
        </label>
        <br/> <br/>
        <label>
          Budget Amount:
          <input type="text"/>
        </label>
      </form>
    </div>
    )
  }
}

export default UserForm; 