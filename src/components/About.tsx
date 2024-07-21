import React from 'react'

const About:React.FC = () => {
  return (
    <section className="introduction introduction-fon-rengi py-5">
        <div className="container text-white">
        <div className="row">
        <div className="intro-left col-12 col-md-6 py-5">
          <h1 className="my-4">ABOUT</h1>
          <h6>AI in Cybersecurity</h6>
          <p className="my-4">
            Threat Detection: AI identifies unusual patterns in <br/>
            network traffic and detects malware using behavior analysis.<br/><br/>
            Incident Response: Automated responses to threats and forensic analysis of cyber attacks.<br/><br/>
            Vulnerability Management: Predicting potential vulnerabilities and prioritizing critical patches.<br/><br/>
            User Behavior Analytics: Detecting insider threats and enhancing authentication through behavioral biometrics.<br/><br/>
          </p>
        </div>
        <div className="intro-right col-12 col-md-6">
          <img src="/assets/images/introduction/genetic-data-svgrepo-com.svg" alt="" className="img-fluid" />
        </div>
      </div>
        </div>
      
    </section>
  );
}

export default About