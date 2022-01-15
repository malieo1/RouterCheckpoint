import "./global.css";
import {useParams} from "react-router-dom";
import Moviecard from "./Moviecard";

export default function Description({list}) {

    console.log(list.length);
    let params = useParams();
    return (
        <div className="desciption">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <>
            <Moviecard ele={list[params.id]} /> 
            <iframe width="560" height="315" src={list[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </>
            }
        </div>
    )
}