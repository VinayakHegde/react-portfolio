import './Experience.css';
import Timeline from '../Timeline/Timeline';
import Story from '../Story/Story';

import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <article className="profile-content">
                {this.getExperienceTimelineSeq()}
            </article>
        );
    }

    getExperienceTimelineSeq(){
        return (
            <Timeline lineColor={'#ddd'}>
                <Story key="001" theme="#9c27b0"
                    when="July 2018 – Present" 
                    who="Senior Front End Developer"
                    where="Playtech Plc">
                    <p> I involved in many client faced apps development for gambling industries. AngularJS, Angular, ReactJS, TypeScript are few to name the technologies used to develop the apps.</p>
                    <h4>Achievement highlights</h4>
                    <ol>
                        <li>Contributed frontend expertise in the development of products through the software life cycle, from requirements definition through successful deployment.</li>
                        <li>Excelled in agile software development and management of technological issues, earning the highest customer satisfaction rating for all software solutions delivered.</li>
                        <li>Introduced methodologies and best practices that enhanced product definition, release processes and customization of applications to user needs.</li>
                    </ol>
                    <h5>Other responsibilities</h5>
                    <p>Building front end code base and libraries, testing, monitoring junior developers, post-sale support and maintenance.</p>
                </Story>
                <Story key="002" theme="#61b8ff"
                    when="Nov 2013 – June 2018" 
                    who="Software Developer"
                    where="Intuitive Business Intelligence Ltd, Manchester">
                    <p> I worked on a project called "Intuitive Dashboards" - which is a data visualisation tool and I developed frontend (Single Page web Application) using cutting-edge technologies like JavaScript (VanillaJS, Kendo UI, BackboneJS, UnderscoreJS, RequireJS, jQuery, ReactJS), HTML5 and CSS3. </p>
                    <h4>Achievement highlights</h4>
                    <ol>
                        <li>Facilitated customization of Intuitive Dashboards by encouraging other developers to adopt emerging standards for web app development, architecture and tools.</li>
                        <li>Participated in partners’ conference due to ability to translate user needs into easy-to-understand software solutions. Helped sales/professional delivery team close major deals generating more than £100K in revenue over years.</li>
                    </ol>
                    <h5>Other responsibilities</h5>
                    <p>Decoupling front-end from back end, prototyping, UI/UX design and development, testing, database management, client management, post-sale support and maintenance.</p>
                </Story>
                <Story key="003" theme="#76bb7f"
                    when="Sept 2012 – Oct 2013" 
                    who="Software Developer"
                    where="ERS Connect, Glasgow">
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
                </Story>
                <Story key="004" theme="#000080"
                    when="Jul 2009 – Aug 2010" 
                    who="Software Engineer"
                    where="Cormorant Engineering Pvt Ltd, India">
                    <p> I worked on the project Customer Loyalty Solution. The former software application was targeted to small retailers. I was responsible for requirement analysis, impact analysis, application development using C# and testing, install and configuration, post-sale support and maintenance. </p>
                </Story>
                <Story key="005" theme="#00FF00"
                    when="Jan 2009 – Jun 2009" 
                    who="UI Design Intern"
                    where="IBS Software, India">
                    <p> I worked on UI Design for developing Rich Internet Applications (m-RIA) framework and mobile applications. I was responsible for prototyping, pictographs, research on User Interface Design Process and Usability Standards.</p>
                </Story>
                <Story key="006" theme="#FF0000"
                    when="Jul 2009 – Aug 2010"
                    who="Junior Networks Admin"
                    where="TSS Ltd, India">
                    <p>I worked along with Network and Systems maintenance team to provide the best service, supported about 75 networked systems, phone systems in the organisation. </p>
                </Story>
            </Timeline>
        );
    }
}

export default Experience;