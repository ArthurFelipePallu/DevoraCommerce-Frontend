import { useState } from "react";

export default function AdminHome()
{
    const [adminName,setAdminName] = useState("Arthur");

    return (
        <main>
            <section id="admin-home-section" className="devcom-container">
                <h2>Bem vindo administrador {adminName}</h2>
            </section>
        </main>
    );

}