import "./styles.css";
import homeIcon from "../../assets/homeIcon.png";
import { history } from "../../utils/history";

export default function  HomeIcon() {

   
    function goToAdminHome()
    {
      history.push("/admin/home");
    }

  return (
    <div className="devcom-header-product-item" >
      <img src={homeIcon} alt="Admin" />
      
        <p onClick={goToAdminHome}>Inicio</p>
                  
    </div>
  );

}
