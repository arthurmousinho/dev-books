import "./style.scss"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import { Book } from "../../components/Book";


interface BookProps {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description: string;
        imageLinks: {
		    thumbnail: string;
        }
    }
}

interface DataProps {
    items: BookProps[]
}

export function Seach() {

    const seach = useParams().seach?.toLowerCase()

    const [booksFound, setBooksFound] = useState<BookProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getBooks() {
            try {
                
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${seach}`)
                const data: DataProps = await response.data

                const booksFiltered = data.items.filter(item => item.volumeInfo.imageLinks?.thumbnail && item.volumeInfo.authors && item.volumeInfo.description);

                setBooksFound(booksFiltered)
            } 
            catch (error) {
                console.log("Catch: " + error)
            } finally {
                setIsLoading(false)
            }
        } 

        getBooks()
    }, [seach])

    if (isLoading) {
        return <h1 style={{textAlign: 'center', margin: '40px 0px', color: '#1E90FF'}}>Carregando...</h1>
    }

    return (
        <main>
        
            {
                booksFound.map((item) => {

                    const author = item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Autor Desconhecido';

                    return (
                        <Book
                            id={item.id}
                            title={item.volumeInfo.title}
                            author={author}
                            thumbnail={item.volumeInfo.imageLinks.thumbnail}
                            key={item.id}
                        /> 
                    )
                })
            }

              
        </main>
    )
}