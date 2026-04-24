import Form from "../models/formModel.js";

// POST
export const createForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json({
      success: true,
      data: form,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET
export const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};