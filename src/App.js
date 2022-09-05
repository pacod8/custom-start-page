
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
      <a href='https://www.youtube.com' target="_blank"><CircumIcon name="youtube" color="white" size="60px"/></a>
    </div>
    <div class="github">
      <a href='https://github.com/pacod8' target="_blank"><CircumIcon name="route" color="white" size="60px"/></a>
    </div>
    <div class="notion">
      <a href='https://www.notion.so' target="_blank"><CircumIcon name="bacon" color="white" size="60px"/></a>
    </div>
    <div class="linkedin">
      <a href='https://www.linkedin.com' target="_blank"><CircumIcon name="linkedin" color="white" size="60px"/></a>
    </div>
    <div class="whatsapp">
      <a href='https://web.whatsapp.com' target="_blank"><CircumIcon name="chat_1" color="white" size="60px"/></a>
    </div>
    <div class="calendar">
      <a href='https://calendar.google.com' target="_blank"><CircumIcon name="calendar" color="white" size="60px"/></a>
    </div>
    <div class="gmail">
      <a href='https://mail.google.com' target="_blank"><CircumIcon name="mail" color="white" size="60px"/></a>
    </div>
    <div class="tidal">
      <a href='https://listen.tidal.com/' target="_blank"><CircumIcon name="music_note_1" color="white" size="60px"/></a>
    </div>
    <div class="onedrive">
      <a href='https://liveutad-my.sharepoint.com' target="_blank"><CircumIcon name="cloud" color="white" size="60px"/></a>
    </div>
    <div class="matter">
      <a href='https://web.getmatter.app' target="_blank"><CircumIcon name="bookmark" color="white" size="60px"/></a>
    </div>
    <div class="twitter">
      <a href='https://twitter.com/home' target="_blank"><CircumIcon name="twitter" color="white" size="60px"/></a>
    </div>
    <div class="todoist">
      <a href='https://todoist.com/app/today' target="_blank"><CircumIcon name="circle_list" color="white" size="60px"/></a>
    </div>
  </div>
</div>
  );
}

export default App;
