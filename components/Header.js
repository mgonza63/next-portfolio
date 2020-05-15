function Header() {
    return (
        <header className="u-full-width">
            <h5>Gosify Media</h5>   
            <ul>
                <li>
                    <h6>Contacto</h6>
                </li>
                <li>
                    <h6>Paquetes</h6>
                </li>
                <li>
                    
                    <h6>About</h6>
                </li>
            </ul>
     <style jsx>{`

        h5 {
            color: rgb(230, 233, 245);
            font-weight: lighter;
            font-size: 20px;

        }
        h6 {
            color: rgb(230, 233, 245);
        }
        li {
            list-style:  none;
            padding-right: 50px;
            display: inline-block;
            float: right;
            position: relative;
            top: -5.2vh;
        }
        .barPhone {
            display: none;
        }
        @media only screen and (max-width: 600px) {
            h5 {
                text-align: center;
            }
            ul {
                display: table;
                margin: 0 auto;
            }
            li {
                top: 1vh;
                left: 6.5vw;

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