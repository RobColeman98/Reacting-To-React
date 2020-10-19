import React from "react";

// let App = (props) => {
//   //return (<h1>{props.name} {props.city}</h1>)

// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "I don't like React :(",
      placeholder: "Woo I Guess",
      inputtext: "",
      hasLoaded: false,
    };
  }

  handleInputChange = () => {
    this.setState({ inputtext: document.getElementById("Woo").value });
    this.setState({ hasLoaded: document.getElementById("Help").value });
  };

  loadPage() {
    this.setState({ hasLoaded: true });
  }
  
  componentDidMount() {
      this.setState({hasLoaded: true});
  }

  render() {
    if (this.state.hasLoaded == true) {
      return (
        <div>
          <h1>
            {this.props.name} , {this.state.text}
          </h1>
          <input
            id="Woo"
            placeholder={this.state.placeholder}
            //   value={this.state.text}
            onChange={(event) => {
              this.handleInputChange();
            }}
          />
          <h1>{this.state.inputtext}</h1>

          <button
            onClick={(event) => {
              this.handleInputChange();
            }}
            id="Help"
          >
            I really Hate React.Js
          </button>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Loading..... I guess</h1>

          <button
            onClick={(event) => {
              this.loadPage();
            }}
            id="Help"
          >
            I really Hate React.Js{" "}
          </button>
        </React.Fragment>
      );
    }
  }
}

export default App;
