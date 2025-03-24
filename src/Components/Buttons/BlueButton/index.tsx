import "./styles.css";
import { history } from "../../../utils/history";
import { ButtonDTO } from "../../../Models/button";
type Props = {
  button: ButtonDTO;
};
export default function BlueButton({ button }: Props) {
  function goToPath() {
    if(button.path != "")
      history.push(button.path);
  }
  return (
    <div
      onClick={goToPath}
      className="devcom-btn devcom-btn-blue responsive-btn"
    >
      {button.name}
    </div>
  );
}
