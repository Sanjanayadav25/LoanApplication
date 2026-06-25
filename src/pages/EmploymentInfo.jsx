// src/pages/EmploymentInfo.jsx

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";

function EmploymentInfo({ nextStep, prevStep, step }) {
  const { FormData, setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: FormData,
  });

  const employmentType = watch("employmentType");

  const onSubmit = (data) => {
    setFormData({
      ...FormData,
      ...data,
    });

    nextStep();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <ProgressBar step={step} totalSteps={9} />

        <h1 className="text-3xl font-bold mb-6">
          Employment Information
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">

            {/* Employment Type */}

            <select
              className="w-full border p-3 rounded-lg"
              {...register("employmentType", {
                required: "Please select employment type",
              })}
            >
              <option value="">
                Select Employment Type
              </option>

              <option value="Salaried">
                Salaried
              </option>

              <option value="Self Employed">
                Self Employed
              </option>
            </select>

            {errors.employmentType && (
              <p className="text-red-500 text-sm">
                {errors.employmentType.message}
              </p>
            )}

            {/* Salaried Fields */}

            {employmentType === "Salaried" && (
              <>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border p-3 rounded-lg"
                  {...register("companyName" ,{
                    required : "Company Name is required",
                  })}
                />
                 {errors.companyName && (
                 <p className="text-red-500 text-sm">
                {errors.monthlyIncome.message}
                </p>
                  )}

                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full border p-3 rounded-lg"
                  {...register("jobTitle")}
                />
              </>
            )}

            {/* Self Employed Fields */}

            {employmentType === "Self Employed" && (
              <input
                type="text"
                placeholder="Business Name"
                className="w-full border p-3 rounded-lg"
                {...register("businessName")}
              />
            )}

            <input
              type="number"
              placeholder="Monthly Income"
              className="w-full border p-3 rounded-lg"
              {...register("monthlyIncome", {
                required: "Monthly income is required",
              })}
            />

            {errors.monthlyIncome && (
              <p className="text-red-500 text-sm">
                {errors.monthlyIncome.message}
              </p>
            )}

            <input
              type="number"
              placeholder="Years of Experience"
              className="w-full border p-3 rounded-lg"
              {...register("experience", {
                required: "Experience is required",
              })}
            />

            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
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

export default EmploymentInfo;