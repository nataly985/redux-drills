import React, { Component } from 'react';
import { addGuest, removeGuest, updateName } from './ducks/guestList';
import EditGuest from './EditGuest';
import { connect } from 'react-redux';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      edit: false,
      guestToEdit: '',
      guestIndex: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editName = this.editName.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.updateGuestName = this.updateGuestName.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text);
    this.setState({
      text: ''
    })
  }
  showModal(guest, index){
    this.setState( {
      edit: true,
      guestToEdit: guest,
      index: index
    })
  }
  hideModal() {
    this.setState({
      edit: false
    })
  }
  editName(e) {
    this.setState({
      guestToEdit:e.target.value
    })
  }
  updateGuestName(){
    this.props.updateName(this.state.guestToEdit, this.state.index)
    this.hideModal()
  }


  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {
              this.props.list.map( (guest, i) => {
                return (
                  <div key={i} className="list-item">
                    <li>{guest}</li>
                    <div>
                      <button
                      onClick={()=>this.showModal( guest, i)}
                      >Edit</button>
                      <button onClick={()=> this.props.removeGuest(i)}>Remove</button>
                    </div> 
                  </div>
                )
              })
          }
        </ul>
        <form
          onSubmit={this.handleSubmit}
          className="add-guest">
          Add guest: <input
          value={this.state.text}
          onChange={this.handleInputChange}
          />
          <button>Add</button>
        </form>
        {
          this.state.edit ? 
          <EditGuest
            hide={this.hideModal}
            guest={this.state.guestToEdit}
            edit={this.editName}
            update={this.updateGuestName} />
          : null
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  }
}

export default connect(mapStateToProps,{ addGuest, removeGuest, updateName })(App);
