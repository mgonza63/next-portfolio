import { useState } from 'react';


function Features() {
    // const packages 
    const [state, setState] = useState({
            title: 'Redes Sociales',
            description: 'Creamos perfiles de tu empresa en las redes sociales más populares y te creamos contenido de acuerdo a ti y a tu mercado para darle la identidad necesaria y sacarle ventaja a la competencia.'
    });


    return (
        <div className="container wrapper">
            <div className="row">
                <div className="four columns">
                    <div className="card" onClick={() => setState({ ...state, title: 'Redes Sociales', description: 'Arranca tu presencia en linea y sacale ventaja a la competencia con contenido de calidad creado por nosotros de acuerdo a lo que buscas.'})}>
                            <img src="/logo.png" alt="logo"></img>
                            <div className="content">
                                <p>Arranca tu presencia online con el Paquete de Redes Sociales</p>
                            </div>
                    </div>
                </div>
                <div className="four columns" onClick={() => setState({ ...state, title: "Community Manager", description: "Creamos campañas publicitarias para hacerte llegar al cliente ideal y lograr expandir tus ventas, interactuamos con los seguidores y desarrollamos contenido digital de calidad para que tus redes estén activas y no pierdan presencia en el mercado." })}>
                    <div className="card">
                        <img src="/logo.png" alt="logo"></img>
                            <div className="content">
                                <p>Eleva tu identidad en linea con el paquete de Community Manager</p>
                            </div>
                    </div>
                </div>
                <div className="four columns">
                    <div className="card" onClick={() => setState({ ...state, title: "Página Web", description: "Desarrollamos tu página web desde cero de acuerdo a ttus gustos y necesidades que te ayudarán a mantenerte a la vista y en contacto de tus clientes y seguidores. Nuestro compromiso es entregarte una página profesional y dinámica." })}>
                        <img src="/logo.png" alt="logo"></img>
                            <div className="content">
                                <p>Arranca tu presencia online con el Paquete de Redes Sociales</p>
                            </div>
                    </div>
                </div>
            <div className="row">
                <div className="twelve columns">
                    <h3 className="cardTitle">{state.title}</h3>
                    <p className="description">{state.description}</p>
                </div>
            </div>


            </div>

            <style jsx>{`
                @font-face {
                    font-family:'Montserrat';
                    src: url('/fonts/Montserrat-Medium.ttf');
                    font-weight: bold;
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
                .cardTitle, .description {
                    padding-left: 15px;
                }
                .description {
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