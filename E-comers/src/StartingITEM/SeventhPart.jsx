import thredPart from "../../public/thired.json"
import fourth from "../../public/fourth.json"
import { useAuth } from "../auth/ContextApi"
import { EightPart } from "./EightPart.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
export const SevethPart = () =>{
    const {handleleft,handleRight,scrollref} = useAuth()
    return(
        <>
        <section className="SevethPart">
            <h1>Minimum 50% off | Home, kitchen & outdoors</h1>
            <p>See all Offers</p>
            <div>
            {
                thredPart.map((curr,index)=>{
                 return(
                    <main key={index}>
                        <img src={curr.images} alt="" />
                    </main>
                 )   
                })
            }
            </div>
        </section>
        <section className="SevethPart2">
<h1>Up to 40% off | Deals on smartphones</h1>
<p>See all Offers</p>
<div className="FaChevronLeft5" onClick={handleleft}><FaChevronLeft/></div>
<div className="FaChevronRight5" onClick={handleRight}><FaChevronRight/></div>
  <div ref={scrollref}>
   {
    fourth.map((curr,index)=>{
    return(
        <main key={index}>
            <img src={curr.images} alt="" />
        </main>
    )
    })
   }
  </div>
        </section>
        <section className="SevethPart3">
            <img src="https://m.media-amazon.com/images/I/4133ecp7zKL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <section>
            <p>OnePlus Nord 4 5G (Obsidian Midnight, 8GB RAM, 128GB Storage)</p>
            <h5> 4.2 🌟🌟🌟🌟✨</h5>
            <div><h4>Grate Indian Fastival</h4></div>
            <pre>-7% ₹27,999</pre>
            <h6>M.R.P.: ₹29,999</h6>
            <h2>see more</h2>
            </section>
        </section>
        <EightPart/>

        </>
    )
}