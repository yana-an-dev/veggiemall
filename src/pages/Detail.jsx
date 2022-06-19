import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
export default function Detail({ veggies }) {
    let { id } = useParams()
    const veggie = veggies.find((veggie) => veggie.id == id)
    return (
        <div>
            <img className="veggie-detail-img" src={veggie.img} alt="veggie-product-img" />
            <h4>{veggie.title}</h4>
            <h4>{veggie.price}</h4>
            <p>{veggie.content}</p>
            <Button>Add to Cart</Button>
        </div>
    )
}