import React, {Component} from "react";
import style from './Form.module.css'

export class Form extends Component {
    state = {
        name: 'Lesson 1'
    };

    handleChange =(event) => {
        this.setState({name: event.target.value})
    }

    render(){
        return (
            <>
                <p className={style.form}>{this.state.name}</p>
                <input className={style.input} type="text" onChange={this.handleChange} value={this.state.name}/>
            </>
        )
    }
}