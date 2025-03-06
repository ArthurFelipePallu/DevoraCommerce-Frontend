import { useState } from "react";
import "./styles.css";

type FormData = {
  salary?: number;
};

export default function NumberForm() {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData.salary || Number.MAX_VALUE);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="salary"
          value={formData.salary || ""}
          type="text"
          placeholder="Digite o salário"
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
