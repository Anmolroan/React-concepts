
import { useContext } from 'react';
import DataFetching from './components/DataFetching';
import HookCounterOne from './components/HookCounterOne';
import IntervalHookCounter from './components/IntervalHookCounter';
import Counter from './components/Counter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import {ThemeContext} from './contexts/ThemeContext';
import { LoveContext } from './contexts/LoveContext';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  const themeContext =useContext(ThemeContext);
  const {theme,toggleTheme} =themeContext;
  const loveContext =useContext(LoveContext);
  const {loveBox,afterYears} =loveContext;
  const styles = {
    backgroundColor: theme
  };
  return (
    <div className="App" style={styles}>
    <Navbar/>
  <Routes>
    <Route path="datafetching" element ={<DataFetching></DataFetching>}/>
    <Route path="HookCounterOne" element ={<HookCounterOne/>}/>
    <Route path="IntervalHookCounter" element ={<IntervalHookCounter/>}/>
    <Route path="Counter" element ={<Counter/>}/>
    <Route path="HookCounterFour" element ={<HookCounterFour/>}/>
    <Route path="HookCounterThree" element ={<HookCounterThree/>}/>
  </Routes>
    </div>
  );
}

export default App;
