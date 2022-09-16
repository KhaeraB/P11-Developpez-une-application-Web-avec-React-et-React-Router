import { Link } from 'react-router-dom'
import './style.scss'


//import Data from '../../data/logements.json'

function Card(props){

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Link className='d-block link-card' to={`/annonce/${props.item.id}`} key={props.item.id}>
                <img className='thumbnail' src={props.item.cover} alt={props.item.title} />
                <h2 className='cardTitle'> {props.item.title}</h2>
            </Link>
        </div>
    )
}

export default Card