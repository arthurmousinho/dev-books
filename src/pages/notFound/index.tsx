import "./style.scss"

import { useNavigate } from "react-router-dom"

export function NotFound() {

    const navigate = useNavigate();

    function handleBackToHomePage() {
        navigate("/")
    }

    return (
        <div className="notfound-container">
            <h1>Ops, esta página não foi encontrada</h1>
            <button onClick={handleBackToHomePage}>Ir para a página Home</button>
        </div>
    )
}