import './App.css';
import Sidebar from './components/Sidebar';
import Agenda from './components/Agenda';

function App() {
  return (
    <div className='flex flex-c'>
      <Sidebar />
      <Agenda />
    </div>
  );
}

export default App;
