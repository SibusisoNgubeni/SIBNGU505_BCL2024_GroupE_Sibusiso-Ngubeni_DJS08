import React from "react"
import server from "../server"


/**
 * the fOllow along video only imported "./server" and it didnt work on my local browser, 
 * i then exported it as function on from server.js
 * i had to call the seerver function to initialuze it
 */
server();

export default function PAsystems() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="PA-tile">
            <img src={van.imageUrl} />
            <div className="PA-info">
                <h3>{van.name}</h3>
                <p>${van.price}</p>
            </div>
            <i className={`PA-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    return (
        <div className="PA-list-container">
            <h1>Explore our options</h1>
            <div className="PA-list">
                {vanElements}
            </div>
        </div>
    )
}