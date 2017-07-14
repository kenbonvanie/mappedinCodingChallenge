import React, { Component } from 'react';
import Repos from './Components/repos';
import $ from 'jquery';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

class App extends Component {
	
	constructor()
	{
		super();
		this.state = {
			repos:[]
		}
	}
	
	getRepos()
	{
		$.ajax({
			url: "https://api.github.com/users/axiomaticdesign/starred",
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({repos:data}, function(){
					console.log(this.state);
				});
				
			}.bind(this),
			error:function(xhr, status, err){
				console.log(err);
			}
		})
	}
	
	componentDidMount() {		
		this.getRepos();
	}
	
	
  render() {
    return (
      <div className="App">
        <h1>Starred repos for axiomaticdesign</h1>
		
		<Repos repos={this.state.repos}/>

      </div>
    );
  }
}

export default App;
