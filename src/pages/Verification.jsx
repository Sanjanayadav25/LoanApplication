import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

function Verification({ nextStep, prevStep, step }) {
  const [panVerified, setPanVerified] = useState(false);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);
  const [panLoading, setPanLoading] = useState(false);
  const [aadhaarLoading, setAadhaarLoading] = useState(false);

  const verifyAadhaar = () => {
    setAadhaarLoading(true);

    setTimeout(() => {
      setAadhaarLoading(false);
      setAadhaarVerified(true);
    }, [2000]);
  };

  const verifyPan = () => {
    setPanLoading(true);

    setTimeout(() => {
      setPanVerified(true);
      setPanLoading(false);
    }, [2000]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <ProgressBar step={step} totalSteps={9} />

        <h1 className="text-3xl font-bold mb-6">Verification</h1>

        <div className="space-y-6">
          <div className="border p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-3">PAN Verification</h2>

            {panLoading ? (
              <p className="text-yellow-600 font-semibold">
                ⏳ Verifying PAN...
              </p>
            ) : !panVerified ? (
              <button
                onClick={verifyPan}
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                Verify PAN
              </button>
            ) : (
              <p className="text-green-600 font-semibold">✔ PAN Verified</p>
            )}
          </div>

          <div className="border p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-3">Aadhaar Verification</h2>
            {aadhaarLoading ? (
              <p className="text-yellow-600 font-semibold">
                ⏳ Verifying Aadhaar...
              </p>
            ) : !aadhaarVerified ? (
              <button
                onClick={verifyAadhaar}
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                VerifyAadhaar
              </button>
            ) : (
              <p className="text-green-600 font-semibold">✔ Aadhaar Verified</p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg"
            >
              Back
            </button>

            <button
              disabled={!panVerified || !aadhaarVerified}
              onClick={nextStep}
              className="bg-green-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verification;
