import React from 'react'
import Button from "./Button";

const Services:React.FC = () => {
  return (
    <div className='deep-learning text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="deep-left col-12 col-md-6  py-5">
                  <img src="/assets/images/introduction/services-svgrepo-com.svg" className='img-fluid' alt="Sekil Error" />
                </div>
                <div className="deep-right col-12 col-md-6 d-flex flex-column justify-content-center ">
                  <h2>Services</h2>
                  <article className= "">Threat Detection and Prevention:<br/>
                    Anomaly Detection: Identifies unusual patterns in network traffic.<br/>
                    Malware Detection: Recognizes and prevents new malware types.<br/><br/>
                    Automated Response:<br/>
                    Incident Response Automation: Quickly mitigates threats.<br/>
                    SOAR: Coordinates automated security responses.<br/>
                    Predictive Analytics:<br/><br/>
                    Risk Prediction: Forecasts potential vulnerabilities.<br/>
                    Proactive Threat Hunting: Identifies threats before they occur.<br/><br/>
                    Behavioral Analysis:<br/>
                    UEBA: Monitors user behavior for insider threats.<br/>
                    EDR: Analyzes device data to detect suspicious activities.<br/><br/>
                    Fraud Detection:<br/>
                    Financial Sector: Detects fraudulent transactions in real-time.<br/>
                    Identity Theft: Prevents unauthorized access through anomaly detection. <br/>
                    </article>
                  <Button inTextBtn='Learn More' klassAdi='deep-learning-btn' shekil='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services