import "./styles.css";
import { useContext, useState } from "react";
import * as authService from "../../../services/auth-service"
import FormErrorMessage from "../../../Components/FormErrorMessage";
import * as forms from "../../../utils/forms";
import { ContextToken } from "../../../utils/context-API";
import { useNavigate } from "react-router-dom";
import { history } from "../../../utils/history";
import FormInput from "../../../Components/FormInput";

export default function Login() {

  const navigate = useNavigate();

  const {setContextTokenPayload} = useContext(ContextToken);

  const [loginInfo, setloginInfo] = useState<any>({
                                              username:{
                                                value: "",
                                                id:"username",
                                                name:"username",
                                                type:"text",
                                                placeholder:"Email",
                                                validation: function(value:string){
                                                  return /^[a-zA-Z0-9.!#$%&*+=?^_´{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
                                                },
                                                message:"Favor informar Email válido"
                                              },
                                              password:{
                                                value: "",
                                                id:"password",
                                                name:"password",
                                                type:"password",
                                                placeholder:"Senha",
                                                message:"Favor informar Senha válida"
                                              }
                                            });

  const [authenticationError,setAuthenticationError] = useState<boolean>(false);

  function handleSubmit(event:any){
    event.preventDefault();
    authService.loginRequest({username : loginInfo.username.value , password : loginInfo.password.value})
     .then(response =>{
            console.log(response.data);
            authService.saveAccessToken(response.data.access_token); 
            setContextTokenPayload(authService.getAccessTokenPayload());
            history.push("/admin");
    })

    setAuthenticationError(!authService.isAuthenticated())
    setAuthenticationError(authenticationError);
  }

  function handleLoginCheck() {}

  function handleFormInputChange(event: any) {
    const newValue = event.target.value;
    const name = event.target.name;
    setloginInfo(forms.update(loginInfo,name,newValue));
  }

  return (
    <>
      <main>
        <section id="login-section">
          <div className="login-form-container">
            <form onSubmit={handleSubmit} >
              <div className="login-form-input-conatiner">
                <FormInput
                  { ...loginInfo.username }
                  className="login-form-input"
                  onChange={handleFormInputChange}
                />
                <FormErrorMessage
                  errorOcurred={authenticationError}
                  errorMessage={loginInfo.username.message}
                />
              </div>
              <div className="login-form-input-conatiner">
                <FormInput
                  { ...loginInfo.password }
                  className="login-form-input"
                  onChange={handleFormInputChange}
                />
                <FormErrorMessage
                  errorOcurred={authenticationError}
                  errorMessage={loginInfo.password.message}
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
