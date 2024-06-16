import "./styles.css";

type Props = {
  name : string;
}

export default function CategoryCard( {name} : Props) {
  return <div className="detalhes-categoria">{name}</div>;
}
