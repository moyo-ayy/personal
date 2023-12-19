import './App.css';
import headshot from './assets/MicrosoftTeams-image.png';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import outlook from './assets/outlook.svg';
import gmail from './assets/gmail.svg';
import download from './assets/download.svg';
import resume from './assets/resume.pdf'
import doc from './assets/doc.svg'


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
        <div className='doc' onClick={()=>{
          var element1 = document.getElementById('window1')
          var element2 = document.getElementById('window2')
          var element3 = document.getElementById('window3')

          element2.style.display = 'none'
          element3.style.display = 'none'
          element1.style.display = 'block'
        }}>
          <img src={doc} style={{}} alt=''/>
          Projects
        </div>
        <div className='doc' onClick={()=>{
          var element1 = document.getElementById('window1')
          var element2 = document.getElementById('window2')
          var element3 = document.getElementById('window3')

          element3.style.display = 'none'
          element1.style.display = 'none'
          element2.style.display = 'block'
        }}>
          <img src={doc} style={{}} alt=''/>
          Experience
        </div>
        <div className='doc' onClick={()=>{
          var element1 = document.getElementById('window1')
          var element2 = document.getElementById('window2')
          var element3 = document.getElementById('window3')

          element2.style.display = 'none'
          element1.style.display = 'none'
          element3.style.display = 'block'
        }}>
          <img src={doc} style={{}} alt=''/>
          Activities
        </div>
      </div>

      <div className='description' id='window1'>
        <div className='top'>
          <div className='circle' style={{backgroundColor: "red"}}></div>
          <div className='circle' style={{backgroundColor: "yellow"}}></div>
          <div className='circle' style={{backgroundColor: "green"}}></div>
        </div>
        <div className='bottom'>
          <h2>AI Nomad Navigator</h2>
          <ul>
            <li>Engineered an AI-powered road trip planner using the OpenAI API, Google Places API, React.js, and Node.js at the Shell hacks Hackathon with 3 other people.</li>
            <li>Managed the GitHub repo and API services while also enhancing the front end, resulting in a 20% reduction in page load times.</li>
          </ul>
          <p><a href="https://github.com/moyo-ayy/trip-planner">GitHub Repo</a></p>

          <h2>Vinyl-Verse</h2>
          <ul>
            <li>Fabricated the front end for the music review website using React.js and relevant libraries.</li>
            <li>Developed the REST API serving 800+ requests a month allowing users to view music data, comment on albums, and like comments they agree with.</li>
            <li>Implemented Firebase authentication to provide the full-stack application with a login feature.</li>
            <li>Promoted user engagement by 25% by only listing relevant monthly releases.</li>
          </ul>
          <p><a href="https://vinylverse.netlify.app/">Vinyl-Verse Website</a></p>

          <h2>RSVP Discord Bot</h2>
          <ul>
            <li>Constructed a Discord bot that creates an event or meeting for a specific time and allows users to RSVP for the event.</li>
            <li>Increased player engagement by 50% in servers where the discord bot was utilized.</li>
          </ul>
          <p><a href="https://github.com/moyo-ayy/discord-rsvp-bot">GitHub Repo</a></p>
        </div>
      </div>

      <div className='description' id='window2'>
        <div className='top'>
          <div className='circle' style={{backgroundColor: "red"}}></div>
          <div className='circle' style={{backgroundColor: "yellow"}}></div>
          <div className='circle' style={{backgroundColor: "green"}}></div>
        </div>
        <div className='bottom'>
        <h2>USF RecWell, Tampa, FL</h2>
          <p><strong>Esports Program Supervisor | 8/22-Present</strong></p>
          <ul>
            <li>Maintained the USF RecWell Esports lab, ensuring a conducive environment for 15+ esports clubs and teams.</li>
            <li>Resolved player conflicts in a diplomatic and timely manner, increasing player satisfaction by 20% as measured by post-participation surveys.</li>
            <li>Involvement in USF Esports marketing and content production.</li>
          </ul>
        </div>
      </div>

      <div className='description' id='window3'>
        <div className='top'>
          <div className='circle' style={{backgroundColor: "red"}}></div>
          <div className='circle' style={{backgroundColor: "yellow"}}></div>
          <div className='circle' style={{backgroundColor: "green"}}></div>
        </div>
        <div className='bottom'>
          <h2>Google Developer Student Club at USF</h2>
          <p><strong>Member | March 2022 – Present</strong></p>

          <h2>USF Honors College Orientation</h2>
          <p><strong>Orientation Leader | May 2022 – August 2022</strong></p>

          <h2>National Society of Black Engineers</h2>
          <p><strong>Member | September 2021 – Present</strong></p>
        </div>
      </div>

    </div>
  );
}

export default App;
