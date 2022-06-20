import { Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Detail({ veggies }) {
	const { id } = useParams()
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false)
		}, 2000)
		return () => {
			//execute before useEffect timer.
			clearTimeout(timer)
		}
	}, []
	)

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