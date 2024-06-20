import { useState } from "react";

export default function Header() {


    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    }

    return (
        <>
            <nav>
                <div className="container">
                    <img src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"></img>

                    <div className="nav_links">
                        <p>Services</p>

                        <div className="dropdown_container">
                            <p>Portfolio</p>
                            <div className="dropdown">
                                <div className="dropdown_link">
                                    <p>General</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>International</p>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown_container">
                            <p>Company</p>
                            <div className="dropdown">
                                <div className="dropdown_link">
                                    <p>About Us</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Team</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Work With Us</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Awards & Achievements</p>
                                </div>
                            </div>
                        </div>

                        <p>GeoAI</p>

                        <div className="dropdown_container">
                            <p>Events And Media</p>
                            <div className="dropdown">
                                <div className="dropdown_link">
                                    <p>Events</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Media</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Publication</p>
                                </div>

                              
                            </div>
                        </div>

                        <p>Blogs</p>
                    </div>

                    <button>Let's talk</button>

                    <div className="nav_bars" onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`responsive_nav ${isNavVisible ? 'show_nav' : ''}`}>
                    <h1 onClick={toggleNav}>X</h1>
                    <div className="nav_links">
                        <p>Services</p>

                        <div className="dropdown_container">
                            <p>Portfolio</p>
                            <div className="dropdown">
                                <div className="dropdown_link">
                                    <p>General</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>International</p>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown_container">
                            <p>Company</p>
                            <div className="dropdown">
                                <div className="dropdown_link">
                                    <p>About Us</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Team</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Work With Us</p>
                                </div>

                                <div className="dropdown_link">
                                    <p>Awards & Achievements</p>
                                </div>
                            </div>
                        </div>

                        <p>GeoAI</p>
                        <p>Events & Media</p>
                        <p>Blogs</p>
                    </div>
                </div>
            </nav>
        </>
    );
}
