function Hero() {
    return (
        <main className="container-fluid">
            <div className="container">
                <h1 className="hero">Crea tu Comumidad Digital</h1>
                <h5 className="subhero">Desarolla tu presencia en linea con facilidad y efectividad</h5>
                <button className="action"><p>Consulta gratuita</p></button>
            </div>
            {/* <img className="u-max-width chat" alt="chat" src="/mobile-iso.png"></img> */}

            {/* F6E7C1 - D6C7A1 - FFA25B - F4722B - 3e3e3e  */}

            <img src="/logo-white.png"></img>
            <style jsx>{`


                main {
                    height: 80vh;
                    width: 100vw;
                    /* background: #3e3e3e ; */
                    background: linear-gradient(270deg, #1f2020, #2e2f30, #202324);


                }
            .container-fluid {
                left: 500px;
            }
                .hero {
                    position: relative;
                    top: 20vh;
                    font-weight: bold;
                    color: rgb(230, 233, 245);
                    z-index: 1000;
                }
                .subhero {
                    position: relative;
                    top: 18vh;
                    /* color: #D6C7A1; */
                    color: rgb(166, 168, 172);
                    font-weight: lighter;
                    font-size: 20px;  
                }
                button {
                    position: relative;
                    top: 18vh;
                    background-color: #F4722B;
                    border: none;
                    
                }
                button p {
                    color: #201f1f;
                }
                p {
                    color: #3e3e3e;
                }
                .chat {
                    position: relative;
                    max-width: 500px;
                    right: 10%;
                    top: 30vw;
                }
                img {
                    opacity: 0.1;
                    position: absolute;
                    /* width: 438px; */
                    width: 60%;
                    left: 40%;
                    top: 50%;
                }
                @media only screen and (max-width: 600px) {
                    .hero  {
                        top: 20vh;
                    }
                    .subhero {
                        top: 18vh;
                    }
                    button {
                        position: relative;
                        top: 18vh;
                    }
                    img {
                        left: 35%;
                        top: 50vh;
                    }
                }
                @media only screen and (min-width: 900px) {
                    img {
                        max-width: 600px;
                        top: 30%;
                    }
                    
                }
                @media only screen and (min-width: 1200px) {
                    img {
                        max-width: 600px;
                        top: 30%;
                        left: 
                    }
                }

            `}
            </style>
                
        </main>
        
    )
  }
  
  export default Hero