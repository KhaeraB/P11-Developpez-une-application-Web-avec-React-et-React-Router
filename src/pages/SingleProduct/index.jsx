import CarouselSlide from "../../components/CarouselSlide";
import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router";

import Error from "../Error";
import Content from '../../components/Content'
import Data from '../../data/logements.json'
import "./style.scss";


function SingleProduct() {
 const { id } = useParams()
 const advertise = Data.find((item) => item.id === id)
 if(!advertise){
   <Navigate path="/*" element={<Error />} />
 }
 return (
    <Container className="mainhero-pageProduct">
         <CarouselSlide images={advertise?.pictures} />
         <Content info={advertise}/>
    </Container>
 )
}

export default SingleProduct;
