import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";
import imageCompression from "browser-image-compression";

function Documents({ nextStep, prevStep, step }) {
  const { FormData, setFormData } = useContext(FormContext);

  const [panPreview, setPanPreview] = useState(null);
  const [aadhaarPreview, setAadhaarPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const compressionOptions = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const handleFileChange = async (e, fieldName) => {
    const file = e.target.files[0];

    if (!file) return;

    let finalFile = file;

    if (file.type.startsWith("image/")) {
      try {
        finalFile = await imageCompression(file, compressionOptions);
      } catch (error) {
        console.error("Compression failed:", error);
      }
    }
    setFormData((prev) => ({
      ...prev,
      [fieldName]: finalFile,
    }));

    setErrors((prev) => ({
      ...prev,
      [fieldName]: "",
    }));

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, PDF allowed");
      return;
    }

    if (finalFile.size > 2 * 1024 * 1024) {
      alert("File must be less than 2MB");
      return;
    }

    if (finalFile.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(finalFile);

      if (fieldName === "panCard") {
        setPanPreview(previewUrl);
      }

      if (fieldName === "aadhaarCard") {
        setAadhaarPreview(previewUrl);
      }
    }
  };

  const handleSubmit = () => {
    

    const newErrors = {};

    if (!FormData.panCard) newErrors.panCard = "PAN Card is required";

    if (!FormData.aadhaarCard)
      newErrors.aadhaarCard = "Aadhaar Card is required";

    if (!FormData.salaryslip) newErrors.salaryslip = "Salary Slip is required";

    console.log("Errors:", newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
     
    setErrors({});
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
              data-testid="pan-upload"
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
              <>
                <p className="text-sm text-green-600 mt-2">
                  Selected: {FormData.panCard.name}
                </p>
                <p className="text-sm text-blue-600">
                  File Size: {(FormData.panCard.size / 1024).toFixed(1)} KB
                </p>
              </>
            )}
            {errors.panCard && (
              <p className="text-red-500 text-sm mt-1">{errors.panCard}</p>
            )}
          </div>

          {/* Aadhaar Card */}
          <div>
            <label className="block mb-2 font-medium">Aadhaar Card</label>

            <input
              data-testid="aadhaar-upload"
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
              <>
                <p className="text-sm text-green-600 mt-2">
                  Selected: {FormData.aadhaarCard.name}
                </p>
                <p className="text-sm text-blue-600">
                  File Size: {(FormData.aadhaarCard.size / 1024).toFixed(1)} KB
                </p>
              </>
            )}
            {errors.aadhaarCard && (
              <p className="text-red-500 text-sm mt-1">{errors.aadhaarCard}</p>
            )}
          </div>

          {/* Salary Slip */}
          <div>
            <label className="block mb-2 font-medium">Salary Slip</label>

            <input
              data-testid="salary-upload"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, "salaryslip")}
            />
            {FormData.salaryslip && (
              <>
               <p className="text-sm text-green-600 mt-2">
      Selected: {FormData.salaryslip.name}
    </p>

              <p className="text-sm text-blue-600">
                File Size: {(FormData.salaryslip.size / 1024).toFixed(1)} KB
              </p>
              </>
            )}
            {errors.salaryslip && (
              <p className="text-red-500 text-sm mt-1">{errors.salaryslip}</p>
            )}
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
              data-testid="documents-next"
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
