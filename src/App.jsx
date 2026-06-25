import React, { useState } from "react";
import PersonalInfo from "./pages/PersonalInfo";
import AddressInfo from "./pages/AddressInfo";
import LoanInfo from "./pages/LoanInfo";
import EmploymentInfo from "./pages/EmploymentInfo";
import Documents from "./pages/Documents";
import Review from "./pages/Review";
import Verification from "./pages/verification";
import Success from "./pages/Success";
import Signature from "./pages/Signature";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  switch (step) {
    case 1:
      return <PersonalInfo nextStep={nextStep} step={step} />;

    case 2:
      return (
        <AddressInfo nextStep={nextStep} prevStep={prevStep} step={step} />
      );

    case 3:
      return <LoanInfo prevStep={prevStep} nextStep={nextStep} step={step} />;

    case 4:
      return <EmploymentInfo nextStep={nextStep} prevStep={prevStep} step={step} />;

    case 5:
      return <Documents nextStep={nextStep} prevStep={prevStep} step={step} />;

    case 6:
      return <Review nextStep={nextStep} prevStep={prevStep} step={step} />;

    case 7:
      return (
        <Verification nextStep={nextStep} prevStep={prevStep} step={step} />
      );

    case 8:
      return <Signature nextStep={nextStep} prevStep={prevStep} step={step} />;

    case 9:
      return <Success />;

    default:
      return <h1>Form Completed</h1>;
  }
}

export default App;
