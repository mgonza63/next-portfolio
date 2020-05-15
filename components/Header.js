function Header() {
    return (
        <header className="u-full-width">
            
            <ul>
                <h6>Gosify Media</h6>
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

        h6 {
            color: rgb(230, 233, 245);
        }
        li {
            list-style:  none;
            padding-right: 50px;
            display: inline-block;
            float: right;
            position: relative;
            top: -5vh;
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