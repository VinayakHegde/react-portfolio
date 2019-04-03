import './Experience.css';
import Timeline from '../Timeline/Timeline';
import TimeEntry from '../TimeEntry/TimeEntry';

import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <article className="profile-content">
                {this.getExperienceTimeline()}
            </article>
        );
    }
    getExperienceTimeline(){
        return (
            <Timeline lineColor={'#ddd'}>
                <TimeEntry key="001" dateText="July 2018 – Present" style={{ color: '#9c27b0' }}  dateInnerStyle={{ background: '#9c27b0' }}>
                    <h3 style={{ color: '#9c27b0' }}>Senior Front End Developer</h3>
                    <h4 style={{ color: '#9c27b0' }}>@ Playtech Plc</h4>
                    <p> I involved in many client faced apps development for gambling industries. AngularJS, Angular, ReactJS, TypeScript are few to name the technologies used to develop the apps.</p>
                    <h4>Achievement highlights</h4>
                    <ol>
                        <li>Contributed frontend expertise in the development of products through the software life cycle, from requirements definition through successful deployment.</li>
                        <li>Excelled in agile software development and management of technological issues, earning the highest customer satisfaction rating for all software solutions delivered.</li>
                        <li>Introduced methodologies and best practices that enhanced product definition, release processes and customization of applications to user needs.</li>
                    </ol>
                    <h5>Other responsibilities</h5>
                    <p>Building front end code base and libraries, testing, monitoring junior developers, post-sale support and maintenance.</p>
                </TimeEntry>
                <TimeEntry key="002" dateText="Nov 2013 – June 2018" style={{ color: '#61b8ff' }} dateInnerStyle={{ background: '#61b8ff' }}>
                    <h3 style={{ color: '#61b8ff' }}>Software Developer</h3>
                    <h4 style={{ color: '#61b8ff' }}>Intuitive Business Intelligence Ltd, Manc</h4>
                    <p> I worked on a project called "Intuitive Dashboards" - which is a data visualisation tool and I developed frontend (Single Page web Application) using cutting-edge technologies like JavaScript (VanillaJS, Kendo UI, BackboneJS, UnderscoreJS, RequireJS, jQuery, ReactJS), HTML5 and CSS3. </p>
                    <h4>Achievement highlights</h4>
                    <ol>
                        <li>Facilitated customization of Intuitive Dashboards by encouraging other developers to adopt emerging standards for web app development, architecture and tools.</li>
                        <li>Participated in partners’ conference due to ability to translate user needs into easy-to-understand software solutions. Helped sales/professional delivery team close major deals generating more than £100K in revenue over years.</li>
                    </ol>
                    <h5>Other responsibilities</h5>
                    <p>Decoupling front-end from back end, prototyping, UI/UX design and development, testing, database management, client management, post-sale support and maintenance.</p>
                </TimeEntry>
                <TimeEntry key="003" dateText="Sept 2012 – Oct 2013" style={{ color: '#76bb7f' }} dateInnerStyle={{ background: '#76bb7f' }}>
                    <h3 style={{ color: '#76bb7f' }}>Software Developer</h3>
                    <h4 style={{ color: '#76bb7f' }}>ERS Connect, Glasgow</h4>
                    <p> I assisted in design and development of Patient Appointment Confirmation Service and Telephone Answering Service application for NHS Trusts. </p>
                    <h4>Achievement highlights:</h4>
                    <ol>
                        <li>
                            Provided user requirements analysis, design and programming support for enhancement of web application accessed by roughly 25k NHS users every day.
                        </li>
                        <li>
                            Fuelled additional revenue stream through responsive customer support, generating £20K in new license sales within first few weeks of new product release.
                        </li>
                    </ol>
                    <h5>Other responsibilities</h5>
                    <p>Brand development, web site functionality and UI enhancement using JavaScript/HTML/CSS, application development using C# and deployment and support. </p>
                </TimeEntry>
                <TimeEntry key="004" dateText="Jul 2009 – Aug 2010" style={{ color: '#000080' }} dateInnerStyle={{ background: '#000080' }}>
                    <h3 style={{ color: '#000080' }}>Software Engineer</h3>
                    <h4 style={{ color: '#000080' }}>Cormorant Engineering Pvt Ltd, India</h4>
                    <p> I worked on the project Customer Loyalty Solution. The former software application was targeted to small retailers. I was responsible for requirement analysis, impact analysis, application development using C# and testing, install and configuration, post-sale support and maintenance. </p>
                </TimeEntry>
                <TimeEntry key="005" dateText="Jan 2009 – Jun 2009" style={{ color: '#00FF00' }} dateInnerStyle={{ background: '#00FF00' }}>
                    <h3 style={{ color: '#00FF00' }}>UI Design Intern </h3>
                    <h4 style={{ color: '#00FF00' }}>IBS Software, India </h4>
                    <p> I worked on UI Design for developing Rich Internet Applications (m-RIA) framework and mobile applications. I was responsible for prototyping, pictographs, research on User Interface Design Process and Usability Standards.</p>
                </TimeEntry>
                <TimeEntry key="006" dateText="Jul 2009 – Aug 2010" style={{ color: '#FF0000' }} dateInnerStyle={{ background: '#FF0000' }}>
                    <h3 style={{ color: '#FF0000' }}>Junior Networks Admin </h3>
                    <h4 style={{ color: '#FF0000' }}>TSS Ltd, India</h4>
                    <p>I worked along with Network and Systems maintenance team to provide the best service, supported about 75 networked systems, phone systems in the organisation. </p>
                </TimeEntry>
            </Timeline>
        );
    }
}

export default Experience;