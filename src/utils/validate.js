const validateForm = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailRegex.test(email)) {
    return "Email is Invalid";
  }
  if (!passwordRegex.test(password)) {
    return "Password is Invalid";
  }
  return null;
};

export default validateForm;
