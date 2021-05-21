import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class CounterButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.setState({counter: this.state.counter + 1});
        console.log(this.state);
    }

    render(){
        var text = this.state.counter;

        return(
            <div>
                <p onClick = {this.handleClick}>
                    <Button variant = "contained" color = "primary">按鍵</Button>
                </p>

                <h1>你點了 {text} 次.</h1>
            </div>
        );
    }
}

export default CounterButton;
ReactDOM.render( <CounterButton />, document.getElementById('root'));