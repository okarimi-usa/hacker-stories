import logo from './logo.svg';
import './App.css';
import React from 'react';
import FilterableList from './flattenTree.js';

export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* Children of FormInput component are passed as prop. Added by Omid */}
          <FilterableList> 
            <p>This <i>p</i> children needs to be called inside its component to be displayed.</p>
          </FilterableList>
          {/* <FilterableProductTable products={PRODUCTS} /> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}

/* function Example() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    if(count%2 === 1)
      document.querySelector("#but").style.backgroundColor = 'yellow';
    else
      document.querySelector("#but").style.backgroundColor = color;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button id= "but" 
              onClick={() => {
                setColor("red");
                setCount(count + 1);
              }}
                >
        Click me
      </button>
    </div>
  );
}
 */
/* class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({date: new Date()}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Local time is:</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // since in JavsScript, class methods are not bound to `this` by default.
    //this.handleClick = this.handleClick.bind(this);
  }
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      // Generally, if you refer to a method without () after it, such as below, you should bind that method.
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ONN' : 'OFF'}
      </button>
    );
  }
} */
/* class Blog extends React.Component {
  
  render(){
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    const sidebar = (
      <ul style={{}}>
        {posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p style={{ color: 'blue', padding: 10 }}>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
        <hr />
        <Reservation/>
        <hr />

      </div>
    );
  }
} */
/* class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
} */
