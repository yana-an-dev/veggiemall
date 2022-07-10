import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, removeProduct } from '../store'
import { useReducer } from 'react';

export default function Cart() {

  //const user = useSelector((state) => state.user)
  const addedProducts = useSelector((state) => state.addedProducts)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{state.user.name}'s shopping cart</h2>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Veggies Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {addedProducts.map((product, index) =>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="success" onClick={() => { dispatch(decreaseCount(product.id)) }} className='cart-count minus'>-</Button>
                <span className='cart-count-num'>{product.count}</span>
                <Button variant="success" onClick={() => { dispatch(increaseCount(product.id)) }} className='cart-count plus'>+</Button>
              </td>
              <td><Button variant="secondary" onClick={() => { dispatch(removeProduct(product.id)) }}>Remove</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}