import React from "react";

export default function Person({pageContext}) {
    console.log(pageContext)
    let {name,age} = pageContext
    return (
        <div>
            <span>{name}</span>
            <span>{age}</span>
        </div>
    )
}