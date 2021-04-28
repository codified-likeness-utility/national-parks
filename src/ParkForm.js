import React from 'react'

class ParkForm extends React.Component {
    submitHandler = (e) => {
        e.preventDefault()
        let newLocationName = e.target[0].value
        let newAddress = e.target[1].value
        let newCity = e.target[2].value
        let newPark = {
            'Location Name': newLocationName,
            'Address': newAddress,
            'City': newCity,
            'Visited': false,
          }
        this.props.addPark(newPark)
    }
    render(){
        return (
        <div class="mb-3">
            <h2>Create New Park</h2>
            <form onSubmit={this.submitHandler}>
                <label for='name' class="form-label">Name:  </label>
                <input id='name' type='text' placeholder='name'/>
                <br/>
                <label>Address:  </label>
                <input type='text' placeholder='address'/>
                <br/>
                <label>City:  </label>
                <input type='text' placeholder='city'/>
                <br/>
                <input class="btn-primary" type='submit'/>
            </form>
        </div>
        )
    }
}
export default ParkForm