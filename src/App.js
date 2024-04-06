//parent file
import './App.css';
import { myData } from './data/data'  //when not a default export we import inside curly braces
import Childcomponent from './components/ChildComponent/Childcomponent';

function App() {
  const data = myData;

  return (
    <div className="App">
      <h1>Parent Containing the ChildComponent</h1>
      <div className='flexing-child ' >
      {data.map(each => (
        <Childcomponent key={each.id} sendingData={each} />
      )
      )}
       </div>
    </div>
  );
}

export default App;
