
import './App.css';
import DateTime from './components/DateTime/DateTime';
import CircumIcon from "@klarr-agency/circum-icons-react"; // React

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
    <div class="youtube">
      <CircumIcon name="youtube" color="white" size="60px"/>
    </div>
    <div class="github">
      <CircumIcon name="route" color="white" size="60px"/>
    </div>
    <div class="notion">
      <CircumIcon name="bacon" color="white" size="60px"/>
    </div>
    <div class="linkedin">
      <CircumIcon name="linkedin" color="white" size="60px"/>
    </div>
    <div class="whatsapp">
      <CircumIcon name="chat_1" color="white" size="60px"/>
    </div>
    <div class="calendar">
      <CircumIcon name="calendar" color="white" size="60px"/>
    </div>
    <div class="gmail">
      <CircumIcon name="mail" color="white" size="60px"/>
    </div>
    <div class="tidal">
      <CircumIcon name="music_note_1" color="white" size="60px"/>
    </div>
    <div class="onedrive">
      <CircumIcon name="cloud" color="white" size="60px"/>
    </div>
    <div class="matter">
      <CircumIcon name="bookmark" color="white" size="60px"/>
    </div>
    <div class="synology">
      <CircumIcon name="database" color="white" size="60px"/>
    </div>
    <div class="todoist">
      <CircumIcon name="circle_list" color="white" size="60px"/>
    </div>
  </div>
</div>
  );
}

export default App;
