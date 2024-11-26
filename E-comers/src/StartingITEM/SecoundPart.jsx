import { useAuth } from "../auth/ContextApi";
import firstItem from "../../public/fistItem.json"
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { ThiredPart } from "./ThiredPart";
export const SecoundPart = ({move}) =>{
const {handleleft2,handleRight2,scrollref2} = useAuth()
    return(
        <header>
                <h1 className={`title ${move ? "move3":"no2"}`}>Featured Brands</h1>
            <div className="FaChevronLeft" onClick={handleleft2}><FaChevronLeft/></div>
            <div className="FaChevronRight" onClick={handleRight2}><FaChevronRight/></div>
        <section className={`Part2 ${move ? "move3":"no2"}`} ref={scrollref2}>
               {firstItem.map((item)=>{
                return (
                    <main key={item.id}>
                    <img src={item.images} alt="" />
                    </main>
                )
               })} 
        </section>
     <ThiredPart/>
        </header>
    )
}