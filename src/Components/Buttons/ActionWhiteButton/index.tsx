import "./styles.css";
import { ActionButtonDTO } from "../../../Models/button";


type Props = {
  button: ActionButtonDTO;
};
export default function ActionWhiteButton({ button }: Props) {
  function useAction() {
    button.action();
  }
  return (
    <div
      onClick={useAction}
      className="devcom-btn devcom-btn-white responsive-btn"
    >
      {button.name}
    </div>
  );
}
