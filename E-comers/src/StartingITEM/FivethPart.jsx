import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { useAuth } from "../auth/ContextApi"
import secoundPath from "../../public/secound.json"
import { useEffect, useState } from "react"
import { SiXthPart } from "./SixthPart"
export const FivethPart = () =>{
    const {handleleft,handleRight,scrollref} = useAuth()
    const [ Name, setname] = useState('')

    const handleChange = () => {
      const maxLength = 26;
      secoundPath.forEach((curr) => {
        if (curr && curr.name) {  // Check if curr and curr.name are defined
          const title = curr.name;
          let truncatedTitle = title;
          if (title.length > maxLength) {
            truncatedTitle = title.substring(0, maxLength) + '...';
          }
          setname(truncatedTitle);
        }
      });
    };
    

    useEffect(()=>{
      handleChange()
    },[])
    return(
        <>
            <h2 className="BlockBuster">BlockBuster Deals in 2024</h2>
            <div className="FaChevronLeft2" onClick={handleleft}><FaChevronLeft/></div>
            <div className="FaChevronRigh3" onClick={handleRight}><FaChevronRight/></div>
            <section className="FourthPart" ref={scrollref}> 
            {
    secoundPath.map((item)=>{
      return(
        <div key ={item.id} >
            <img src={item.images} alt=""  />
            <div>{item.off}</div>
            <p>{item.h1}</p>
             <pre>{item.price}</pre>
             <h6>{item.extra}</h6>
             <h3>{Name}</h3>
        </div>
      )  
    })
}
             </section>   
             <SiXthPart/>
        </>
    )
}