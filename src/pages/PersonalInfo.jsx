import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useForm } from "react-hook-form";
import ProgressBar from "../components/ProgressBar";

function PersonalInfo({ nextStep , step }) {
  const { FormData, setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: FormData });

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

        <h1 className="text-3xl font-bold mb-6">Personal Information</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <input
                data-testid="fullName"
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
                {...register("fullName", {
                  required: "Full Name is required",
                })}
              />

              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <input
               data-testid="email"
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid Email",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                data-testid="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be 10 digits",
                  },
                })}
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              data-testid="personal-next"
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
