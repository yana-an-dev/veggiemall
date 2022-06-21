export default function DetailTabContent({ tab, veggies, id }) {

    //const veggie = veggies.find((veggie) => veggie.id == id)
    if (tab == 0) {
        return <div>Details why is good? </div>
    }
    if (tab == 1) {
        return <div>About Delivery</div>
    }
    if (tab == 2) {
        return <div> F&Q</div>
    }

}