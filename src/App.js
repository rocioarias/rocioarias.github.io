import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import WindowsRetro from './logic/windows';
import ResumeMySelf from './logic/resumeMySelf';
import MusicReproduction from './logic/music';
import SocialMedia from './logic/socialMedia';

function Curriculum() {
  return (
    <div className='Cv'>
      <div className='Cv-header'>
        
        <div className='col-md-12'>
          
            <span>Welcome to my page</span>
          
        </div>
      </div>
      
      <div className='row'>
        <div className='col-md-6'>
            <article>
              <div className='row'>
                  <div className='col-sm'>
                    <MusicReproduction />
                  </div>
                  <div className='col-sm'>
                    <SocialMedia />
                  </div>
              </div> 
            </article>
        </div>


        <div className='col-md-6'>
          <ResumeMySelf/>
        </div>

      </div>

      
      
          
          <WindowsRetro />

    </div>
  );
}

export default Curriculum;
