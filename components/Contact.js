function Contact() {
    return(
        <div className="container contact">
            <h4>Para una consulta gratis o mas Información</h4>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div class="row">
                    <div className="six columns">
                    <label for="name">Nombre</label>
                    <input className="u-full-width" type="text" name="name" placeholder="John Smith" id="name" />
                    </div>
                    <div className="six columns">
                    <label for="email">E-mail</label>
                    <input className="u-full-width" type="email" name="email" placeholder="me@mailbox.com" id="email" />

                    </div>
                </div>
                <label for="message">Mensaje</label>
                <textarea className="u-full-width" name="message" placeholder="Quisiera mas información acerca de..." id="message"></textarea>
                <input className="button-primary" type="submit" value="Submit" />
                </form>
        </div>
    )
}
export default Contact