import { NavLink } from 'react-router-dom';

function Navbar(){
    return(    
    <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href=""><i className="fa-sharp fa-solid fa-pen-fancy"></i></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink to="/"><a className="nav-link">Home</a></NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/write"><a className="nav-link write-post" href="/write">Write Post</a></NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;