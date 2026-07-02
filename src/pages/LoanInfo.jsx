import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";

function LoanInfo({ nextStep, prevStep, step }) {
  const { FormData, setFormData } = useContext(FormContext);

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: FormData,
  });


  const loanType = watch("loanType")

  
  const onSubmit = (data) => {
    setFormData({
      ...FormData,
      ...data,
    });

    nextStep();
  };

  return (
    <div className="min-h-screen  bg-gray-100 flex justify-center items-center">

      <div className="bg-white  shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <ProgressBar step={step} totalSteps={9} />

        <h1 className="text-3xl font-bold mb-6">Loan Information</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="space-y-4">

            <select
              data-testid="loanType"
              className="w-full border p-3 rounded-lg"
              {...register("loanType", {
                required: "Please select a loan type",
              })}
            >
              <option value="">Select Loan Type </option>
              <option value="Personal Loan">Personal Loan</option>

              <option value="Home Loan">Home Loan</option>

              <option value="Business Loan">Business Loan</option>
            </select>
            {errors.loanType && (
              <p className="text-red-500 text-sm">{errors.loanType.message}</p>
            )}
             <input
              data-testid="loanAmount"
              type="number"
              placeholder="Loan Amount"
              className="w-full border p-3 rounded-lg"
              {...register("loanAmount", {
                required: "Loan Amount is required",
              })}
            />

            <textarea
              data-testid="loanPurpose"
              placeholder="Loan Purpose"
              className="w-full border p-3 rounded-lg"
              {...register("loanPurpose", {
                required: "Loan Purpose is required",
              })}
            />

            {/* Home Loan Fields */}

            {loanType === "Home Loan" && (
              <>
                <input
                  data-testid="propertyValue"
                  type="number"
                  placeholder="Property Value"
                  className="w-full border p-3 rounded-lg"
                  {...register("propertyValue")}
                />

                <input
                  data-testid="propertyAddress"
                  type="text"
                  placeholder="Property Address"
                  className="w-full border p-3 rounded-lg"
                  {...register("propertyAddress")}
                />
              </>
            )}

            {/* Business Loan Fields */}

            {loanType === "Business Loan" && (
              <>
                <input
                 data-testid= "businessName"
                  type="text"
                  placeholder="Business Name"
                  className="w-full border p-3 rounded-lg"
                  {...register("businessName")}
                />

                <input
                  data-testid="registration-number"
                  type="text"
                  placeholder="Business Registration Number"
                  className="w-full border p-3 rounded-lg"
                  {...register("businessRegistrationNumber")}
                />
              </>
            )}

            <div className="flex justify-between">

              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg"
              >
                Back
              </button>

              <button
                data-testid="loan-next"
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Next
              </button>

            </div>

          </div>

          
        </form>
      </div>
    </div>
  );
}

export default LoanInfo;
