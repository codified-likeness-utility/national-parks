import React from "react";


export default class Park extends React.Component {

    clickHandler = () => {
        console.log('clicked')
        this.props.toggleVisit(this.props.park)
    }

    render() {
        return(
            <div className='card-body'>
                <h1 class="card-title">{this.props.park['Location Name']}</h1>
                <h4 class="card-subtitle mb-2 text-muted">{this.props.park.Address}</h4>
                <h6>{this.props.park.City}, {this.props.park.State}</h6>
                <p>Visited: {this.props.park.Visited ? 'Yes' : 'No'} </p>
                <button className='btn-primary' onClick={this.clickHandler}>Click When Visited!</button>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        )
    }

}