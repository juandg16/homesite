import './Title.css';

function Title() {
  return (    
    <div class="header-section">
        <div class="strip strip-neutral"></div>
        <div class="white-strip" id="cover1" style={{zIndex: 5}}></div>
        <div class="strip strip-contrast"></div>
        <div class="white-strip" id="cover2" style={{zIndex: 4}}></div>
        <div class="strip strip-light"></div>
        <div class="white-strip" id="cover3" style={{zIndex: 3}}></div>
        <div class="strip strip-primary"></div>
        <div class="white-strip" id="cover4" style={{zIndex: 2}}></div>
        <div class="strip strip-dark"></div>
        <div class="white-strip" id="cover5" style={{zIndex: 1}}></div>
        <div class="skew-clip clip-black">
            <header class="header-black">
                <h1 class="header-title title-black">
                    Hello, I'm a full stack developer
                </h1>
            </header>
        </div>
        <div class="skew-clip noclip clip-black">
            <p class="header-button-container button-container-black">
                <button class="header-button button-black" id="header-button-black">
                    Juan Gutierrez
                </button>
            </p>
        </div>
        <div class="skew-clip clip-white">
            <header class="header-white">
                <h1 class="header-title title-white">
                    Hello, I'm a full-stack developer
                </h1>
            </header>
        </div>
        <div class="skew-clip noclip clip-white">
            <p class="header-button-container button-container-white">
                <button class="header-button button-white" id="header-button-white">
                    Juan Gutierrez
                </button>
            </p>
        </div>
    </div>
  );
}

export default Title;
