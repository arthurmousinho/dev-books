import './style.scss'

import { MagnifyingGlass } from '@phosphor-icons/react';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

export function Header() {

    const [seachInput, setSeachInput] = useState("");
    const navigate = useNavigate();

    function handleSeachBook(event: FormEvent) {
        event.preventDefault()
        if (seachInput.trim() !== "") {
            navigate(`/seach/${seachInput}`)
            setSeachInput('')
            return;
        }
    }

    return(
        <header>
            <Link to={"/"} className='logo'>
                <h1>DevBooks</h1>
            </Link>

            <form onSubmit={handleSeachBook}>
                <input type="text" placeholder='Pesquise aqui...'
                    value={seachInput}
                    onChange={(event) => setSeachInput(event.target.value)}
                />

                <button type='submit'>
                    <MagnifyingGlass size={25} color='white'/>
                </button>
            </form>
        </header>
    )
}