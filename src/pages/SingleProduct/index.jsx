import CarouselSlide from "../../components/CarouselSlide";
import { useParams, Navigate } from "react-router";

import Error from "../Error";
import Content from '../../components/Content'
import Data from '../../data/logements.json'


function SingleProduct() {
 const { id } = useParams()
 const advertise = Data.find((item) => item.id === id)
 if(!advertise){
   <Navigate path="/*" element={<Error />} />
 }
 return (
    <div className="container mainhero-pageProduct">
         <CarouselSlide images={advertise?.pictures} />
         <Content info={advertise}/>
    </div>
 )
}

export default SingleProduct;
