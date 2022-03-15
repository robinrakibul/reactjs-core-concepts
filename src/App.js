import logo from './logo.svg';
import './App.css';

const number = 55555;
const singer = {name: 'Jaden', job:'singing'};

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude, React. How are you?</h3>  
        </div>
        <div className="music">
          <p style={{color:'blue',backgroundColor:'yellow'}}>Name: {number+2222}</p>
          <p style={singerStyle}>Name: {singer.name}, Job: {singer.job}</p>  
        </div>
        <div className='App'>
        <Person></Person>
        <Friend></Friend>
        </div>
      </header>
    </div>
  );
}

function Person(){
  return <h1>Returning</h1>
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name: Jackey</h3>
      <p>Job: Fighting</p>
    </div>
  )
}

export default App;
