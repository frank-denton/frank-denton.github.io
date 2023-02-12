import React from "react"
import Button from "react-bootstrap/Button"
import { LinkContainer } from "react-router-bootstrap"

const Footer = () => <footer className="page-footer font-small blue pt-4 bg-primary">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Contact Me</h5>
                <p>Learn more about me and what I am working on.</p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><Button variant='link' href='https://www.linkedin.com/in/frank-denton-423b4120a/' target="_blank" rel="noopener noreferrer">LinkedIn</Button></li>
                    {/* <li><Button variant='link'>Instagram</Button></li> */}
                    {/* <li><Button variant='link'>Twitter</Button></li> */}
                    <li><Button variant='link' href='https://github.com/Unabatedlynx5' target="_blank" rel="noopener noreferrer">Github</Button></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><Button variant='link' onClick={() => window.location = 'mailto:frankrobertdenton@gmail.com'}>Email</Button></li>
                    <li><Button variant='link' href='https://www.totinograce.org/' target="_blank" rel="noopener noreferrer">School</Button></li>
                    {/* <li><Button variant='link'>Podcast</Button></li> */}
                    {/* <LinkContainer to='/234'><li><Button variant='link'>Fun!</Button></li></LinkContainer> */}
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: {' '}
    <a className="text-info">Frank Denton</a>
    </div>

</footer>

export default Footer