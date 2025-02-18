import { useState } from "react";
import "./styles.css";


type Prop={
  onSearchFilter : Function
}

export default function BarradeBusca({onSearchFilter} : Prop) {
  const [searchText,setSearchText] = useState<string>("");

  function handleSubmit(event: any){
    event.preventDefault(); // impede que a página recarregue
    onSearchFilter(searchText);

  }
  function handleSearchTextChange(event : any){
    setSearchText(event.target.value);
  }
  function handleResetClick(){
    setSearchText("");
    onSearchFilter(searchText);
  }

  return (
    <form id="catalogo-barra-pesquisa" className="barra-pesquisa" onSubmit={handleSubmit}>
      <button
        type="submit"
        id="devcom-btn-submit"
        className="devcom-btn-pesquisa"
      >
        {" "}
        🔎︎{" "}
      </button>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        className="devcom-search-input"
        placeholder="Nome do Produto"
      />
      <button
        id="devcom-btn-reset"
        className="devcom-btn-pesquisa"
        onClick={handleResetClick}
      >
        {" "}
        🗙{" "}
      </button>
    </form>
  );
}
