import './Title.scss';

function Title() {
  return (    
    <div className="header-section">
        <div className="strip strip-neutral"></div>
        <div className="white-strip" id="cover1" style={{zIndex: 5}}></div>
        <div className="strip strip-contrast"></div>
        <div className="white-strip" id="cover2" style={{zIndex: 4}}></div>
        <div className="strip strip-light"></div>
        <div className="white-strip" id="cover3" style={{zIndex: 3}}></div>
        <div className="strip strip-primary"></div>
        <div className="white-strip" id="cover4" style={{zIndex: 2}}></div>
        <div className="strip strip-dark"></div>
        <div className="white-strip" id="cover5" style={{zIndex: 1}}></div>
        <div className="skew-clip clip-black">
            <header className="header-black">
                <h1 className="header-title title-black">
                    Hello, I'm a full stack developer
                </h1>
            </header>
        </div>
        <div className="skew-clip noclip clip-black">
            <p className="header-button-container button-container-black">
                <button className="header-button button-black" id="header-button-black">
                    Juan Gutierrez
                </button>
            </p>
        </div>
        <div className="skew-clip clip-white">
            <header className="header-white">
                <h1 className="header-title title-white">
                    Hello, I'm a full-stack developer
                </h1>
            </header>
        </div>
        <div className="skew-clip noclip clip-white">
            <p className="header-button-container button-container-white">
                <button className="header-button button-white" id="header-button-white">
                    Juan Gutierrez
                </button>
            </p>
        </div>
    </div>
  );
}

export default Title;
