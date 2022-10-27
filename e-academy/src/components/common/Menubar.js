import React, { useContext, useEffect, useState } from 'react'
import {
    Container,
    Navbar,
    NavDropdown,
    Nav,
    Image,
} from 'react-bootstrap'
import DarkModeToggle from "react-dark-mode-toggle";
import toast from 'react-hot-toast';
import { Link, NavLink, } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Menubar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const [categories, setCategories] = useState([])

    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success('Logout');
        })
        .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link to="/home" className='logo me-3'><img src="/logo.png" alt="e-academy" style={{ width: '50px' }} /> E-Academy</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <li className="nav-item">
                                <NavDropdown title="Categories" id="basic-nav-dropdown">
                                    {
                                        categories.map(cat => <div key={cat.category_id} ><NavLink to={`/category/${cat.category_id}`} className='dropdown-item'>{cat.category_name}</NavLink></div>)
                                    }
                                </NavDropdown>
                            </li>
                        </Nav>
                        <Nav>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/courses'>Courses</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/faq'>FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                            </li>
                            {
                                user?.uid ?
                                    <>
                                        <li className="nav-item">
                                            <button style={{border:"none"}} onClick={handleLogout} className="nav-link" >Log Out</button>
                                        </li>
                                        <li className="nav-item">
                                            <Image
                                                roundedCircle
                                                className='border border-dark border-4'
                                                width={'40px'}
                                                title={user?.displayName}
                                                alt='UN'
                                                src={user?.photoURL ? user?.photoURL : '/avater.jpg'}
                                            />
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/account/login'>Login</NavLink>
                                    </li>
                            }

                            <Nav.Link>
                                <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={50}
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menubar