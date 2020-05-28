function AboutSection() {
    return(
        <main className="container">
            <h1>Nosotros</h1>
            <div className="row">
                <div className="four columns">
                    <img id="first-img" src="/nosotros-img1.jpg" alt="shopping online"></img>
                </div>
                <div className="eight columns" id="p-one">
                <p>Somos una agencia de marketing digital que desarrolla estrategias y campañas publicitarias para negocias que buscan
                    competir en el mercado a travez del internet y asi colocar tu producto o servicio a la vista de tus clientes.
                </p>
                </div>
            </div>
            <div className="row reversed">
                
            <div className="eight columns p-two" id="p-one">
                <p>Nuestro equipo se compromete a darte una presencia en el mercado digital con un diseño
                    elegante y dinámico a la vez, utilizando herramientas de vanguardia junto con la experencia 
                    de cada uno de nuestros integrantes elevaremos su negocio diferenciándolo de su competencia.
                </p>
                </div>
            <div className="four columns">
                <img src="/nosotros-img2.jpg" id="second-img" ></img>
            </div>
            </div>
    <style jsx>{`
            img {
                width: 220px;
                opacity: 0.7;

            }
            p {
                font-size: 20px;
                padding: 10px;

            }
            #first-img {
                width: 300px;
                position: relative;
                z-index: -1;

            }
            #second-img {
                width: 300px;
                position: relative;
                z-index: -1;
                right: 70px;
            }
            .row {
                padding-top: 50px;
                padding-bottom: 50px;
            }
            #p-one {
                background-color: white;
                box-shadow: 0 10px 30px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0);
                position: relative;
                top: 50px;

                z-index: 1;
            }
            .p-two {
                margin-bottom: 50px;
            }
    
    `}</style>
        </main>
    )
}
export default AboutSection