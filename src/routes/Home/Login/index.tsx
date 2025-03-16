import "./styles.css";
import { useState } from "react";
import * as authService from "../../../services/auth-service"
import FormErrorMessage from "../../../Components/FormErrorMessage";
import { CredentialsDTO } from "../../../Models/Authentication/auth";


export default function Login() {
  const [loginInfo, setloginInfo] = useState<CredentialsDTO>({
                                                                username: "",
                                                                password: "",
                                                              });

  function handleSubmit(event:any){
    event.preventDefault();
    authService.loginRequest(loginInfo)
    .then(response =>{
            console.log(response.data);
            authService.saveAccessToken(response.data.access_token); 
    })
    .catch(error =>{
      console.log("Erro no LOGIN: ",error);
    })
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
                  name="username"
                  value={loginInfo.username}
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
                  name="password"
                  value={loginInfo.password}
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
