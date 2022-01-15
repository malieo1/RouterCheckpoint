import "./global.css";
import Moviecard from "./Moviecard";
import {Link} from "react-router-dom";

function Movielist({list}){
    return(
        <div className="Movielist">{
        list.map( (ele,index)=>(
            <Link key={index} to={"/"+index} > 
            <Moviecard key={index} ele={ele} />
            </Link>
        ))
        }
        </div>
    );
}

export default Movielist;