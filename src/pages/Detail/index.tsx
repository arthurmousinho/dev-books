import './style.scss'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { BookDetail } from '../../components/BookDetail';


interface BookInfosProps {
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        description: string;
        imageLinks: {
		    thumbnail: string;
        } 
    },
    salesInfo: {
        buyLink: string;
    }
}

export function Detail() {
    const [infos, setInfos] = useState<BookInfosProps>({
        volumeInfo: {
            title: "",
            subtitle: "",
            authors: [""],
            description: "",
            imageLinks: {
                thumbnail: "",
            } 
        },
        salesInfo: {
            buyLink: ""
        }
    })

    const id = useParams().id

    useEffect(() => {
        async function getBook() {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
                const data = response.data
                setInfos(data)
                console.log(data)
            } 
            catch (error) {
                console.log("Catch: " + error)
            } 
        } 

        getBook()
    }, [])

    
    return (

        <main>
    
            <BookDetail 
                img={infos.volumeInfo.imageLinks.thumbnail}
                authors={infos?.volumeInfo.authors}
                description={infos?.volumeInfo.description}
                title={infos?.volumeInfo.title}
                subtitle={infos?.volumeInfo.subtitle}
            />
              
        </main>
    )
}