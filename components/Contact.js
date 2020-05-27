function Contact() {
    return(
        <div className="container contact">
            <h4>Para una consulta gratis o mas Información</h4>
            <form name="contact" method="POST" data-netlify="true">
                <div class="row">
                    <div class="six columns">
                    <label for="name">Nombre</label>
                    <input class="u-full-width" type="text" name="name" placeholder="John Smith" id="name" />
                    </div>
                    <div class="six columns">
                    <label for="email">E-mail</label>
                    <input class="u-full-width" type="email" name="email" placeholder="me@mailbox.com" id="email" />

                    </div>
                </div>
                <label for="message">Message</label>
                <textarea class="u-full-width" name="message" placeholder="Quisiera mas información acerca de..." id="message"></textarea>
                <input class="button-primary" type="submit" value="Submit" />
                </form>
        </div>
    )
}
export default Contact