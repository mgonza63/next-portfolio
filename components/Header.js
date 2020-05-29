import Link from 'next/link'


function Header() {
    return (
        <header className="u-full-width">
            {/* <img src="/logo.png" /> */}
            <Link href="/"><a><h5>Gosify Media</h5></a></Link>

            <nav className="navbar">

                <ul className="navbar-nav">
                    <a href="mailto:gosifymedia@gmail.com"><li className="nav-item">
                        Contacto
                    </li></a>
                    <a><Link href="/paquetes"><li className="nav-item">
                        Paquetes
                    </li></Link></a>
                    <Link href="/nosotros"><a><li className="nav-item">
                        Nosotros
                    </li></a></Link>
                </ul>
            </nav>
     <style jsx>{`
        header {
            background: linear-gradient(270deg, #1f2020, #2e2f30, #202324);
            box-shadow: 0 10px 10px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0);


        }
        a {
            text-decoration: none;
        }
        img {
            width: 50px;
        }
        h5 {
            color: rgb(230, 233, 245);
            font-weight: lighter;
            font-size: 25px;

        }
        h6 {
            color: rgb(230, 233, 245);
        }
        .nav-item {
            color: rgb(230, 233, 245);
        }
        li {
            list-style:  none;
            padding-right: 50px;
            display: inline-block;
            float: right;
            position: relative;
            top: -5.5vh;
        }
        .barPhone {
            display: none;
        }
        @media only screen and (max-width: 600px) {
            h5 {
                text-align: center;
            }
            ul {
                /* display: table; */
                margin: 0 auto;
            } 
            li {
                top: 1vh;
                left: 5vw;

            } 

            .navbar-nav {
                display: flex;
                width:100%;
                align-items: center;
                justify-content: space-evenly;

            }

        }
    `}
    </style>
        </header>
        
    )
  }

//   <h6>About</h6>
//   <h6>Paquetes</h6>
//   <h6>Contacto</h6>
  
  export default Header