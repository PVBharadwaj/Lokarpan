import React, { Component } from 'react';
import './Sidemap.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

class Sidemap extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="sitemap-nav">
                <h1>Lokarpan Sitemap</h1>
            </div>
            <div className='sitemap-section'>
            <section className='sitemap_content'>
                <div>
                    <div className='site_item_head site_item_head1'>About</div>
                    <ul className='site_item_list'>
                        <li><Link to="/our-role">Our Role</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/mission">Mission</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/financials">Financials</Link></li>
                        <li><Link to="/alumni">Alumni</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/subscribe">Subscribe</Link></li>
                    </ul>
                </div>

                <div>
                    <div className='site_item_head'>Education</div>
                    <ul className='site_item_list'>
                        <li><Link to="/approach">Approach</Link></li>
                        <li><Link to="/digital-tools">Digital Tools</Link></li>
                        <li><Link to="/application">Application</Link></li>
                        <li><Link to="/podcast">Podcast</Link></li>
                        <li><Link to="/impact">Impact</Link></li>
                        <li><Link to="/moonshots">Moonshots</Link></li>
                        <li><Link to="/volunteer">Volunteer</Link></li>
                    </ul>
                </div>

                <div>
                    <div className='site_item_head'>Kith</div>
                    <ul className='site_item_list'>
                        <li><Link to="/kith-overview">Overview</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/how-to">How to?</Link></li>
                        <li><Link to="/online-enrollment">Online Enrollment</Link></li>
                        <li><Link to="/academics">Academics</Link></li>
                    </ul>
                </div>
            </section>

            <section className='sitemap_content1'>
                <div>
                    <div className='site_item_head site_item_head1'>Design</div>
                    <ul className='site_item_list'>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/design-guidelines">Design Guidelines</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </div>

                <div>
                    <div className='site_item_head'>Support</div>
                    <ul className='site_item_list'>
                        <li><Link to="/ways-to-give">Ways to Give</Link></li>
                        <li><Link to="/being-a-volunteer">Being a Volunteer</Link></li>
                        <li><Link to="/our-supporters">Our Supporters</Link></li>
                        <li><Link to="/why-donate">Why Donate</Link></li>
                        <li><Link to="/donate-now">Donate Now</Link></li>
                        <li><Link to="/our-role">Our Role</Link></li>
                    </ul>
                </div>

                <div>
                    <div className='site_item_head'>Other Links</div>
                    <ul className='site_item_list'>
                        <li><Link to="/fellowship">Fellowship</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/environment">Environment</Link></li>
                        <li><Link to="/livelihood">Livelihood</Link></li>
                    </ul>
                </div>
            </section>
            </div>


            <Footer/>
            </>
        );
    }
}

export default Sidemap;
