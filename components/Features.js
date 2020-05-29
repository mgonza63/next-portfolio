import { useState } from 'react';
import Link from 'next/link'


function Features() {
    // const packages 
    const [state, setState] = useState({
            title: 'Redes Sociales',
            description: 'Creamos perfiles de tu empresa en las redes sociales más populares y te diseñamos contenido de acuerdo a ti y a tu mercado para darle la identidad necesaria y sacarle ventaja a la competencia.'
    });


    return (
        <div className="container wrapper">
            <div className="row">
                <div className="four columns">
                    <div className="card" onClick={() => setState({ ...state, title: 'Redes Sociales', description: 'Creamos perfiles de tu empresa en las redes sociales más populares y te diseñamos contenido de acuerdo a ti y a tu mercado para darle la identidad necesaria y sacarle ventaja a la competencia.'})}>
                            <img src="/rocket-icon.svg" alt="rocket icon"></img>
                            <div className="content">
                                <p>Arranca tu presencia en linea con uno de los <u>Paquetes de Redes Sociales</u>. <img src="/arrow-down.svg" id="arrow" alt="arrow down"></img></p>
                            </div>
                    </div>
                </div>
                <div className="four columns" onClick={() => setState({ ...state, title: "Community Manager", description: "Creamos campañas publicitarias para hacerte llegar al cliente ideal y lograr expandir tus ventas, interactuamos con los seguidores y desarrollamos contenido digital de calidad para que tus redes estén activas y no pierdan presencia en el mercado." })}>
                    <div className="card middle">
                        <img src="/manager.svg" alt="group icon"></img>
                            <div className="content">
                                <p>Eleva la identidad en linea de tu empresa con el <u>Paquete de Community Manager</u>.<img src="/arrow-down.svg" id="arrow" alt="arrow down"></img></p>
                            </div>
                    </div>
                </div>
                <div className="four columns">
                    <div className="card" onClick={() => setState({ ...state, title: "Página Web", description: "Desarrollamos tu página web con lenguajes de programación de acuerdo a tus gustos y necesidades que te ayudarán a mantenerte a la vista y en contacto de tus clientes y seguidores. Nuestro compromiso es entregarte una página profesional y dinámica." })}>
                        <img src="/web.svg" alt="website icon"></img>
                            <div className="content">
                                <p>Dale un toque profesional a tu compañia con un <u>Sitio Web</u>.<img src="/arrow-down.svg" id="arrow" alt="arrow down"></img></p>
                            </div>
                    </div>
                </div>
            <div className="row">
                <div className="twelve columns">
                    <h3 className="cardTitle">{state.title}</h3>
                    <p className="description">{state.description}</p>
                    {/* <Link href="/paquetes"><button><a>Visita Nuestros Paquetes ➡</a></button></Link> */}
                </div>
            </div>


            </div>

            <style jsx>{`
                @font-face {
                    font-family:'Montserrat';
                    src: url('/fonts/Montserrat-Medium.ttf');
                }
                .wrapper {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    background-color: white;

                    box-shadow: 0 10px 30px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0);
                    border-radius: 3px;
                    bottom: 10vh;
                }
                .card {
                    flex: 1;
        /* Space between columns */
                    margin: 0 8px;
                    padding: 10px;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-property: transform;
                    transition-property: transform;
                    cursor: pointer;

        /* Layout each column */
                }
                .middle {
                    /* border-right: 1px solid black;
                    border-left: 1px solid black; */
                }
                .content {
                    flex: 1;
                    font-family: Montserrat;
                    
                }
                img {
                    width: 50px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-bottom: 10px;
                    padding-top: 10px;
                    cursor: pointer;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-property: transform;
                    transition-property: transform;

                }

                #arrow {
                    width: 15px;
                }
                .cardTitle, .description {
                    padding-left: 15px;
                }
                .description {
                    font-family: Montserrat;
                }
                button {
                    position: relative;
                    left: 20vw;
                    font-family: Montserrat;
                }
                .card:hover img{
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }

                @media only screen and (max-width: 600px) {
                    .wrapper {
                        display: block;
                        
                    }
                }

            `}
            </style>
           
        </div>
    )
}

export default Features;