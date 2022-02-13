import React, {useState} from "react";
// import useForm from "./useForm";
import axios from "axios";

const Registration = () => {
  const [firstNameReq, setFirstNameReq] = useState("");
  const [lastNameReq, setLastNameReq] = useState("");
  const [emailReq, setEmailReq] = useState("");
  const [passwordReq, setPasswordReq] = useState("");
  const [specialtyReq, setSpecialtyReq] = useState("");

  const register = () => {
    axios.post("api/register", {
      first_name: firstNameReq,
      last_name: lastNameReq,
      email: emailReq,
      password: passwordReq,
      specialty: specialtyReq,
    }).then((response)=> {
      console.log(response)
    });
  };
  // const Registration = ({ submitForm }) => {
  // const { handleChange, handleFormSubmit, values, errors } =
  //   useForm(submitForm);
  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="col-lg-7 px-5 pt-5">
          <h1 className="font-weight-bold py-3">Sign Up</h1>

          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="form-row col-lg-7">
              <input
                type="text"
                className="form-control my-3 p-2"
                placeholder="First Name"
                // name="first_name"
                // value={values.first_name}
                onChange={(e) => {
                  setFirstNameReq(e.target.value)
                }}
                // onChange={handleChange}
              />
              {/* {errors.first_name && (
                <p className="error">*{errors.first_name}</p>
              )} */}
            </div>
            <div className="form-row col-lg-7">
              <input
                type="text"
                className="form-control my-3 p-2"
                placeholder="Last Name"
                name="last_name"
                // value={values.last_name}
                // onChange={handleChange}
                onChange={(e) => {
                  setLastNameReq(e.target.value)
                }}
              />
              {/* {errors.last_name && <p className="error">*{errors.last_name}</p>} */}
            </div>

            <div className="form-row col-lg-7">
              <input
                type="email"
                className="form-control my-3 p-2"
                placeholder="Email"
                name="email"
                // value={values.email}
                // onChange={handleChange}
                onChange={(e) => {
                  setEmailReq(e.target.value)
                }}
              />
              {/* {errors.email && <p className="error">*{errors.email}</p>} */}
            </div>

            <div className="form-row col-lg-7">
              <input
                type="password"
                className="form-control my-3 p-2"
                placeholder="Password"
                name="password"
                // value={values.password}
                // onChange={handleChange}
                onChange={(e) => {
                  setPasswordReq(e.target.value)
                }}
              />
              {/* {errors.password && <p className="error">*{errors.password}</p>} */}
            </div>
            <div className="form-row col-lg-7">
              <input
                type="text"
                className="form-control my-3 p-2"
                placeholder="Specialty"
                name="specialty"
                // value={values.password}
                // onChange={handleChange}
                onChange={(e) => {
                  setSpecialtyReq(e.target.value)
                }}
              />
              {/* {errors.password && <p className="error">*{errors.password}</p>} */}
            </div>

            <div className="form-row col-lg-3">
              <button
                type="submit"
                className="btn btn-md btn-primary"
                onClick={register}
              >
                Register
              </button>
            </div>
            <p>
              Do you have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;