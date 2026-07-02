import { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../components/ProgressBar";

function AddressInfo({ nextStep, prevStep, step }) {
  const { FormData, setFormData } = useContext(FormContext);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: FormData });

 

  const address1Register = register("address1", {
    required: "Address is required",
  });

   const [suggestions, setSuggestions] = useState([]);

  const searchAddress = async (value) => {
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: value,
            format: "json",
            addressdetails: 1,
            limit: 5,
            countrycodes: "in",
          },
        },
      );

      setSuggestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectAddress = (item) => {
    const address = item.address;

    setValue("address1", item.display_name);

    setValue("city", address.city || address.town || address.village || "");

    setValue("state", address.state || "");

    setValue("pincode", address.postcode || "");

    setSuggestions([]);

    setFormData({
      ...FormData,
      address1: item.display_name,
      city: address.city || address.town || address.village || "",
      state: address.state || "",
      pincode: address.postcode || "",
    });
  };

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
                data-testid="address1"
                type="text"
                placeholder="Address Line 1"
                className="w-full border p-3 rounded-lg"
                {...address1Register}
                onChange={(e) => {
                  (address1Register.onChange(e), searchAddress(e.target.value));
                }}
              />

              {errors.address1 && (
                <p className="text-red-500 text-sm">
                  {errors.address1.message}
                </p>
              )}
            </div>
            {suggestions.length > 0 && (
              <div className="border rounded-lg mt-2 bg-white shadow-md max-h-60 overflow-y-auto">
                {suggestions.map((item, index) => (
                  <div
                    data-testid="address-suggestion"
                    key={index}
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => selectAddress(item)}
                  >
                    {item.display_name}
                  </div>
                ))}
              </div>
            )}

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
                data-testid="city"
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
                data-testid="state"
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
                data-testid="pincode"
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
                data-testid="address-next"
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
