export default function Card({ veggie }) {
	return (
		<div className="col-md-4">
			<img className="veggie-img" src={veggie.img} />
			<h4>{veggie.title}</h4>
			<p>{veggie.content}</p>
		</div>
	)
}
