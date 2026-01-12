import "./styles.css";
import { useContext, useState } from "react";
import * as forms from "../../../utils/forms";
import { history } from "../../../utils/history";
import FormInput from "../../../Components/FormInput";
import { ContextToken } from "../../../utils/context-API";
import * as authService from "../../../services/auth-service";

export default function Login() {

  const [errorOcurred, setOcurredError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Usuário ou senha inválida"
  );

  const { setContextTokenPayload } = useContext(ContextToken);

  const [loginInfo, setloginInfo] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&*+=?^_´{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar Email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
      message: "Favor informar Senha válida",
    },
  });

  const [authenticationError, setAuthenticationError] =
    useState<boolean>(false);

  function handleSubmit(event: any) {
    event.preventDefault();

    setOcurredError(false);

    const loginValidated = forms.dirtyAndValidateAll(loginInfo);

    if (forms.hasAnyInvalid(loginValidated)) {
      setloginInfo(loginValidated);
      return;
    }

    authService
      .loginRequest(forms.toValues(loginInfo))
      .then((response) => {
        console.log(response.data);
        authService.saveAccessToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        history.push("/admin");
      })
      .catch((error) => {
        setOcurredError(true);
        console.log(error);
        setErrorMessage(error.response.data.error_description);
      });

    setAuthenticationError(!authService.isAuthenticated());
    setAuthenticationError(authenticationError);
  }

  function handleLoginCheck() {}

  function updateFormInput(event: any) {
    //forms atualizado e validado
    const result = forms.updateAndValidate(
      loginInfo,
      event.target.name,
      event.target.value
    );
    //finalmente forms setado para valores novos
    setloginInfo(result);
  }
  function turnInputDirty(name: string) {
    setloginInfo(forms.dirtyAndValidate(loginInfo, name));
  }

  return (
    <>
      <main>
        <section id="login-section">
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <div className="login-form-input-conatiner">
                <div>
                  <FormInput
                    {...loginInfo.username}
                    onChange={updateFormInput}
                    className="devcom-form-control"
                    onTurnDirty={turnInputDirty}
                  />
                  <div className="devcom-form-error">
                    {loginInfo.username.message}
                  </div>
                </div>
              </div>
              <div className="login-form-input-conatiner">
                <div>
                  <FormInput
                    {...loginInfo.password}
                    onChange={updateFormInput}
                    className="devcom-form-control"
                    onTurnDirty={turnInputDirty}
                  />
                  <div className="devcom-form-error">
                    {loginInfo.password.message}
                  </div>
                </div>
              </div>
              {errorOcurred && (
                <div className="devcom-form-global-error">{errorMessage}</div>
              )}
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
