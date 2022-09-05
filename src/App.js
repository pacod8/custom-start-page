
import './App.css';
import DateTime from './components/DateTime/DateTime';

function App() {
  return (
<div>
  <div className='basic-info'>
    <p className='welcome-text'>Bienvenido, Paco</p>
    <DateTime className='date-time'></DateTime>
  </div>
  <div className='container'>
  </div>
  <div className='info scale-up-ver-center'>
  </div>
</div>
  );
}

export default App;
