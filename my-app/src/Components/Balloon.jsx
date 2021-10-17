import { Component } from 'react';

class Balloon extends Component {
    constructor() {
        super()
        this.state = {
            color: '#'+Math.floor(Math.random()*16777215).toString(16),
        };
    }
    click = () => {
        this.setState({
            color: 'none',
        })
    }
    render () {
        return (
            <>
                <div className='balloon' onClick={this.click} style={{
                    background: this.state.color,
                    position: 'absolute',
                    top: Math.random() * 500,
                    left: Math.random() * 1350,
                    }}></div>
            </> 
        )
    }
}
export default Balloon;