import logo from './logo.svg';
import './App.css';
import headshot from './assets/MicrosoftTeams-image.png';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import outlook from './assets/outlook.svg';
import gmail from './assets/gmail.svg';


function App() {
  return (
    <div className="App">
      <div className='headshot-wrapper'>
      <img src={headshot} 
      alt=''
      className='headshot'
      />
      </div>
      <div className='Name'>
        Moyosoreoluwa Ayoade
      </div>
      <div className='socials'>
        <div className='social-wrapper'>
          <a href='https://github.com/moyo-ayy'>
            <img src={github} 
            alt=''
            />
          </a>
          <div>
            Github
          </div>
        </div>

        <div className='social-wrapper'>
          <a href='https://www.linkedin.com/in/moyosoreoluwa-ayoade/'>
            <img src={linkedin} 
            alt=''
            />
          </a>
          <div>
            LinkedIn
          </div>
        </div>

        <div className='social-wrapper'>
          <a href='mailto:adekunmi@usf.edu'>
            <img src={outlook} 
            alt=''
            />
          </a>
          <div>
            Outlook
          </div>
        </div>

        <div className='social-wrapper'>
          <a href='mailto:moyoayoade@gmail.com'>
            <img src={gmail} 
            alt=''
            />
          </a>
          <div>
            Gmail
          </div>
        </div>
      </div>

      <div className='resume-downloader'>     
      </div>

    </div>
  );
}

export default App;
