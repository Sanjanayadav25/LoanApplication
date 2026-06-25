import LoanApplication from "../models/LoanApplication.js";

export const createApplication = async (req, res) => {
  try {
    const application = await LoanApplication.create(req.body);

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
