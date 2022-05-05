import Productcard from "../utilities/Productcard";
import {  useDispatch, useSelector } from "react-redux";
import { Allproducaction } from '../../store/action/Addcartaction'
import { useEffect } from "react";
function Home() {
  window.scrollTo(0, 0)

  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(Allproducaction())
}, [dispatch]);
const sum = useSelector((state) => state.Allproduct);
console.log(sum.isloading)
  return (
    <div className="home-main-con">
      <div className="procard-con">
        {sum.isloading === undefined ? false : !sum.isloading ? sum.data.map((element) => {
        //  console.log(element.id)
          return <Productcard key={element.id} allproduct={element}></Productcard>
        }):
        <div>Loading...</div>}
      </div> 
    </div>
  );
}

export default Home;