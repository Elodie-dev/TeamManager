import React from 'react';


class Team extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team:'',
            equipes:[]
        }
    }

    handleHome = () => {
        this.props.history.push('/');
    }

    handleSubmit = () => {
        fetch("http://localhost:3050/teams",
        {method: 'POST', headers: {'content-type': 'application/json'},
        body: JSON.stringify({nom_equipe: this.state.team})})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            window.location.reload(true);
        });
    }

    componentDidMount= () => {
    
        fetch("http://localhost:3050/teams")
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              this.setState({equipes : data.data});
        })
    }

   

    render(){
        // console.log(this.state.equipes);
        let equipe = this.state.equipes.map((data, i) => <p key={i} onClick={() =>{let id = data.id_equipe;
        this.props.history.push(`/teams/${id}`);}}>{data.nom_equipe}</p>);
        return (
            <div className="team">
                <div className="teamInput">
                    <input type="text" id="team" name="team" value={this.state.team} onChange={(e) => {this.setState({team: e.target.value})}}/><button type="button" onClick={this.handleSubmit}>Add</button>
                </div>
                <div className="teamP">
                    {equipe}
                </div>
                <div className="backButton">
                    <button type="button" onClick={this.handleHome}>Back to home</button>
                </div>
            
            </div>
        )
    }
}

export default Team;