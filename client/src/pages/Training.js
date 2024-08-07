import React from "react";
import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import { FaCertificate, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { MdComputer, MdBusiness, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import '../components/Training.css';
import BackToTopButton from './BackToTop';

const Training = () => {
    return (
        <Layout title="Training - Fakad Infotech">
            <div className="container smt-5">
                <h1 className="text-center mb-5">Training Programs</h1>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <FaCertificate size={40} className="mb-3 text-primary" />
                                <h4 className="card-title">Certificate Programs</h4>
                                <p className="card-text">Gain essential computer skills in 1-3 months.</p>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Courses: Computer Appreciation, Internet, Microsoft Word, Microsoft Excel, Microsoft Power Point</p>
                                <p className="mb-0">Price: N50,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <FaGraduationCap size={40} className="mb-3 text-primary" />
                                <h4 className="card-title">Diploma Programs</h4>
                                <p className="card-text">Comprehensive training in 1-6 months.</p>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Courses: Computer Appreciation, Internet, Microsoft Word, Microsoft Excel, Microsoft Power Point, Microsoft Publisher, CorelDraw</p>
                                <p className="mb-0">Price: N60,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <FaBriefcase size={40} className="mb-3 text-primary" />
                                <h4 className="card-title">Advanced Training</h4>
                                <p className="card-text">Cutting-edge training for modern skills.</p>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Courses: Web Design and Development, Database Design and Development, Computer Programming, Data Science, Machine Leaarning, IT Consulting, Advanced Excel for Data Analyse etc.</p>
                                <p className="mb-0">Price: Negotiation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <MdComputer size={40} className="mb-3 text-primary" />
                                <h4 className="card-title">Additional Training Programs</h4>
                                <p className="card-text">Expand your skills with specialized courses.</p>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Courses: Language Courses (English for IT Professionals, Business Communication), Certification Preparation (Cisco CCNA, CompTIA A+, AWS Certified Solutions Architect), Soft Skills Workshops (Leadership Training, Team Building, Presentation Skills)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <MdBusiness size={40} className="mb-3 text-primary" />
                                <h4 className="card-title">Business Services</h4>
                                <p className="card-text">Professional services for your business needs.</p>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Services: Typesetting, Graphics Design, Software Installation/Selling, Printing of Banners, Lamination & Binding, Phones Repairs, Printing of Flyers & Business Cards etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body text-center">
                                <MdBusiness size={40} className="mb-3 text-primary" />
                                <h4 className="card-title">Special Business Services</h4>
                                <p className="card-text">Professional services tailored for your business or educational needs.</p>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Services: Academic or Business Paper Writing, Proposal Writing, System Upgrading, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Student Benefits and Resources</h4>
                                <ul className="card-text">
                                    <li>Career Counseling: Guidance on career paths and job opportunities.</li>
                                    <li>Library and Resources: Access to online resources, books, and journals.</li>
                                    <li>Internship or NYSC Placement: Assistance in securing internships relevant to the training.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Student Support Services</h4>
                                <ul className="card-text">
                                    <li>Technical Support: Assistance with software installation and troubleshooting.</li>
                                    <li>Feedback Mechanism: Regular evaluations and feedback sessions to improve course delivery.</li>
                                    <li>Community Engagement: Networking events, alumni associations, and industry partnerships.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Contact Us</h4>
                                <p className="card-text">Visit or contact us for your IT Consulting Services.</p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-2">
                                        <MdLocationOn size={24} />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="mb-0">Café: Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja, Nigeria.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <MdPhone size={24} />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="mb-0">Tel: +234 810 175 6091</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <MdEmail size={24} />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="mb-0">E-mail: dagwanpan@gmail.com | dan21017@byui.edu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Office Contacts</h4>
                                <p className="card-text">Visit or contact us for other business Consulting Services.</p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-2">
                                        <MdLocationOn size={24} />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="mb-0">Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja, Nigeria.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <MdPhone size={24} />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="mb-0">Tel: Contact us at +234 806 575 3465 | +234 818 283 9401.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <MdEmail size={24} />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="mb-0">E-mail: fakadinfo@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="training-container smt-5">
                <h2 className="text-center mb-4">Ready to Enroll?</h2>
                <p className="text-center mb-4">Join our training programs today and take the first step towards a successful career in IT. Our comprehensive courses are designed to equip you with the skills and knowledge needed to excel in the tech industry.</p>
                <div className="text-center">
                    <Link to="/register" className="btn btn-primary btn-lg">Enroll Now</Link>
                </div>
            </div>
            <BackToTopButton />
        </Layout>
    );
};

export default Training;
