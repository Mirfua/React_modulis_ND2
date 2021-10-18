import { Component } from 'react';
window.sum = 0;

class Balloon extends Component {
    constructor({ text }) {
        super();
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.text = text;
        this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.top = (this.y + 200) > window.innerHeight ? window.innerHeight - 200 : this.y;
        this.left = (this.x + 200) > window.innerWidth ? window.innerWidth - 216 : this.x + 5;
        this.state = {
            // hide: '',
            counter: window.sum,
        };
    }

    componentDidMount() {
    }

    click = () => {
        window.sum += 1;
        this.setState({
            hide: 'none',
            counter: window.sum,
        })
    }

    render() {
        return (
            <div className="parent">
                <h1>
                    <div className="counter" style={{ zIndex: this.state.counter }}>Balloons: {this.state.counter}</div>
                </h1>
                <h1 className="balloon" onClick={this.click} style={{
                    backgroundColor: this.color,
                    display: this.state.hide,
                    position: 'absolute',
                    top: this.top,
                    left: this.left
                }}>
                </h1>
            </div>
        )
    }
};

export default Balloon;