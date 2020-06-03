
function Contact() {
    return(
        <div className="container contact">
            <h4>Para una consulta gratis o mas Información</h4>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="row">
                    <div className="six columns">
                    <label htmlFor="name">Nombre</label>
                    <input className="u-full-width" type="text" name="name" placeholder="John Smith" id="name" />
                    </div>
                    <div className="six columns">
                    <label htmlFor="email">E-mail</label>
                    <input className="u-full-width" type="email" name="email" placeholder="me@mailbox.com" id="email" />

                    </div>
                </div>
                <label htmlFor="message">Mensaje</label>
                <textarea className="u-full-width" name="message" placeholder="Quisiera mas información acerca de..." id="message"></textarea>
                <input className="button" type="submit" value="Enviar" />
                </form>
                <style jsx>{`
                        @font-face {
                            font-family:'Montserrat';
                            src: url('/fonts/Montserrat-Medium.ttf');
                            }
                            label {
                                font-family: Montserrat;
                            }

                        `}
                </style>
        </div>
    )
}
export default Contact