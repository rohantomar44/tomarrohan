import React, { Component } from 'react';
import PopupModal from './popupComponent'
const Employee = props => (
  <tr>
    <td>{props.employee.fname}</td>
    <td>{props.employee.email}</td>
    <td>{props.employee.address}</td>
  </tr>
)

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesDataNew: [
        {
          fname: "Rohan",
          email: "rohan@xyz.com",
          address: "hapur"
        },
        {
          fname: "namit",
          email: "namit@xyz.com",
          address: "kashipur "
        },
        {
          fname: "dhruv",
          email: "dhruv@xyz.com",
          address: "dhanaura "
        },
        {
          fname: "vipul",
          email: "vipul@xyz.com",
          address: "gajraula"
        }
      ],
      filter: "",
      showPopup: false,
      name: "",
      email: '',
      address: '',
      modalInputName: "",
    }
  }

  employeeList() {
    return this.state.employeesDataNew.map(currentemployee => {
      return <Employee employee={currentemployee} key={currentemployee.email} />;
    })
  }
  togglePopup(name, email, address) {
    this.setState({
      showPopup: !this.state.showPopup,
      name: name,
      email: email,
      address: address
    });
  }

  render() {

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeesDataNew.map((item, index) => (
              <tr key={index} onClick={this.togglePopup.bind(this, item.fname, item.email, item.address)}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.showPopup ?
          <PopupModal
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
            name={this.state.name}
            email={this.state.email}
            address={this.state.address}
          />
          : null
        }
      </div>
    )
  };
}