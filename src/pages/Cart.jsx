import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount } from '../store'
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
          </tr>
        </thead>
        <tbody>
          {addedProducts.map((product, index) =>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Button onClick={() => { dispatch(decreaseCount(index)) }} variant="secondary" className='cart-count minus'>-</Button>
                <span className='cart-count-num'>{product.count}</span>
                <Button onClick={() => { dispatch(increaseCount(index)) }} variant="secondary" className='cart-count plus'>+</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}