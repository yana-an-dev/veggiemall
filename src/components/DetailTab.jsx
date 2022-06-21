import { useEffect } from 'react'
import { useState } from 'react'

export default function DetailTabContent({ tab, veggies, id }) {
	const [fade, setFade] = useState('')
	useEffect(() => {
		const fadeTimeout = setTimeout(() => {
			setFade('end')
		}, 100)

		return (() => {
			setFade('')
			clearTimeout(fadeTimeout)
		})
	}, [tab])
	return (
		<div className={"start " + fade}>
			{[
				<div>Details why is good? </div>,
				<div>About Delivery</div>,
				<div> F&Q</div>
			][tab]
			}

		</div>
	)
}