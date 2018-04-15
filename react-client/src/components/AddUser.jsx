import React from 'react';

class AddUsers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name :'',
			age : 0,
			country :'',
			phone: 0,
			city:''

		}
		this.AddUserClick = this.AddUserClick.bind(this)
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeAge = this.onChangeAge.bind(this)
		this.onChangeCountry = this.onChangeCountry.bind(this)
		this.onChangePhone = this.onChangePhone.bind(this)

		this.onChangeCity = this.onChangeCity.bind(this)

		this.btnShowData = this.btnShowData.bind(this)
	}
	onChangePhone(e){
		this.setState({
			phone: e.target.value
		})
	}
	onChangeCity(e){
		this.setState({
			city: e.target.value
		})
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
		this.props.onAdd(this.state.name,this.state.age,this.state.country,this.state.phone,this.state.city)
	}

	btnShowData(){
		this.props.onShow();
	}

	render(){
		
		return(
			<div>
			<br/>
			<h2 id ='text'>UserName : <input value = {this.state.name} onChange={this.onChangeName}/></h2>
			<br/><br/>
			<h2 id ='text'>Age: <input value = {this.state.age} onChange={this.onChangeAge}/></h2>
			
			<br/><br/>
			<h2 id ='text'>country: <input value = {this.state.country} onChange={this.onChangeCountry}/></h2>
			<br/><br/>

			<h2 id ='text'>Phone: <input value = {this.state.phone} onChange={this.onChangePhone}/></h2>
			<br/><br/>

			<h2 id ='text'>City: <input value = {this.state.city} onChange={this.onChangeCity}/></h2>
			<br/><br/>
			<div id='btn'><button onClick ={this.AddUserClick} > AddUser </button></div>
			<br/><br/>
			<br/><br/>
			<div id='btn'><button onClick = {this.btnShowData}> Show Users Data</button></div>



			{this.props.users.map(function(user,i) {
   			return (
   						
   						<h2  id ='user'  key={i}>{user.userName} my age is {user.age}
   							 i live in {user.country} Phone {user.phone} City {user.city}</h2>
   				

   				)
  				 })}
			<h3 id ='text'> There are { this.props.users.length } users. </h3>
			</div>

			)
	}

}
export default AddUsers;