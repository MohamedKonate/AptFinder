import './App.css';
import Login from './components/login/Login';

function App() {
//
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

//


  return (
    <div className="App">
      
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>


      <Login/>

    </div>
  );
}

export default App;
