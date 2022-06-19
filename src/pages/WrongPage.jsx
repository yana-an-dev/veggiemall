import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export default function WrongPage() {
    let navigate = useNavigate()
    return (
        <div className='wrong-page'>
            <div>This page is not available!</div>
            <Button onClick={() => { navigate(-1) }}>Go Back</Button>
        </div>
    )
}