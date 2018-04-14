import React from 'react';

class AddUsers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name :'',
			age : 0,
			country :''
		}
		this.AddUserClick = this.AddUserClick.bind(this)
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeAge = this.onChangeAge.bind(this)
		this.onChangeCountry = this.onChangeCountry.bind(this)
		this.btnShowData = this.btnShowData.bind(this)
	}

	onChangeName(e){
		this.setState({
			name: e.target.value
		})
	}
	onChangeAge(e){
		this.setState({
			age : 	e.target.value
		})
	}
	onChangeCountry(e){
		this.setState({
			country : e.target.value
		})
	}



	AddUserClick(){
		this.props.onAdd(this.state.name,this.state.age,this.state.country)
	}

	btnShowData(){
		this.props.onShow();
	}

	render(){
		return(
			<div>
			<br/>
			UserName : <input value = {this.state.name} onChange={this.onChangeName}/>
			<br/><br/>
			Age: <input value = {this.state.age} onChange={this.onChangeAge}/>
			<br/><br/>
			country: <input value = {this.state.country} onChange={this.onChangeCountry}/>
			<br/><br/>
			<button onClick ={this.AddUserClick} > AddUser </button>
			<br/><br/>
			<br/><br/>
			<br/><br/>
			<button onClick = {this.btnShowData}> Show Users Data</button>



			{this.props.users.map(function(user) {
   			return (

   				<h2>{user.userName} my age is {user.age} i live in {user.country
   				}</h2>

   				)
  				 })}
			</div>

			)
	}

}
export default AddUsers;