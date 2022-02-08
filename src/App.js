import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.firstref = React.createRef();
    this.secondref = React.createRef();
    this.thirdref = React.createRef();
    this.fourthref = React.createRef();
    this.cardholderref = React.createRef();
    this.monthref = React.createRef();
    this.cvvref = React.createRef();
    this.submitref = React.createRef();
    this.state = {
      cardnumber1: '',
      cardnumber2: '',
      cardnumber3: '',
      cardnumber4: '',
      name: '',
      expiry: '',
    };
  }
  componentDidMount(){
    this.firstref.current.focus()
  }
  
  input1 = (e) => {
    this.setState({ cardnumber1: e.target.value });
    if (e.target.value.length === 4) {
      this.secondref.current.focus();
    }
  };
  input2 = (e) => {
    this.setState({ cardnumber2: e.target.value });
    if (e.target.value.length === 4) {
      this.thirdref.current.focus();
    }
  };
  input3 = (e) => {
    this.setState({ cardnumber3: e.target.value });
    if (e.target.value.length === 4) {
      this.fourthref.current.focus();
    }
  };
  input4 = (e) => {
    this.setState({ cardnumber4: e.target.value });
    if (e.target.value.length === 4) {
      this.cardholderref.current.focus();
    }
  };
  input5 = (e) => {
    this.setState({ name: e.target.value });
    if (e.key === 'Enter') {
      this.monthref.current.focus();
    }
  };
  input6 = (e) => {
    if (e.key === 'Enter') {
      this.cvvref.current.focus();
    }
  }
  date=(e)=>{
    this.setState({expiry:e.target.value})
  }
  input7 = (e) => {
    if (e.target.value.length === 3) {
      this.submitref.current.focus();
    }
  };

  render() {
    return (
      <div className="betterview">
        <div className="card">
          <span className="cardName">
            <p>VISA</p>
          </span>
          <span className="cardNumber">
            {this.state.cardnumber1} {this.state.cardnumber2}{' '}
            {this.state.cardnumber3} {this.state.cardnumber4}
          </span>
          <span className="cardholderName">{this.state.name}</span>
          <span className="expirydate">{this.state.expiry}</span>
        </div>
        <div className="formbox">
          <div className="form">
            CARD NUMBER
            <br />
            <input
              type=""
              maxlength="4"
              ref={this.firstref}
              onKeyUp={this.input1}
            />
            <input
              type="text"
              maxlength="4"
              ref={this.secondref}
              onKeyUp={this.input2}
            />
            <input
              type="text"
              maxlength="4"
              ref={this.thirdref}
              onKeyUp={this.input3}
            />
            <input
              type="text"
              maxlength="4"
              ref={this.fourthref}
              onKeyUp={this.input4}
            />
          </div>{' '}
          <br />
          <br />
          <span className="cardholder">
            CARD HOLDER <br />
            <input type="text" ref={this.cardholderref} onKeyUp={this.input5} />
          </span>
          <br />
          <br />
          <span className="expiry">
            EXPIRATION DATE <br />
            <br />
            <input type="date" ref={this.monthref} onKeyUp={this.input6} onChange={this.date} />
          </span>
          <br />
          <br />
          <span className="cvv">
            CVV <br />
            <br />
            <input
              type="password"
              maxlength="3"
              ref={this.cvvref}
              onKeyUp={this.input7}
            />
          </span>
          <button className="button" ref={this.submitref}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}
export default App;
