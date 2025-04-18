"use client";
import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Typography,
  Snackbar,
  Alert,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const industries = [
  "Healthcare",
  "Finance",
  "Legal",
  "Robotics",
  "Education",
  "Other",
];

const DeveloperSubmission = () => {
  const [formData, setFormData] = useState({
    developerName: "",
    email: "",
    moduleName: "",
    description: "",
    sourceUrl: "",
    ownerUrl: "",
    industry: "",
    tags: "",
    usesLLM: false,
    wantsConnections: false,
    openToProfitSharing: false,
    risks: "",
    message: "",
    documentation: null,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = new FormData();
    for (let key in formData) {
      submission.append(key, formData[key]);
    }

    try {
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderRequiredLabel = (label) => (
    <span>
      {label} <span className="text-red-600">*</span>
    </span>
  );

  return (
    <>
      <Paper elevation={3} className="p-8 max-w-4xl mx-auto my-10">
        <Typography variant="h4" className="text-blue-800 text-center mb-6">
          Submit Your AI Module (Form A-01)
        </Typography>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-5 mt-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label={renderRequiredLabel("Developer Name")}
              name="developerName"
              required
              value={formData.developerName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label={renderRequiredLabel("Email")}
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label={renderRequiredLabel("Module Name")}
              name="moduleName"
              required
              value={formData.moduleName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              multiline
              label={renderRequiredLabel("Description")}
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="GitHub / Source URL"
              name="sourceUrl"
              value={formData.sourceUrl}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Owner Website / Profile"
              name="ownerUrl"
              value={formData.ownerUrl}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              select
              label={renderRequiredLabel("Primary Industry")}
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              {industries.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Tags (comma-separated)"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.usesLLM}
                  onChange={handleChange}
                  name="usesLLM"
                />
              }
              label="Uses a Large Language Model?"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.wantsConnections}
                  onChange={handleChange}
                  name="wantsConnections"
                />
              }
              label="I want this module to connect with others"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.openToProfitSharing}
                  onChange={handleChange}
                  name="openToProfitSharing"
                />
              }
              label="Open to profit-sharing?"
            />
          </div>

          <TextField
            fullWidth
            multiline
            label="Known Risks or Limitations"
            name="risks"
            value={formData.risks}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            multiline
            label="Message to Admin (Optional)"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="mt-2">
            <Typography variant="subtitle1" className="mb-1 font-medium">
              Upload Documentation
            </Typography>
            <div className="border border-gray-300 rounded px-4 py-2">
              <input
                type="file"
                name="documentation"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full"
              />
              {formData.documentation && (
                <p className="text-sm mt-2">📄 {formData.documentation.name}</p>
              )}
            </div>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              className="bg-blue-700 hover:bg-blue-800 text-white mt-4"
            >
              → Submit Module for Review
            </Button>
          </div>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            ✅ Your submission was received! We’ll notify you once it passes
            MorphicBrain review.
          </Alert>
        </Snackbar>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-4 my-8">
          <div className="text-blue-800 font-semibold flex items-center mb-3 text-sm sm:text-base">
            <span className="mr-2 text-lg">🔔</span>
            Notice: Submission Guidelines
          </div>

          <div className="flex items-start mb-3 text-sm">
            <span className="text-blue-700 mr-2 mt-0.5 text-base">🔒</span>
            <div>
              <p className="mb-1">
                All module submissions are routed through MorphicBrain
                security layers.
              </p>
              <p className="mb-3">
                Before being reviewed by <strong>Link2VA Admin</strong>, your
                submission will undergo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div>
                  <p className="flex items-center mb-1">
                    <span className="text-green-600 mr-1">✅</span> Risk
                    assessment
                  </p>
                  <p className="flex items-center mb-1">
                    <span className="text-green-600 mr-1">✅</span> Capability
                    check
                  </p>
                </div>
                <div>
                  <p className="flex items-center mb-1">
                    <span className="text-green-600 mr-1">✅</span> Connection
                    readiness
                  </p>
                  <p className="flex items-center mb-1">
                    <span className="text-green-600 mr-1">✅</span> Abuse
                    prevention
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mt-3 italic flex items-center text-sm">
                <span className="mr-1">📧</span>
                You will receive an email when your module is approved or
                requires further action.
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default DeveloperSubmission;
