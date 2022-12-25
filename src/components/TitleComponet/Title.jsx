import react, { Component } from "react";
import "./Title.css";

class Title extends Component {
  state = {
    title: "This Is Dummy Title",
    isInput: false,
  };

  editHandle = () => {
    this.setState({
      ...this.state,
      isInput: true,
    });
  };

  handleChange =(event)=>{
    this.setState({
        ...this.state,
        title: event.target.value
    })
  }

  handleKeyPress =(event)=>{
    if(event.key === 'Enter'){
        this.setState({
            ...this.state,
            isInput: false
        })
    }
  }


  handleBlur =(event)=>{
    this.setState({
        ...this.state,
        isInput: false
    })
}
  



  render() {
    let output = null;
    if (this.state.isInput) {
      output = (
        <div className="container my-5">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onBlur={this.handleBlur}
            value={this.state.title}
          />
        </div>
      );
    } else {
      output = (
        <div className=" my-3 d-flex headding">
          <h1 className="display-3  ">{this.state.title}</h1>
          <span onClick={this.editHandle} className="ml-auto edit_icon">
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </div>
      );
    }

    return <div className="container">{output}</div>;
  }
}

export default Title;
