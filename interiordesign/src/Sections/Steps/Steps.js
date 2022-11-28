import React from "react";
import './Steps.css'
export default function Steps() {
  return (
    <div className="container text-center steps" id="steps">
      <div className="row rowBg">
        <h2 className="pt-3 pb-3">4 Simple Steps To Your New Beautiful Home</h2>
      </div>
      <div className="row rowBg">
        <div className="col-6">
          <h4>1. MEET DESIGNERS</h4>
          <p>
            Contact us here and we’ll schedule an appointment. We understand
            your requirements.
          </p>
        </div>
        <div className="col-6">
          <h4>2. 3D DESIGN</h4>
          <p>
            Based on your needs we design a beautiful life-like 3d design for
            your entire home.
          </p>
        </div>
      </div>
      <div className="row rowBg">
        <div className="col-6">
            <h4>3. TIMELINE & BUDGET</h4>
            <p>Once we get an approval from you on the 3d design, we’ll create a detailed budget with material specifications. We’ll also give you an approximate timeline complete the project.</p>
        </div>
        <div className="col-6">
            <h4>4. EXECUTION</h4>
            <p>Once we get a go ahead from you on the budget, we’ll deploy our contractors and complete the project within schedule.</p>
        </div>
      </div>
    </div>
  );
}
