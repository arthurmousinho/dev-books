import "./style.scss"
import { useEffect, useState } from "react"
import { Book } from "../../components/Book"

import axios from 'axios'


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

export function Home() {
    
    const [books, setBooks] = useState<BookProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function getBooks() {
            try {
                const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=frontend")
                const data: DataProps = await response.data

                const justBooksWithThumbnail = data.items.filter(item => item.volumeInfo.imageLinks?.thumbnail && item.volumeInfo.authors && item.volumeInfo.description);

                setBooks(justBooksWithThumbnail)
            } 
            catch (error) {
                console.log("Catch: " + error)
            } finally {
                setIsLoading(false)
            }
        } 

        getBooks()

    },[])


    if (isLoading) {
        return <h1 style={{textAlign: 'center', margin: '40px 0px', color: '#1E90FF'}}>Carregando...</h1>
    }

 
    return (
        <main>
        
            {
                books.map((item) => {

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