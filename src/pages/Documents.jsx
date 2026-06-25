import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";

function Documents({ nextStep, prevStep, step }) {
  const { FormData, setFormData } = useContext(FormContext);

  const [panPreview, setPanPreview] = useState(null);
  const [aadhaarPreview, setAadhaarPreview] = useState(null);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...FormData,
      [fieldName]: file,
    });

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, PDF allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("File must be less than 2MB");
      return;
    }

    if (file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);

      if (fieldName === "panCard") {
        setPanPreview(previewUrl);
      }

      if (fieldName === "aadhaarCard") {
        setAadhaarPreview(previewUrl);
      }
    }
  };

  const handleSubmit = () => {
    nextStep();
  };

  return (
    <div className=" min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <ProgressBar step={step} totalSteps={9} />

        <h1 className="text-3xl font-bold mb-6">Upload Documents</h1>

        <div className="space-y-6">
          {/* PAN Card */}
          <div>
            <label className="block mb-2 font-medium">PAN Card</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "panCard")}
            />
            {panPreview && (
              <img
                src={panPreview}
                alt="Pan Card"
                className=" mt-3 rounded border h-32"
              />
            )}
            {FormData.panCard && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {FormData.panCard.name}
              </p>
            )}
          </div>

          {/* Aadhaar Card */}
          <div>
            <label className="block mb-2 font-medium">Aadhaar Card</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "aadhaarCard")}
            />
            {aadhaarPreview && (
              <img
                src={aadhaarPreview}
                alt="Pan Card"
                className=" mt-3 rounded border h-32"
              />
            )}
            {FormData.aadhaarCard && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {FormData.aadhaarCard.name}
              </p>
            )}
          </div>

          {/* Salary Slip */}
          <div>
            <label className="block mb-2 font-medium">Salary Slip</label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, "salaryslip")}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg"
            >
              Back
            </button>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
