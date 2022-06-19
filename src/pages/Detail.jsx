import { Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Detail({ veggies }) {

    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 3000)
    }, []
    )


    let { id } = useParams()
    let [visible, setVisible] = useState(true)

    const veggie = veggies.find((veggie) => veggie.id == id)
    return (
        <div>
            {visible ? <Alert key={'warning'} variant={'warning'}>
                Free delivery for an hour!
        </Alert> : null}
            <img className="veggie-detail-img" src={veggie.img} alt="veggie-product-img" />
            <h4>{veggie.title}</h4>
            <h4>{veggie.price}</h4>
            <p>{veggie.content}</p>
            <Button>Add to Cart</Button>
        </div>
    )
}