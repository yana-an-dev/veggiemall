import { Button, Alert } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailTabContent from '../components/DetailTab'
import { addProduct } from './../store'
import { useDispatch } from 'react-redux';

export default function Detail({ veggies }) {
  const { id } = useParams()
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState(0)
  const [fade, setFade] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const timerPage = setTimeout(() => {
      setFade('end')
    }, 100)
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)
    return () => {
      //execute before useEffect timer.
      clearTimeout(timer)
      clearTimeout(timerPage)
    }
  }, []
  )

  const veggie = veggies.find((veggie) => veggie.id == id)

  return (
    <div>
      {visible ? <Alert key={'warning'} variant={'warning'}>
        Free delivery for an hour!
        </Alert> : null}
      <div className={"content-container start " + fade}>
        <img className="veggie-detail-img" src={veggie.img} alt="veggie-product-img" />
        <div className="product-info">
          <h4>{veggie.title}</h4>
          <h4>{veggie.price}</h4>
          <p>{veggie.content}</p>
          <Button onClick={() => {
            dispatch(addProduct({ id: veggie.id, title: veggie.title, price: veggie.price, count: 1 }))
          }}>Add to Cart</Button>
          <Button variant="info" >Go to Cart</Button>
        </div>
      </div>

      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item onClick={() => { setTab(0) }}>
          <Nav.Link eventKey="link-0">Details</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => { setTab(1) }}>
          <Nav.Link eventKey="link-1">Delivery</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => { setTab(2) }}>
          <Nav.Link eventKey="link-2">F&Q</Nav.Link>
        </Nav.Item>
      </Nav>

      <DetailTabContent tab={tab} />

    </div>
  )
}