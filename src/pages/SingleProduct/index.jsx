import CarouselSlide from "../../components/CarouselSlide";
import { useParams} from "react-router";

import Content from '../../components/Content'
import Data from '../../data/logements.json'
import Error from "../Error";

function SingleProduct() {
 const { id } = useParams()
 const advertise = Data.find((item) => item.id === id)
if(!advertise){
  return(
      <Error/>
  )
}
 return (
    <div className="container mainhero-pageProduct">
         <CarouselSlide images={advertise?.pictures} />
         <Content info={advertise}/>
    </div>
 )
}

export default SingleProduct;
