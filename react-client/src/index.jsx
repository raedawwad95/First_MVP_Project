import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserList from './components/UserList.jsx';
import AddUser from './components/AddUser.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
    }
  }

  add( userName , age ,country ) {
    $.ajax({
      type: 'POST',
      url: '/users',
      data : {
      userName : userName ,
      age: age , 
      country : country
     },

      success: (data) => {
        console.log('Added', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
    showData(){
      $.ajax({
        type:'GET',
        url: '/users',
        success:(data)=>{
          this.setState({
            users:data
          })
        },
        error: (err) => {
        console.log('err', err);
      }
      })
    }
  

  render () {
    return (<div>
      <h1>Users Data</h1>
      <UserList users={this.state.users}/>
      <AddUser users={this.state.users} onAdd={this.add.bind(this)} onShow={this.showData.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));