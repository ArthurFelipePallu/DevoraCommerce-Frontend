import "./styles.css"
import { Outlet } from "react-router-dom";
import HeaderClient from "../../Components/HeaderClient";


export default function Home(){
    return(
        <>
            <HeaderClient/>
            <Outlet/>
        </>
    );
}