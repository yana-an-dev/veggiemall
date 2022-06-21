import { useState } from 'react'
import Card from '../components/Card'
import MoreButton from '../components/MoreButton'
import Loading from '../components/Loading'

export default function Home({ veggies, setVeggies }) {
	const [loading, setLoading] = useState(false)
	const [moreBtnClicked, setMoreBtnClicked] = useState(0)
	const [showMoreBtn, setShowMoreBtn] = useState(true)

	return (
		<>
			<div className="main-bg"></div>
			<div className="container">
				<div className="row">
					{veggies.map((veggie) => {
						return <Card veggie={veggie} key={veggie.id} />
					})
					}
				</div>
			</div>
			<div className="more-btn-container" >
				{showMoreBtn ?
					<MoreButton className='more-btn'
						veggies={veggies}
						setVeggies={setVeggies}
						loading={loading}
						setLoading={setLoading}
						moreBtnClicked={moreBtnClicked}
						setMoreBtnClicked={setMoreBtnClicked}
						showMoreBtn={showMoreBtn}
						setShowMoreBtn={setShowMoreBtn}
					/>
					: 'No more veggies...'}
				{loading ? <Loading /> : null}
			</div>

		</>
	)
}