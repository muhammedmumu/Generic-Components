import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const steps = ['Personal', 'Address', 'Account '];

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  username: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9]{7,15}$/;
const zipRegex = /^[0-9]{4,10}$/;

export default function MultiForms() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateStep = (step, data) => {
    const nextErrors = {};

    if (step === 0) {
      if (!data.firstName.trim()) nextErrors.firstName = 'First name is required.';
      if (!data.lastName.trim()) nextErrors.lastName = 'Last name is required.';
      if (!data.email.trim()) nextErrors.email = 'Email is required.';
      else if (!emailRegex.test(data.email)) nextErrors.email = 'Enter a valid email.';
      if (!data.phone.trim()) nextErrors.phone = 'Phone is required.';
      else if (!phoneRegex.test(data.phone)) nextErrors.phone = 'Enter a valid phone number.';
    }

    if (step === 1) {
      if (!data.address1.trim()) nextErrors.address1 = 'Address is required.';
      if (!data.city.trim()) nextErrors.city = 'City is required.';
      if (!data.state.trim()) nextErrors.state = 'State is required.';
      if (!data.zip.trim()) nextErrors.zip = 'ZIP is required.';
      else if (!zipRegex.test(data.zip)) nextErrors.zip = 'Enter a valid ZIP.';
      if (!data.country.trim()) nextErrors.country = 'Country is required.';
    }

    if (step === 2) {
      if (!data.username.trim()) nextErrors.username = 'Username is required.';
      if (!data.password) nextErrors.password = 'Password is required.';
      else if (data.password.length < 8) nextErrors.password = 'Password must be at least 8 characters.';
      if (!data.confirmPassword) nextErrors.confirmPassword = 'Confirm your password.';
      else if (data.confirmPassword !== data.password) nextErrors.confirmPassword = 'Passwords do not match.';
      if (!data.terms) nextErrors.terms = 'You must accept the terms.';
    }

    return nextErrors;
  };

  const handleNext = () => {
    const nextErrors = validateStep(activeStep, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateStep(activeStep, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      console.log('Form submission:', values);
    }
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', maxWidth: 900, padding: 3 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Multi-level Form
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Complete each step and submit to log the full data.
        </Typography>
      </Box>

      <Stepper activeStep={activeStep} sx={{ marginBottom: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        {activeStep === 0 && (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <TextField
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              fullWidth
              required
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              fullWidth
              required
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              fullWidth
              required
            />
            <TextField
              name="phone"
              label="Phone"
              value={values.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              fullWidth
              required
            />
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <TextField
              name="address1"
              label="Address"
              value={values.address1}
              onChange={handleChange}
              error={Boolean(errors.address1)}
              helperText={errors.address1}
              fullWidth
              required
              sx={{ gridColumn: { xs: 'auto', md: '1 / -1' } }}
            />
            <TextField
              name="city"
              label="City"
              value={values.city}
              onChange={handleChange}
              error={Boolean(errors.city)}
              helperText={errors.city}
              fullWidth
              required
            />
            <TextField
              name="state"
              label="State/Province"
              value={values.state}
              onChange={handleChange}
              error={Boolean(errors.state)}
              helperText={errors.state}
              fullWidth
              required
            />
            <TextField
              name="zip"
              label="ZIP/Postal Code"
              value={values.zip}
              onChange={handleChange}
              error={Boolean(errors.zip)}
              helperText={errors.zip}
              fullWidth
              required
            />
            <TextField
              name="country"
              label="Country"
              value={values.country}
              onChange={handleChange}
              error={Boolean(errors.country)}
              helperText={errors.country}
              fullWidth
              required
            />
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <TextField
              name="username"
              label="Username"
              value={values.username}
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
              fullWidth
              required
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              fullWidth
              required
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
              fullWidth
              required
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    checked={values.terms}
                    onChange={handleChange}
                  />
                }
                label="I accept the terms and conditions"
              />
              {errors.terms && (
                <Typography variant="caption" color="error" sx={{ marginLeft: 1 }}>
                  {errors.terms}
                </Typography>
              )}
            </Box>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
