import React, { Component } from 'react';

// import logo from './logo.svg';

class Repo extends Component {
  render() {
	  	  
    return (
      <div className="Repo">
		<h2>
		<i className="fa fa-star"></i>
			<a href={this.props.repo.html_url}>{this.props.repo.full_name}</a>
		</h2>
		<p>{this.props.repo.description}</p>
		<div className="counters">
			<i className="fa fa-star"></i><a href={this.props.repo.stargazers_url}>{this.props.repo.stargazers_count}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-code-fork"></i><a href={this.props.repo.forks_url}>{this.props.repo.forks_count}</a>
		</div>
      </div>
    );
  }
}




export default Repo;
