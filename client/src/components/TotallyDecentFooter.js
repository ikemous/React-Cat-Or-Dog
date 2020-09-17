import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaGlobe } from "react-icons/fa";

function TotallyDecentFooter() {
    return (
        <footer className="page-footer pt-4">       
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">

                    <h5 className="text-uppercase">API's</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://dog.ceo/dog-api/" rel="noopener noreferrer" target="_blank">Dog Pictures API</a>
                        </li>
                        <li>
                            <a href="https://thecatapi.com/" rel="noopener noreferrer" target="_blank">Cat Pictures API</a>
                        </li>
                        <li>
                            <a href="https://randomuser.me" rel="noopener noreferrer" target="_blank">Random Information API</a>
                        </li>
                        <li>
                            <a href="https://icanhazdadjoke.com" rel="noopener noreferrer" target="_blank">Dad Joke API</a>
                        </li>
                    </ul>

                </div>

                    <div className="col-md-3 mb-md-0 mb-3">

                    <h5 className="text-uppercase">Creator Links</h5>

                    <ul className="list-unstyled">
                    <li>
                        <FaFacebookSquare /> <a href="fb.gg/ikemous">/Ikemous</a>
                    </li>
                    <li>
                        <FaGithubSquare /> <a href="https://github.com/ikemous" rel="noopener noreferrer" target="_blank">/ikemous</a>
                    </li>
                    <li>
                        <FaTwitterSquare /> <a href="https://twitter.com/real_ikemous" rel="noopener noreferrer" target="_blank">/real_ikemous</a>
                    </li>
                    <li>
                        <FaGlobe /> <a href="http://ikemous.com" rel="noopener noreferrer" target="_blank">Portfolio</a>
                    </li>
                    </ul>

                </div>

                </div>
            </div>
        </footer>
    )
}

export default TotallyDecentFooter;