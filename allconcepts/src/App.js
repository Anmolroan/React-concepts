
import { useContext } from 'react';
import DataFetching from './components/DataFetching';
import HookCounterOne from './components/HookCounterOne';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import Counter from './components/Counter';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
import {ThemeContext} from './contexts/ThemeContext';

function App() {
  const themeContext =useContext(ThemeContext);
  const {theme,toggleTheme} =themeContext;
  const styles = {
    backgroundColor: theme
  };
  return (
    <div className="App" style={styles}>
    <button onClick={()=>toggleTheme()}>ToggleTheme</button>
 {/* <IntervalHookCounter/> */}
 {console.log(themeContext)}
 {/* <DataFetching/> */}
 {/* <Counter/>
 <HookCounterThree/>
 <HookCounterFour/> */}
    </div>
  );
}

export default App;
