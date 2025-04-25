import "./styles.css";
import { ActionButtonDTO } from "../../../Models/button";
import ActionBlueButton from "../../Buttons/ActionBlueButton";
import ActionWhiteButton from "../../Buttons/ActionWhiteButton";

type Props = {
  data: ConfirmationModalDTO;
};

export default function ConfirmationModal({ data }: Props) {
  return (
    <div
      className="devcom-dialog-background"
      onClick={() => {
        data.answerAction(false);
      }}
    >
      <div
        className="devcom-dialog-box"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h2>{data.message}</h2>
        <div className="modal-btn-container">
          <button className="dialog-btn" onClick={() => {data.answerAction(true); }}>
            {data.confirmText}
          </button>
          <button className="dialog-btn" onClick={() => {data.answerAction(false); }}>
            {data.denyText}
          </button>
        </div>
      </div>
    </div>
  );
}
