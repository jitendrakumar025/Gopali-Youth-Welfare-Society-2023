// import { useEffect } from 'react'
import Member2324 from './GB/GB.jsx';
import Advisory from './Advisory/Advisory.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import Jvm from './JVM/jvm.jsx';
import Rise from './JVM/rise/rise.jsx';
import Light from './JVM/light/light.jsx';
import '../Members.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../hands.png'

function Members() {
    document.title = "Members | GYWS";
    let menuRef = useRef();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    
    const [isCollapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!isCollapsed);
 
    };
    useEffect(() => {

        let handler = (e) => {
            if (!menuRef.current.contains(e.target))
                setCollapsed(true);
       
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <>
            <div className="wrapper"  >
                <div ref={menuRef}>
                    <div className="hamburger" onClick={toggleSidebar} >
                        <img src={logo} alt="" width={"30px"} />
                    </div>
                    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} >
                        <div className="everything">
                            <h2>Members</h2>
                            <ul>
                                <li className="dropdown">
                                    <Link >
                                        Sessions
                                    </Link>
                                    <ul className="dropdown-content">

                                        <li>
                                            <Link to="/member/members2022-23" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                                Session 2022-23
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/member/members2021-22" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                                Session 2021-22
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/member/members2020-21" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                                Session 2020-21
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/member/members2019-20" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                                Session 2019-20
                                            </Link>
                                        </li>
                                        {/* Add more items as needed */}
                                    </ul>
                                </li>
                                <Link to="/member" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                    <li>
                                        Governing Body 2023-24
                                    </li>
                                </Link>
                                <Link to="/member/Advisory" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                    <li>
                                        Advisory Committee
                                    </li>
                                </Link>

                                {/* New li with dropdown */}

                            </ul>

                            <h2>Intiatives</h2>
                            <ul>
                                <Link to="/member/jvm" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                    <li>
                                        Jagriti Vidya Mandir <br />
                                        Education Initiative
                                    </li>
                                </Link>
                                <Link to="/member/Rise" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                    <li>
                                        RISE <br />
                                        Reform and Innovate School Education
                                    </li>
                                </Link>
                                <Link to="/member/LiGHT" onClick={() => { toggleSidebar(); scrollToTop() }}>
                                    <li>
                                        LiGHT <br />
                                        Expansion Initiative
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_content" >
                    <Routes>
                        <Route exact path="/" element={<Member2324 key={1} />} />
                        <Route exact path="/Advisory" element={<Advisory key={4} />} />
                        <Route exact path="/jvm" element={<Jvm key={5} />} />
                        <Route exact path="/Rise" element={<Rise key={6} />} />
                        <Route exact path="/LiGHT" element={<Light key={7} />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Members;