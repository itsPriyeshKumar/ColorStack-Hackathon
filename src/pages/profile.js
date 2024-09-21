import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  ListItemText,
  OutlinedInput,
  FormControlLabel,
  Switch,
  Button,
  Box,
  Container,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const degreeLevels = ["Bachelor", "Master", "PhD"];
const genders = ["Male", "Female", "Other"];
const collabOptions = [
  "Web Development",
  "Mobile Apps",
  "AI/ML",
  "Cloud Computing",
  "Data Science",
];

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    degreeLevel: "",
    major: "",
    dob: null,
    collabInterests: [],
    status: false,
    lastOnline: "Sep 21, 2024 20:32",
    gender: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: dayjs(date).toDate() });
  };

  const handleMultiSelectChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      collabInterests: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    // Submit form data to API or handle it as needed
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          m: 5,
        }}
      >
        <TextField
          label="Account Status"
          value={formData.status === 1 ? "Active" : "Inactive"}
          fullWidth
          margin="normal"
          disabled
        />

        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="User ID"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Degree Level</InputLabel>
          <Select
            label="Degree Level"
            name="degreeLevel"
            value={formData.degreeLevel}
            onChange={handleChange}
            required
          >
            {degreeLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Major"
          name="major"
          value={formData.major}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={formData.dob}
            onChange={(date) => {
              handleDateChange("dob", date);
            }}
          />
        </LocalizationProvider>
        <FormControl fullWidth margin="normal">
          <InputLabel>Collaboration Interests</InputLabel>
          <Select
            label="Collaboration Interests"
            name="collabInterests"
            multiple
            value={formData.collabInterests}
            onChange={handleMultiSelectChange}
            input={<OutlinedInput label="Collaboration Interests" />}
            renderValue={(selected) => selected.join(", ")}
          >
            {collabOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  checked={formData.collabInterests.indexOf(option) > -1}
                />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Last Online"
            value={formData.lastOnline}
            fullWidth
            margin="normal"
            disabled
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default UserProfileForm;
