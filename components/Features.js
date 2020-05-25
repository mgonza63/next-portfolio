function Features() {
    return (
        <div className="container wrapper">
            <div className="row">
                <div className="four columns">
                    <div className="card">
                        <img src="/logo.png" alt="logo"></img>
                            <div className="content">
                                <p>Arranca tu presencia online con el Paquete de Redes Sociales</p>
                            </div>
                    </div>
                </div>
                <div className="four columns">
                    <div className="card">
                        <img src="/logo.png" alt="logo"></img>
                            <div className="content">
                                <p>Arranca tu presencia online con el Paquete de Redes Sociales</p>
                            </div>
                    </div>
                </div>
                <div className="four columns">
                    <div className="card">
                        <img src="/logo.png" alt="logo"></img>
                            <div className="content">
                                <p>Arranca tu presencia online con el Paquete de Redes Sociales</p>
                            </div>
                    </div>
                </div>


            </div>

            <style jsx>{`

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
                    padding: 10px

        /* Layout each column */
                }
                .content {
                    flex: 1;
                }
                img {
                    width: 50px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-bottom: 10px;

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