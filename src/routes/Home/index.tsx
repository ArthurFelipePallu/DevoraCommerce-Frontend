import { Outlet } from "react-router-dom";
import HeaderClient from "../../Components/HeaderClient";
import "./styles.css"


export default function Home(){
    return(
        <>
            <HeaderClient/>
            <Outlet/>
        </>
    );
}