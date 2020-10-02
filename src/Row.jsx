import React from "react";

const Row=(props)=>{
    return(
        <>
        <tr>
            <td>{props.title}</td>
            <td>{props.release_year}</td>
            <td>{props.locations}</td>
            <td>{props.fun_facts}</td>
            <td>{props.production_company}</td>
            <td>{props.distributor}</td>
            <td>{props.director}</td>
            <td>{props.writer}</td>
            <td>{props.actor_1}</td>
            <td>{props.actor_2}</td>
            <td>{props.actor_3}</td>
        </tr>
        </>
    )
    
}

export default Row;