import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import GPTScreen from './components/GPTScreen';
import ExploreScreen from './components/ExploreScreen';
import MyApps from './components/MyApps';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} ></Route>
      <Route path='/Explore' element={<ExploreScreen />} ></Route>
      <Route path='/myapps' element={<MyApps />} ></Route>
      <Route path='/gpt/:id' element={<GPTScreen />} ></Route>
    </Routes>
  );
}

export default App;
