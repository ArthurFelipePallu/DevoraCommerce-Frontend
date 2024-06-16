import { ButtonDTO } from "../../../Models/button";
import "./styles.css";

type Props={
  button:ButtonDTO;
}
export default function BlueButton({button}:Props) {
  return (
    <div className="devcom-btn devcom-btn-blue responsive-btn">{button.name}</div>
  );
}
