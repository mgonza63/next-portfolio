function Hero() {
    return (
        <article className="container">
            <h1 className="hero">Crea tu Comumidad Digital</h1>
            <h5 className="subhero">Desarolla tu presencia en linea con facilidad y efectividad</h5>
            
            <style jsx>{`
                .container {
                    height: 50vh;
                     
                }
                .hero {
                    position: relative;
                    top: 40%;
                    font-weight: bold;
                    color: rgb(230, 233, 245);
                }
                .subhero {
                    position: relative;
                    top: 42%;
                    color: rgb(166, 168, 172);
                    font-weight: lighter;
                    font-size: 20px;  
                }

            `}
            </style>

        </article>
        
    )
  }
  
  export default Hero