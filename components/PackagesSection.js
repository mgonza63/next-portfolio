function PackageSection() {
    return (
        <main className="container">
            <h4>Redes Sociales</h4>
                <div className="row">              
                    <div className="four columns">
                        <h5 className="title t1">Básico <span>$500</span></h5>
                        <ul>
                            <li>
                                2 Plataformas digitales.
                            </li>
                            <li>
                                Diseño Personalizado.
                            </li>
                            <li>
                                3 Post en cada Plataforma.
                            </li>
                        </ul>
                    </div>
                    <div className="four columns">
                    <h5 className="title t2">Mediano <span>$900</span></h5>
                        <ul>
                            <li>
                                2 Plataformas digitales.
                            </li>
                            <li>
                                Diseño Personalizado.
                            </li>
                            <li>
                                6 Post en cada Plataforma.
                            </li>
                        </ul>
                    </div>
                    <div className="four columns">
                    <h5 className="title t3">Avanzado <span>$1,100</span></h5>
                        <ul>
                            <li>
                                2 Plataformas digitales.
                            </li>
                            <li>
                                Diseño Personalizado.
                            </li>
                            <li>
                                9 Post en cada Plataforma.
                            </li>
                        </ul>
                    </div>
                </div>

                <h4>Community Manager <small>( pago mensual )</small></h4>
                    <div className="row">              
                        <div className="four columns">
                            <h5 className="title t1">Básico <span>$3,099</span></h5>
                            
                            <ul>
                                <li>
                                    9 publicaciones al mes.
                                </li>
                                <li>
                                    Interacción con usuarios.
                                </li>
                                <li>
                                    Asesoría para estrategias digitales.
                                </li>
                                <li>
                                    Informe Trimestral.
                                </li>
                            </ul>
                        </div>
                        <div className="four columns">
                        <h5 className="title t2">Mediano <span>$4,899</span></h5>
                            <ul>
                                <li>
                                    15 publicaciones al mes.
                                </li>
                                <li>
                                    Interacción con usuarios.
                                </li>
                                <li>
                                    Asesoría para estrategias digitales.
                                </li>
                                <li>
                                    Informe Trimestral.
                                </li>
                                <li>
                                    Facebook Ads.
                                </li>
                                <li>
                                    1 Post en un grupo especializado.
                                </li>
                                
                            </ul>
                        </div>
                        <div className="four columns">
                        <h5 className="title t3">Avanzado <span>$5,499</span></h5>
                            <ul>
                                <li>
                                    18 publicaciones al mes.
                                </li>
                                <li>
                                    Interacción con usuarios.
                                </li>
                                <li>
                                    Asesoría para estrategias digitales.
                                </li>
                                <li>
                                    Informe Trimestral.
                                </li>
                                <li>
                                    Facebook Ads.
                                </li>
                                <li>
                                    1 Post en un grupo especializado.
                                </li>
                                <li>
                                    Sesión de fotos
                                </li>
                                <li>
                                    E-commerce (opcional)
                                </li>
                                <li>
                                    Google Maps
                                </li>
                            </ul>
                        </div>
                    </div>
                <h4>Sitio Web <small>( +mantenimiento mensual y dominio )</small></h4>
                    <div className="row">              
                        <div className="four columns">
                            <h5 className="title t1">Básico <span>$3,799</span></h5>
                            <ul>
                                <li>
                                    Diseño de Web Personalizado.
                                </li>
                                <li>
                                    Web Móvil.
                                </li>
                                <li>
                                    Web tablet.
                                </li>
                                <li>
                                    Dominio y Hosting Web.
                                </li>
                                <li>
                                    Galería.
                                </li>
                            </ul>
                        </div>
                        <div className="four columns">
                        <h5 className="title t2">Mediano <span>$5,499</span></h5>
                            <ul>
                                <li>
                                    Diseño de Web Personalizado.
                                </li>
                                <li>
                                    Web Móvil.
                                </li>
                                <li>
                                    Web tablet.
                                </li>
                                <li>
                                    Dominio y Hosting Web.
                                </li>
                                <li>
                                    Galería.
                                </li>
                                <li>
                                    Forma de Contacto
                                </li>
                                <li>
                                    SEO.
                                </li>
                                <li>
                                    SEM.
                                </li>
                            </ul>
                        </div>
                        <div className="four columns">
                        <h5 className="title t3">Avanzado <span>$6,499</span></h5>
                            <ul>
                                <li>
                                    Diseño de Web Personalizado.
                                </li>
                                <li>
                                    Web Móvil.
                                </li>
                                <li>
                                    Web tablet.
                                </li>
                                <li>
                                    Dominio y Hosting Web.
                                </li>
                                <li>
                                    Galería.
                                </li>
                                <li>
                                    Forma de Contacto
                                </li>
                                <li>
                                    SEO.
                                </li>
                                <li>
                                    SEM.
                                </li>
                                <li>
                                    Tienda Online.
                                </li>
                            </ul>
                        </div>
                    </div>


                <style jsx>{`
                    @font-face {
                    font-family:'Montserrat';
                    src: url('/fonts/Montserrat-Medium.ttf');
                    }
                    .columns {
                        box-shadow: 0 10px 30px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0);

                        /* border: 1px solid #3e3e3e */
                        
                    }
                    h4 {
                        padding-top: 10px;
                    }
                    .title {
                        text-align: center;
                        color: white;
                        padding: 10px;
                    }
                    .t1 {
                        background-color: #2d4059;
                    }
                    .t2 {
                        background-color: #f07b3f;
                    }
                    .t3 {
                        background-color: #ea5455;

                    }
                    .row {
                        margin-bottom: 50px;
                    }

                    ul {
                        text-align: center;
                    }
                    li {
                        list-style-type: none;
                        font-family: Montserrat;
                        border-bottom: 1px solid #f6f6f6;
                    }
                    span {
                        color: lightgray;
                    }
                    small {
                        color: gray;
                    }

                `}</style>
        </main>
    )
}

export default PackageSection