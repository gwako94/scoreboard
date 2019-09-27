import React, { Component } from 'react'

class AddPlayer extends Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state)
        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.name}/>
                    <input type='submit' value='ADD PLAYER' />
                </form>
            </div>
        )
    }
}

export default AddPlayer