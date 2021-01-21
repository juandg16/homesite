import banking from "./images/banking.jpg"
import profile from "./images/profile.jpg"
import './Main.css';

function Main() {
  return (    
    <main>
      <div id="work" class="section grid-items">
          <h2 class="grid-section-header">
              Work
          </h2>
          <a class="grid-item slalom" href="https://www.slalombuild.com/">
              <h1 class="grid-item-header">
                  Slalom
              </h1>
              <div class="case-item-content">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" class="case-item-icon icon-slalom">
                      <path id="slalom-path-0" d="M200.000 179.995 L 200.000 253.200 210.004 253.200 C 219.363 253.200,220.125 253.145,221.813 252.352 C 225.037 250.836,227.600 247.073,227.600 243.854 C 227.600 242.309,228.152 242.536,230.748 245.148 C 235.584 250.014,241.827 253.363,249.600 255.262 C 252.576 255.989,266.246 255.998,269.000 255.275 C 270.100 254.986,271.720 254.560,272.600 254.327 C 321.221 241.500,322.704 162.408,274.600 147.711 C 271.936 146.897,270.457 146.574,265.033 145.617 C 253.208 143.532,238.633 148.150,230.400 156.589 L 228.600 158.434 228.400 132.717 L 228.200 107.000 214.100 106.895 L 200.000 106.790 200.000 179.995 M261.600 172.769 C 277.990 177.196,286.039 198.280,277.724 215.000 C 266.707 237.152,234.161 233.488,228.001 209.404 C 222.110 186.371,239.949 166.921,261.600 172.769 M80.500 280.264 C 79.749 280.568,79.791 292.529,80.546 293.155 C 80.947 293.488,96.716 293.580,140.446 293.504 L 199.800 293.400 199.800 286.800 L 199.800 280.200 140.400 280.131 C 107.730 280.093,80.775 280.153,80.500 280.264" stroke="none" fill="#1ce3f3" fill-rule="evenodd"></path>
                      <path id="slalom-path-1" d="M 18.00 20.00 L 18.00 200.000 18.00 380.00 200.000 380.00 380.000 380.00 380.00 200.000 380.00 20.00 200.000 20.00 10.00 20.00" stroke="#1ce3f3" stroke-width="16" fill="transparent"></path>
                  </svg>
              </div>
              <p class="grid-item-text">
                  As a consultant for Slalom, I develop custom solutions from the back end infrastructure to the front end UI
              </p>
          </a>
          <a class="grid-item jpmc" href="https://www.jpmorganchase.com/">
              <div class="grid-item-bg" style={{backgroundImage: `url(${banking})`}}></div>
              <h1 class="grid-item-header">
              J.P. Morgan
              </h1>
              <div class="grid-item-divider"></div>
              <p class="grid-item-text">
                  I worked with a team to create applications that supported investment bankers
              </p>
          </a>
          <a class="grid-item grid-item-last sbisd" href="https://www.springbranchisd.com/">
              <h1 class="grid-item-header">
              Spring Branch ISD
              </h1>
              <div class="case-item-content">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370" class="case-item-icon icon-sbisd">
                      <path id="sbisd-path-0" d="" stroke="none" fill="#fff" fill-rule="evenodd"></path>
                      <path id="sbisd-path-1" d="" stroke="none" fill="#fff" fill-rule="evenodd"></path>
                      <path id="sbisd-path-2" d="" stroke="none" fill="#fff" fill-rule="evenodd"></path>
                      <path id="sbisd-path-3" d="" stroke="none" fill="#fff" fill-rule="evenodd"></path>
                  </svg>
              </div>
              <p class="grid-item-text">
                  At Spring Branch, I worked as a full stack developer directly with users to design, build, and publish mobile and web applications 
              </p>
          </a>
      </div>
      <div id="projects" class="section grid-items">
          <h2 class="grid-section-header">
              Projects
          </h2>
          <div class="grid-item ti">
              <h1 class="grid-item-header">
                  Coming soon...
              </h1>
              <div class="grid-item-divider"></div>
              <p class="grid-item-text">
                  This is the next thing I'm working on
              </p>
          </div>
      </div>
      <div id="bio" class="section grid-items">
          <h2 class="grid-section-header">
              Me
          </h2>
          <div class="grid-item contact-info">
              <h1 class="grid-item-header no-left email-header">
                  hello@
                  <br></br>
                  juandgutierrez.com
              </h1>
              <div class="grid-item-divider no-left"></div>
              <p class="grid-item-text no-left">
                  I'm passionate about designing and making things. 
                  <br></br>
                  <br></br>
                  Juan Gutierrez
                  <br></br>
                  Houston, Texas
              </p>
              <div class="contact-links">
                  <a href="https://github.com/juandg16" class="contact-link">
                      <span class="contact-icon">
                          <svg class="case-item-icon icon-github" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 60">
                              <path d="M31 0a30.7 30.7 0 0 0-9.8 59.9c1.55.3 2.116-.6 2.116-1.4s-.026-2.7-.042-5.3c-8.622 1.9-10.44-4.1-10.44-4.1-1.414-3.5-3.448-4.5-3.448-4.5-2.815-1.9.213-1.9.213-1.9a6.74 6.74 0 0 1 4.746 3.2c2.766 4.7 7.254 3.3 9.023 2.6a6.3 6.3 0 0 1 1.966-4.1c-6.88-.8-14.12-3.5-14.12-15.2a11.964 11.964 0 0 1 3.193-8.3 10.9 10.9 0 0 1 .3-8.1s2.6-.9 8.525 3.1a30.617 30.617 0 0 1 15.522 0c5.92-4 8.517-3.1 8.517-3.1a10.886 10.886 0 0 1 .308 8.1 11.946 11.946 0 0 1 3.186 8.3c0 11.8-7.248 14.4-14.155 15.1a7.52 7.52 0 0 1 2.1 5.7c0 4.1-.04 7.5-.04 8.5 0 .8.56 1.7 2.13 1.4A30.708 30.708 0 0 0 31 0"></path>
                          </svg>
                      </span>
                  </a>
                  <a href="https://www.linkedin.com/in/juan-gutierrez/" class="contact-link">
                      <span class="contact-icon">
                          <svg class="case-item-icon icon-linkedin" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                          </svg>
                      </span>
                  </a>
              </div>
          </div>
          <div class="grid-item profile-pic">
              <div class="grid-item-bg" style={{backgroundImage: `url(${profile})`}}></div>
          </div>
      </div>
    </main>
  );
}

export default Main;
