import { useMemo } from "react";

function Success() {
  const applicationId = useMemo(() => {
    return "LOAN" + Math.floor(100000 + Math.random() * 900000);
  }, []);

  const handleNewApplication = () => {
    localStorage.removeItem("loanForm");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-2xl text-center">
        <div className="text-6xl mb-4">🎉</div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Loan Application Submitted Successfully
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Thank you for applying. Our team will review your application within
          24–48 hours.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="font-semibold">Application ID</p>

          <p className="text-2xl font-bold text-blue-600">
            {applicationId}
          </p>
        </div>

        <div className="space-y-2 text-gray-700 mb-8">
          <p>✔ Documents Uploaded</p>
          <p>✔ PAN Verification Completed</p>
          <p>✔ Aadhaar Verification Completed</p>
          <p>✔ E-Signature Captured</p>
          <p>✔ Application Received</p>
        </div>

        <div className="border rounded-lg p-4 mb-8 text-left">
          <h2 className="font-bold text-lg mb-3">
            What Happens Next?
          </h2>

          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Your application is under review.</li>
            <li>Verification may take 24–48 hours.</li>
            <li>Our team may contact you via phone or email.</li>
            <li>Keep your Application ID for future reference.</li>
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Print Summary
          </button>

          <button
            onClick={handleNewApplication}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Apply Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;