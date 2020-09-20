import React from 'react';
import '../css/home.css';

class Home extends React.Component{

    handleClick = () => {
        this.props.history.push('/teams');
    }


    render(){
        return (
            <div className="home">
                <button type="button" onClick={this.handleClick}>Manage the Teams</button>
            </div>
        )
    }
}

export default Home;