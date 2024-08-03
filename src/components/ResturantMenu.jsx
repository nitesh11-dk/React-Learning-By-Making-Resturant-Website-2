import Shimer from '../utils/Shimer';
import { IMAGE_URL } from '../utils/Constants';
import { useParams } from 'react-router-dom';
import {useRestMenu} from '../utils/useRestroMenu'



const ResturantMenu = () => {

let {id} = useParams() ;

let  restMenu  = useRestMenu(id)


if( restMenu === null) return  <Shimer/> ;

let {name  , cloudinaryImageId ,costForTwoMessage , cuisines , locality , city} = restMenu[2].card.card.info ;



let res =  restMenu[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards ;


  return (
    <div className='w-screen h-[85vh] overflow-hidden flex flex-col items-center   justify-center  py-4'>

<div className="card rounded-xl h-[32vh] w-1/2 bg-red-700 flex items-center p-4 ">
<div className="detls w-1/2 h-2/3 flex justify-center flex-col ">
    <b className='text-3xl mb-8 font-medium text-white leading-10'>{name}</b>
    <p className=' italic text-xl text-white opacity-90'>{cuisines.join(",")}</p>
    <p className='text-3xl text-black font-bold'>{costForTwoMessage}</p>
    <p className='text-xl  text-blue-700'>At { `${locality} ,  ${city}`}</p>
</div>

<img className='h-full w-1/2 rounded-2xl object-cover' src={ IMAGE_URL +cloudinaryImageId} alt="" />

</div>

<div className="heading my-8 text-2xl tracking-wider font-semibold text-amber-50/80 "> MENUS:-</div>

<ol className="cards h-fit w-1/2  overflow-y-auto  flex flex-col justify-center gap-4   ">

{
    res.map((elem)=>{
 let {name ,id ,  imageId ,price ,defaultPrice} = elem.card.info ;

        return (<li key={id} className='flex gap-4'>
<span className='text-xl '>{name}</span>
<span className='text-green-400 text-xl italic'>
-&#8377;{price/100 || defaultPrice/100}
</span>




        </li>
        )
        
    })
}

</ol>




    </div>
  )
}

export default ResturantMenu ;