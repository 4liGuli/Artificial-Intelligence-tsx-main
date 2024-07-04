import React from "react";

import { ReactTyped } from "react-typed";


import Button from "./Button";

const Introduction: React.FC = () => {
  return (
    // JSX TSX
    <section className="introduction introduction-fon-rengi py-5">
        <div className="container text-white">
        <div className="row">
        <div className="intro-left col-12 col-md-6 py-5">
          <h6 className="text-uppercase mb-4 ">Next genaretion platform</h6>
          <h1 className="my-4">Artificial intelligence <br/>& Syber security</h1>
          <p className="my-4 py-3">
            Lorem ipsum is placeholder text commonly used in the graphic, <br/>print,
            and publishing industries for previewing layouts and <br/>  visual mockups.
          </p>

          <div className="btns-groups d-flex gap-2">
            <Button inTextBtn="Get started" shekil="" klassAdi="get-started" />
            <Button inTextBtn = "Watch video" shekil="/assets/images/introduction/play.svg" klassAdi="watch-video" />
          </div>
        </div>

        <div className="intro-right col-12 col-md-6">
          <img src="/assets/images/introduction/sagteref.svg" alt="" className="img-fluid" />
        </div>
      </div>
        </div>
      
    </section>
  );
};

export default Introduction;
