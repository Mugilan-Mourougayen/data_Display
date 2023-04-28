import { useEffect ,useState} from 'react';
import './App.css';

function App() {
  const [values,setValues]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/lastten`)
        .then(response => response.json())
        .then(data => {setValues(data)
        console.log(data) });
  },[])
  return (
    <div className="App">
      <h3>Web based sensor data logging system for chemical industry using RaspberryPi and MQTT</h3>

      <header className="App-header">
      <table>
      <tr key={"header"}>
        
          <th>Time</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>value 1</th>
          <th>value 2</th>
          <th>value 3</th>
          
        
      </tr>
      {values.map((value) => (

        <tr key={value._id}>
        <td>
          {value.time}
          </td>
          <td key={value._id}>
         {value.teperature}
         </td>
         <td key={value._id}>
         {value.humidity}
         </td>
         <td key={value._id}>
         {value.val1}
         </td>
         <td key={value._id}>
         {value.val2}
         </td>
         <td key={value._id}>
         {value.val3}
         </td>
        </tr>
       
      ))}
    </table>
     
      </header>
    </div>
  );
}

export default App;
