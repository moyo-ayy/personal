import './App.css';
import headshot from './assets/MicrosoftTeams-image.png';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import outlook from './assets/outlook.svg';
import gmail from './assets/gmail.svg';
import download from './assets/download.svg';
import resume from './assets/resume.pdf'
import folder from './assets/folder.png'


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
        <a href={resume} download="resume.pdf" type="application/pdf">
          <button className='btn'> Resume <img src={download} alt=''/></button>
        </a>
      </div>

      <div className='description'>
        <div className='top'>
          <div className='circle' style={{backgroundColor: "red"}}></div>
          <div className='circle' style={{backgroundColor: "yellow"}}></div>
          <div className='circle' style={{backgroundColor: "green"}}></div>
        </div>
        <div className='bottom'>
          Hello, My name is
          <span style={{color: "#ADD8E6"}}> Moyosoreoluwa Ayoade </span>
          and I attend the
          <span style={{color: "#98FB98"}}> University of South Florida </span>
          expected to graduate in
          <span style={{color: "#98FB98"}}> May 2025; </span>
          <br/><br/>
          set GPA = 4.0;
          <br/><br/>
          Relevant Courses = [<br/>
          <span style={{color: "#FFC0CB"}}> &nbsp;Computer Logic and Design, Data Structures,<br/>
          &nbsp;Program Design, Database Design, Computer Architecture, <br/>
          &nbsp;Software Testing </span>
          <br/>]
          <br/><br/>
          I am proficient in = [<br/>
          <span style={{color: "#FFFF00"}}> &nbsp;Python, HTML/CSS, JavaScript, C/C++, SQL </span>
          <br/>]
          <br/><br/>
          I am also versed in technologies such as = [<br/>
          <span style={{color: "#D8BFD8"}}> &nbsp;React.js, Node.js, Express, MongoDB, Firebase, REST, Bootstrap, <br/>
          &nbsp;Git, Linux </span>
          <br/>] <br/><br/>
          Scroll Down to View my Projects
          <div className='blinker'></div>
        </div>
      </div>

      <div className='projects'>
        <div className='folder' onClick={()=>{
          alert("yes")
        }}>
          <img src={folder} style={{}}/>
          Projects
        </div>
      </div>

    </div>
  );
}

export default App;
