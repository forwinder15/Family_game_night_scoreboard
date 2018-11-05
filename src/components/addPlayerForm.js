import React, {Component} from 'react'

class AddPlayerForm extends Component {

//stateless way
  handleSubmit = (e) =>{
   e.preventDefault();
   this.props.addPlayer(this.playerInput.current.value)
   e.currentTarget.reset()
 }


playerInput = React.createRef();

//updates in real time *option
// state = {
//   value: ''
// };
// handleValueChange = (e) =>{
//   this.setState({ value: e.target.value });
// }
//
// handleSubmit = (e) =>{
//   e.preventDefault();
//   this.props.addPlayer(this.state.value);
//   this.setState({value: ''})
// }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input type="text"
                placeholder="Enter a players name"
                ref={this.playerInput}
                />

         <input type="submit" value="Add Player"/>

      </form>
    );
  }
}

export default AddPlayerForm;
