//TODO: clean up code
//TODO: create veggies API
import { Button } from 'react-bootstrap'

export default function MoreButton({
	veggies, setVeggies,
	setLoading,
	moreBtnClicked, setMoreBtnClicked,
	setShowMoreBtn }) {
	return (
		<Button onClick={() => {
			setLoading(true)
			if (moreBtnClicked === 0) {
				fetch('https://codingapple1.github.io/shop/data2.json')
					.then(res => res.json())
					.then(data => {
						const newVeggies = [...veggies, ...data]
						setVeggies(newVeggies)
						setLoading(false)
					})
					.catch(() => {
						console.log('failed!')
						setLoading(false)
					})
				setMoreBtnClicked(moreBtnClicked + 1)
			} else if (moreBtnClicked === 1) {
				fetch('https://codingapple1.github.io/shop/data3.json')
					.then(res => res.json())
					.then(data => {
						const newVeggies = [...veggies, ...data]
						setVeggies(newVeggies)
						setLoading(false)
					})
					.catch(() => {
						console.log('failed!')
						setLoading(false)
					})
				setMoreBtnClicked(moreBtnClicked + 1)
			} else {
				setShowMoreBtn(false)
				setLoading(false)
			}
		}}>More Veggies</Button>
	)
}