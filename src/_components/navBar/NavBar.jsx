import React from 'react';
import { Link, NavLink } from 'react-router-dom'


class NavBar extends React.Component {

    componentDidMount() {        
       
    }

    render() {

        return (
            
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/">
                Cotizaciones de monedas
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Cerrar sesión
                    </NavLink>
                </ul>
            </div>
        </nav>
        </div>    

        )
    }
}

export default NavBar