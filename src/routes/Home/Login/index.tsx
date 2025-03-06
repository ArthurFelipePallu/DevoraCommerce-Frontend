import { useState } from "react";
import FormErrorMessage from "../../../Components/FormErrorMessage";
import "./styles.css";

type loginInfo = {
  loginEmail: string;
  loginPassword: string;
};

export default function Login() {
  const [loginInfo, setloginInfo] = useState<loginInfo>({
    loginEmail: "",
    loginPassword: "",
  });

  function handleSubmit(event:any){
    event.preventDefault();
  }

  function handleLoginCheck() {}

  function handleFormInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setloginInfo({ ...loginInfo, [name]: value });
  }

  return (
    <>
      <main>
        <section id="login-section">
          <div className="login-form-container">
            <form onSubmit={handleSubmit} >
              <div className="login-form-input-conatiner">
                <input
                  type="text"
                  name="loginEmail"
                  value={loginInfo.loginEmail}
                  placeholder="Email"
                  className="login-form-input"
                  onChange={handleFormInputChange}
                />
                <FormErrorMessage
                  errorOcurred={false}
                  errorMessage="No error Handling Yet"
                />
              </div>
              <div className="login-form-input-conatiner">
                <input
                  type="password"
                  name="loginPassword"
                  value={loginInfo.loginPassword}
                  placeholder="Password"
                  className="login-form-input"
                  onChange={handleFormInputChange}
                />
                <FormErrorMessage
                  errorOcurred={false}
                  errorMessage="No error Handling Yet"
                />
              </div>
              <button
                type="submit"
                onClick={handleLoginCheck}
                className="login-form-submit-button"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
