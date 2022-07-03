import { Outlet } from 'react-router-dom';

export default function Event() {
    return (
        <div className='event-page' style={{ textAlign: 'center' }}>
            <h2>Today's event!</h2>
            <Outlet></Outlet>
        </div>
    )
}