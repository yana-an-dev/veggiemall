export default function Card({ veggie }) {
	return (
		<div className="col-md-4 veggie-card">
			<img className="veggie-img" src={veggie.img} alt="veggie-product-img" />
			<h4>{veggie.title}</h4>
			<p>{veggie.content}</p>
		</div>
	)
}
