import React, { useContext } from 'react'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const RegistarPage = () => {

    // Provider
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const { providerLogin } = useContext(AuthContext);

    const handleProviderLogin = (provider) => {
        providerLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);

            });
    }


    return (
        <Container>
            <Row className="vh-100 justify-content-md-center align-items-center">
                <Col md="4">
                    <Card className='shadow-lg text-center'>
                        <Card.Body>
                            <h3 className='t-primary qt-hero mb-5'>Register</h3>
                            <Form>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingFullName"
                                        type="email"
                                        placeholder="name@example.com"
                                        name="email"
                                    />
                                    <label htmlFor="floatingFullName">Full name</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPhotoUrl"
                                        type="email"
                                        placeholder="name@example.com"
                                        name="email"
                                    />
                                    <label htmlFor="floatingPhotoUrl">Photo URL</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingEmail"
                                        type="email"
                                        placeholder="name@example.com"
                                        name="email"
                                    />
                                    <label htmlFor="floatingEmail">Email</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPassword"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </Form.Floating>

                                <div className="d-grid gap-2 d-md-flex justify-content-center mb-3">
                                    <Button variant="outline-secondary" type="submit">
                                        Login
                                    </Button>
                                </div>

                                <p>Don't  have an account Please <Link className='text-decoration-none text-secondary' to='/register'>Register</Link></p>
                                <hr />
                                <div className="mb-3">
                                    <Button variant="secondary" className='text-white' onClick={() => handleProviderLogin(googleProvider)}>
                                        <FaGoogle />
                                    </Button>
                                    <Button variant="secondary" className='text-white mx-2' onClick={() => handleProviderLogin(gitProvider)}>
                                        <FaGithub />
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>

                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default RegistarPage