import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";

function AddressInfo({ nextStep, prevStep , step }) {
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
        <h1 className="text-3xl font-bold mb-6">Address Information</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full border p-3 rounded-lg"
                {...register("address1", {
                  required: "Address is required",
                })}
              />

              {errors.address1 && (
                <p className="text-red-500 text-sm">
                  {errors.address1.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full border p-3 rounded-lg"
                {...register("address2")}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full border p-3 rounded-lg"
                {...register("city", {
                  required: "City is required",
                })}
              />

              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="State"
                className="w-full border p-3 rounded-lg"
                {...register("state", {
                  required: "State is required",
                })}
              />

              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Pincode"
                className="w-full border p-3 rounded-lg"
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Pincode must be 6 digits",
                  },
                })}
              />

              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode.message}</p>
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

export default AddressInfo;
