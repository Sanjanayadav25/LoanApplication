import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";

function Review({ nextStep, prevStep, step }) {
  const { FormData } = useContext(FormContext);
  console.log(FormData);
  
 console.log(import.meta.env.VITE_API_URL); 

  const eligible =
    Number(FormData.monthlyIncome) * 20 >= Number(FormData.loanAmount);

  const handleProceed = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/applications/apply`,
        FormData,
      );

      console.log(response.data);

      nextStep();
    } catch (error) {
      console.log("Full Error:", error);
  console.log("Response:", error.response);
  console.log("Response Data:", error.response?.data);
  console.log("Status:", error.response?.status);
      alert("Failed to submit application");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <ProgressBar step={step} totalSteps={9} />

        <h1 className="text-3xl font-bold mb-6">Review Application</h1>

        <div className="space-y-6">
          {/* Personal Info */}

          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">Personal Information</h2>

            <p>
              <strong>Name:</strong> {FormData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {FormData.email}
            </p>
            <p>
              <strong>Phone:</strong> {FormData.phone}
            </p>
          </div>

          {/* Address */}

          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">Address Information</h2>

            <p>
              <strong>Address:</strong> {FormData.address1}
            </p>
            <p>
              <strong>City:</strong> {FormData.city}
            </p>
            <p>
              <strong>State:</strong> {FormData.state}
            </p>
            <p>
              <strong>Pincode:</strong> {FormData.pincode}
            </p>
          </div>

          {/* Loan */}

          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">Loan Information</h2>

            <p>
              <strong>Loan Type:</strong> {FormData.loanType}
            </p>

            <p>
              <strong>Loan Amount:</strong> ₹{FormData.loanAmount}
            </p>

            <p>
              <strong>Purpose:</strong> {FormData.loanPurpose}
            </p>

            {FormData.propertyValue && (
              <p>
                <strong>Property Value:</strong> ₹{FormData.propertyValue}
              </p>
            )}

            {FormData.businessName && (
              <p>
                <strong>Business Name:</strong> {FormData.businessName}
              </p>
            )}
          </div>

          {/* Employment */}

          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">Employment Information</h2>

            <p>
              <strong>Employment Type:</strong> {FormData.employmentType}
            </p>

            {FormData.companyName && (
              <p>
                <strong>Company:</strong> {FormData.companyName}
              </p>
            )}

            <p>
              <strong>Monthly Income:</strong> ₹{FormData.monthlyIncome}
            </p>

            <p>
              <strong>Experience:</strong> {FormData.experience} Years
            </p>
          </div>

          {/* Documents */}

          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">Uploaded Documents</h2>

            <p>
              <strong>PAN Card:</strong> {FormData.panCard?.name}
            </p>

            <p>
              <strong>Aadhaar Card:</strong> {FormData.aadhaarCard?.name}
            </p>

            <p>
              <strong>Salary Slip:</strong> {FormData.salaryslip?.name}
            </p>

            <p>
              <strong>Your Signature:</strong>
            </p>

            {FormData.signature ? (
              <img
                data-testid ="signature-preview"
                src={FormData.signature}
                alt="Signature"
                className="border rounded-md w-72 mt-2"
              />
            ) : (
              <p className="text-gray-500">No signature provided.</p>
            )}
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">Eligibility Status</h2>

            {eligible ? (
              <p className="text-green-600 font-semibold">
                ✔ Eligible for Loan
              </p>
            ) : (
              <p className="text-red-600 font-semibold">
                ✖ Requested loan amount is high compared to income
              </p>
            )}
          </div>

          {/* Buttons */}

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg"
            >
              Back
            </button>

            <button
             data-testid="submit-application"
              onClick={handleProceed}
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
