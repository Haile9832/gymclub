import "./LoginModal.css";
import { useEffect, useState } from "react";

function LoginModal({ handleShowModal }) {
  const initialState = { username: "", email: "", telnum: "" };
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const isNumber = (val) => !isNaN(Number(val));
    if (!values.username) {
      errors.username = "Your name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.telnum) {
      errors.telnum = "Your phone-number is required";
    } else if (!isNumber(values.telnum)) {
      errors.telnum = "Must be a number";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitForm(true);
  };
  useEffect(() => {
    if (formErrors.username || formErrors.email || formErrors.telnum) {
    } else {
      if (isSubmitForm) {
        alert(
          `Successfully registed Mr/Mrs: ${formValues.username}. Thank you for your Register
           Your phone number is: ${formValues.telnum} your Email is: ${formValues.email}`
        );
        handleShowModal();
      }
    }
  }, [formErrors]);
  return (
    <div className="modal">
      <form className="modal-inner" onSubmit={handleSubmit}>
        <div className="modal-header">
          <h2>Join Us Now</h2>
          <button onClick={handleShowModal}>X</button>
        </div>
        <div className="modal-body">
          <div className={`form-control ${formErrors.username ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Your name"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <small>{formErrors.username}</small>
            <span></span>
          </div>
          <div className={`form-control ${formErrors.email ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Your email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <small>{formErrors.email}</small>
            <span></span>
          </div>
          <div className={`form-control ${formErrors.telnum ? "error" : ""}`}>
            <input
              type="telnum"
              placeholder="Your phone-number"
              name="telnum"
              value={formValues.telnum}
              onChange={handleChange}
            />
            <small>{formErrors.telnum}</small>
            <span></span>
          </div>
          <button type="submit" className="form-btn-submit">
            Register Now
          </button>
          <div className="login-link">
            Already have an account? <a>Login</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
