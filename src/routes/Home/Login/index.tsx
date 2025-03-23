import "./styles.css";
import { useContext, useState } from "react";
import * as authService from "../../../services/auth-service"
import FormErrorMessage from "../../../Components/FormErrorMessage";
import { CredentialsDTO } from "../../../Models/Authentication/auth";
import { ContextToken } from "../../../utils/context-API";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();

  const {setContextTokenPayload} = useContext(ContextToken);

  const [loginInfo, setloginInfo] = useState<CredentialsDTO>({
                                                                username: "",
                                                                password: "",
                                                              });

  const [authenticationError,setAuthenticationError] = useState<boolean>(false);

  function handleSubmit(event:any){
    event.preventDefault();
    authService.loginRequest(loginInfo)
     .then(response =>{
            console.log(response.data);
            authService.saveAccessToken(response.data.access_token); 
            setContextTokenPayload(authService.getAccessTokenPayload());
            navigate("/cart");

    })

    setAuthenticationError(!authService.isAuthenticated())
    setAuthenticationError(authenticationError);
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
                  errorOcurred={authenticationError}
                  errorMessage="Incorrect user email"
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
                  errorOcurred={authenticationError}
                  errorMessage="Incorrect password"
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
