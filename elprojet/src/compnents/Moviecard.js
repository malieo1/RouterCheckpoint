import "./global.css";

export default function Moviecard({le}) {
    return (
        <div className="Moviecard">
                <div>
                    <div>
                    <img width="300" src={le.img} alt={le.title} />
                    </div>
                    <div >
                    <h2>{le.title}</h2>
                    <p>{le.description}</p>
                    <h3>Rate : {le.rating}</h3>
                    <h4>{le.posterURL}</h4>
                    </div>
                </div>
            </div>
    )
}