
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
    <div className="youtube">
      <a href='https://www.youtube.com' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="youtube" color="white" size="60px"/></a>
    </div>
    <div className="github">
      <a href='https://github.com/pacod8' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="route" color="white" size="60px"/></a>
    </div>
    <div className="notion">
      <a href='https://www.notion.so' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="bacon" color="white" size="60px"/></a>
    </div>
    <div className="linkedin">
      <a href='https://www.linkedin.com' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="linkedin" color="white" size="60px"/></a>
    </div>
    <div className="whatsapp">
      <a href='https://web.whatsapp.com' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="chat_1" color="white" size="60px"/></a>
    </div>
    <div className="calendar">
      <a href='https://calendar.google.com' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="calendar" color="white" size="60px"/></a>
    </div>
    <div className="gmail">
      <a href='https://mail.google.com' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="mail" color="white" size="60px"/></a>
    </div>
    <div className="tidal">
      <a href='https://listen.tidal.com/' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="music_note_1" color="white" size="60px"/></a>
    </div>
    <div className="onedrive">
      <a href='https://liveutad-my.sharepoint.com' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="cloud" color="white" size="60px"/></a>
    </div>
    <div className="matter">
      <a href='https://web.getmatter.app' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="bookmark" color="white" size="60px"/></a>
    </div>
    <div className="twitter">
      <a href='https://twitter.com/home' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="twitter" color="white" size="60px"/></a>
    </div>
    <div className="todoist">
      <a href='https://todoist.com/app/today' className='icon' target="_blank" rel="noreferrer"><CircumIcon name="circle_list" color="white" size="60px"/></a>
    </div>
  </div>
</div>
  );
}

export default App;
