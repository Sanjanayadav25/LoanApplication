import { useRef, useContext } from "react";
import SignatureCanvas from "react-signature-canvas";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";

function Signature({ nextStep, prevStep, step }) {
  const sigRef = useRef();
  const { FormData, setFormData } = useContext(FormContext);

  const saveSignature = () => {
    const signature = sigRef.current.toDataURL();

    setFormData({
      ...FormData,
      signature,
    });

    nextStep();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl">

        <ProgressBar step={step} totalSteps={9} />

        <h1 className="text-3xl font-bold mb-6">
          E-Signature
        </h1>

        <div className="border rounded-lg">
          <SignatureCanvas
            ref={sigRef}
            penColor="black"
            canvasProps={{
              width: 700,
              height: 250,
              className: "w-full",
            }}
          />
        </div>

        <div className="flex justify-between mt-6">

          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg"
          >
            Back
          </button>

          <button
            onClick={saveSignature}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Save Signature
          </button>

        </div>

      </div>
    </div>
  );
}

export default Signature;