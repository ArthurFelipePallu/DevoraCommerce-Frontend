import { ButtonDTO } from "../../../Models/button";
import "./styles.css";

type Props={
  button:ButtonDTO;
}
export default function WhiteButton({button}:Props) {
  return (
    <div className="devcom-btn devcom-btn-white responsive-btn">{button.name}</div>
  );
}
