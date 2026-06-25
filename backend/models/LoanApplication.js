import mongoose from "mongoose";

const loanApplicationSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,

    loanType: String,
    loanAmount: Number,

    employmentType: String,
    monthlyIncome: Number,
  },
  { timestamps: true }
);

export default mongoose.model("LoanApplication", loanApplicationSchema);