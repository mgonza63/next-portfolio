function AboutSection() {
    return(
        <main className="container">
            {/* <h1>Nosotros</h1> */}
            <div className="row">
                <div className="four columns">
                    <img src="/logo.png"></img>
                </div>
                <div className="eight columns">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
            <div className="row reversed">
                
            <div className="eight columns">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            <div className="four columns">
                <img src="/logo.png"></img>
            </div>
            </div>
    <style jsx>{`
            img {
                width: 220px;
            }
            .row {
                padding-top: 100px;
                padding-bottom: 100px;
            }
    
    `}</style>
        </main>
    )
}
export default AboutSection