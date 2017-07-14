import React, { Component } from 'react';
import Repo from './repo';

class Repos extends Component {
	

  render() {
	 
	// fetch data:
	//console.log(this.props);
	
	let repoItems;
	if(this.props.repos){
		repoItems = this.props.repos.map(repo => {
			
			return(
			<Repo key={repo.full_name} repo={repo} />
			);
			
		});
	}


	
    return (
      <div className="Repos">
	  {repoItems}

      </div>
    );
  }
}


export default Repos;
