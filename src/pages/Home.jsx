import Card from './Card'
export default function Home({ veggies }) {
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
		</>
	)
}