import "./style.scss"

import { useNavigate } from "react-router-dom";

interface BookProps {
    id: string;
    thumbnail: string;
    title: string;
    author: string;
}


export function Book(props: BookProps) {

    const navigate = useNavigate()

    function handleBookDetail() {
        navigate(`/detail/${props.id}`)
    }

    return (
        <div className="book">

            <img src={props.thumbnail} alt="" />

            <div className="infos">
                <h2>{props.title}</h2>
                <p>Autor(a): {props.author}</p>
                <button onClick={handleBookDetail}>
                    Detalhes
                </button>
            </div>
            
        </div>

    )
}