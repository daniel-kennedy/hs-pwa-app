import ReactDOM from 'react-dom';
import React from 'react';
//import logo from 'new-county-logo.png';
import './App.css';
import Navbar from './components/Navbar';
// Font Awesome -- Start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from "@fortawesome/free-solid-svg-icons"; // Transportation needs
import { faWheatAwnCircleExclamation as faFood } from '@fortawesome/free-solid-svg-icons'; // Food insecurity      
import { faHouse } from '@fortawesome/free-solid-svg-icons';      // Housing insecurity
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// Font Awesome -- End

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* First row of icons */}
        <div class="container mt-4">
          <h1 className="display-3" style={{ color: "bisque" }}>
            The Help Center
          </h1>
          <hr style={{ color: "bisque" }} />
          <div id="iconContainer" className="row text-center">
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=transportation&postal=15301&language=en">
                <FontAwesomeIcon icon={faBus} style={{ height: "5rem" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Transportation</p>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=food&postal=15301&language=en">
                <FontAwesomeIcon icon={faFood} style={{ height: "5rem" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Food</p>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=housing&postal=15301&language=en">
                <FontAwesomeIcon icon={faHouse} style={{ height: "5rem" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Housing</p>
              </a>
            </div>
          </div>
          {/* Second row of icons */}
          <div id="iconContainer" className="row text-center">

            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=childcare&postal=15301&language=en">
                <FontAwesomeIcon icon={faChild} style={{ height: "5rem" }} />

                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Childcare</p>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=healthcare&postal=15301&language=en">
                <FontAwesomeIcon icon={faUserDoctor} style={{ height: "5rem" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>All Health</p>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=addiction&postal=15301&language=en">
                <FontAwesomeIcon icon={faRibbon} style={{ height: "5rem" }} className="text-info" />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Addiction</p>
              </a>
            </div>
          </div>
          {/* Third row of icons */}
          <div id="iconContainer" className="row text-center">
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=employment&postal=15301&language=en">
                <FontAwesomeIcon icon={faBriefcase} style={{ height: "5rem" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Employment</p>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=domestic%20violence&postal=15301&language=en">
                <FontAwesomeIcon icon={faRibbon} style={{ height: "5rem", color: "purple", opacity: "0.6" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Domestic Violence</p>
              </a>

            </div>
            <div className="col-sm-3">
              <a href="https://washingtonpa.findhelp.com/search/text?term=social%20connections&postal=15301&language=en">
                <FontAwesomeIcon icon={faPeopleGroup} style={{ height: "5rem" }} />
                <p style={{ color: "bisque", fontSize: "1.2rem" }}>Social Connections</p>
              </a>
            </div>
          </div>
          <h4 className="display-4 mt-4 pb-4" style={{ color: "bisque" }}>
            <a href="tel:7242281234" style={{ textDecoration: "none", color: "bisque" }}>
              <FontAwesomeIcon icon={faPhone} style={{ color: "var(--bs-danger)" }} /> Call 724-228-1234
            </a>
          </h4>
          <div id="googleMap" className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.3602082530037!2d-80.2496316555725!3d40.170778200000036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8835ad58ec3a3401%3A0xcb74db78e33b0ce2!2sWashington%20County%20Human%20Services%3A%20Clinical%20Intake%20Unit!5e0!3m2!1sen!2sus!4v1689962302448!5m2!1sen!2sus" width="90%" height="450" style={{ border: 0 }} allowFullscreen="false" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
