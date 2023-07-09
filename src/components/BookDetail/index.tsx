
import "./style.scss"

interface BookDetailProps {
    img: string;
    title: string;
    subtitle: string;
    authors: string[];
    description: string
}


export function BookDetail(props: BookDetailProps) {

    // Api retorna a descricao algumas tags HTML
    const descriptionFormated = props.description.replace(/<\/?p>/g, "").replace(/<br>/g, "").replace(/&amp;/g, "").replace(/<b[^>]*>/g, "").replace(/<\/b>/g, "").replace(/<[^>]+>/g, "")

    return (
        <div className="book-detail">

            <div className="heading">

                <img src={props.img} alt="" />

                <div>
                    <div className="title-subtitle-container">
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                    </div>

                    <span className="author-container">
                        <strong>Autor(a):</strong> <p>{props.authors + " "}</p>
                    </span>

                </div>

            </div> 

            <div className="description">
                <h3>Descricao do Livro</h3>

                <p>
                    {descriptionFormated}
                </p>

            </div>



        </div>
    )
}