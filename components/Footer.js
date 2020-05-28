import Link from 'next/link'

function Footer() {
    return(
        <footer className="u-full-width">
            <div className="row">
                <div className="six columns">
                    <img src="/logo-white.png"></img>
                </div>
                <div className="six columns">
                    <h5>Redes Sociales</h5>
                    <a href="https://www.facebook.com/Gosify-Media-100182715040017" target="blank"><img className="icons" src="/facebook.svg"></img></a>
                    <a href="https://www.instagram.com/gosifymedia/" target="blank"><img className="icons" src="/instagram.svg"></img></a>
                    <div className="row small"><small><a href="mailto:gosifymedia@gmail.com">gosifymedia@gmail.com</a></small></div>
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
                .icons {
                    width: 30px;
                    padding: 0;
                    padding-right: 10px;
                    color: white;

                }
                h5 {
                    color: rgb(230, 233, 245);

                }
                i {
                    font-size: 24px;
                }
                a {
                    text-decoration: none;
                    color: rgb(230, 233, 245);
                }
            `}
            </style>
        </footer>
    )
}
export default Footer;