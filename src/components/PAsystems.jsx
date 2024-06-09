import React from "react"
import server from "../server"


/**
 * the fllow along video only imported "./server" and it didnt work on my local browser, 
 * i then exported it as function on from server.js
 * i had to call the seerver function to initialuze it
 */
server();

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}</p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}