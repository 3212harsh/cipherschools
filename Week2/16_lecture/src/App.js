import logo from './logo.svg';
import './App.css';

function App() {
  const org = "Cipher Schools";
  const NAME = "Harsh choudhary";
  return (
    <>
      <div>
        <h1 style={{color:"red",textAlign:"center"}}>
          Hello from {org}
        </h1>
      </div>
      <div>
        <p>This is {NAME}</p>
      </div>
    </>
  );
}

export default App;
