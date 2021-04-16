import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './component/Home'

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
			</Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
