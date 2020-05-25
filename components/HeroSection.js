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


            <style jsx>{`


                main {
                    height: 80vh;
                    width: 100vw;
                    background: #3e3e3e ;
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
                }
                

            `}
            </style>

        </main>
        
    )
  }
  
  export default Hero