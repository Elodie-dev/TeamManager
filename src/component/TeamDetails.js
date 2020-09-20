import React from 'react';

class TeamDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          team:'',
          id : props.match.params.id,
          equipe:{}
          
        }
    
    }
    handleReturn = () => {
        this.props.history.push('/teams');
    }

    handleUpdate = () => {
        fetch("http://localhost:3050/teams/" + this.state.id,
        {method: 'PUT', headers: {'content-type': 'application/json'},
        body: JSON.stringify({nom_equipe: this.state.team})})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            window.location.reload(true);
        });
    }
    
    handleDelete = () => {
        fetch("http://localhost:3050/teams/" + this.state.id,
        {method: 'DELETE'})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            this.props.history.push('/teams');
        });
    }

    componentDidMount = () => {
    
        fetch("http://localhost:3050/teams/"+this.state.id)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({equipe: data.data});
        })
    }

    

    render(){
        return (
            <div className="teamDetails">
                <h1>{this.state.equipe.nom_equipe}</h1>
                <input type="text" id="team" name="team" value={this.state.team}
     onChange={(e) => {this.setState({team: e.target.value})}}/><button type="button" onClick={this.handleUpdate}>Edit</button><button type="button" onClick={this.handleDelete}>Delete</button><br/>
        <button type="button" onClick={this.handleReturn}>Back</button>
            </div>
        )
    }
}

export default TeamDetails;