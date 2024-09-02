import { useState } from "react"

const ExTwo = () => {

    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2023",
        color: "red"
    })

    const changeColor = () => {
        setCar((e) => {
            return{...e, color:"blue"}
        })
    }


    return(
        <>
            <h1>My {car.brand}</h1>
            <br />
            <h2>it is a {car.color} {car.model} from {car.year}</h2>
            <br />
            <button onClick={changeColor}>Blue</button>
        </>
    )
}

export default ExTwo