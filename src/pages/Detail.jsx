export default function Detail({ veggie }) {
    return (
        <div>
            <img className="veggie-img" src={veggie.img} alt="veggie-product-img" />
            <h4>{veggie.title}</h4>
            <h4>{veggie.price}</h4>
            <p>{veggie.content}</p>
        </div>
    )
}