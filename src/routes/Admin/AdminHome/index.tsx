import { useEffect, useState } from "react";
import * as UserService from "../../../services/user-service";
import { UserDTO } from "../../../Models/Authentication/user";

export default function AdminHome()
{
    const [user,setUser] = useState<UserDTO>();
    
    useEffect(() => {
        UserService.findLoggedUser()
            .then( response =>{
                setUser(response.data);
                console.log(response.data);
            })
    },[]);

    return (
        <main>
            <section id="admin-home-section" className="devcom-container">
                <h2>Bem vindo administrador {user?.name} </h2>
            </section>
        </main>
    );

}