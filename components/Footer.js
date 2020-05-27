function Footer() {
    return(
        <footer className="u-full-width">
            <div className="row">
                <div className="six columns">
                    <img src="/logo-white.png"></img>
                </div>
                <div className="six columns">
                    <h5>Redes Sociales</h5>
                    <i href="https://www.instagram.com/gosifymedia/" class="ri-instagram-line"></i>
                </div>
            </div>
            <style jsx>{`
                footer {
                    background-color: #3e3e3e;
                }
                img {
                    width: 100px;
                    padding: 20px;
                }
                h5 {
                    color: rgb(230, 233, 245);

                }
                i {
                    font-size: 24px;
                }
            `}
            </style>
        </footer>
    )
}
export default Footer;