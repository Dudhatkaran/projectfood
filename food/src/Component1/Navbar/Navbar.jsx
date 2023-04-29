/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className={ style.navbar }>
                <Link to={ "/" }><a className={ style.active } href="#"><i class="fa fa-fw fa-home"></i> Home</a></Link>
                <Link to={ "/about" }><a href="#"><i class="fa fa-fw fa-search"></i> About us</a></Link>
                <Link to={ "/add-blog" }><a href="#"><i class="fa fa-fw fa-user"></i> blog</a></Link>
                <Link to={ "/contact" }><a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a></Link>
            </div>
        </>
    )
}

export default Navbar
