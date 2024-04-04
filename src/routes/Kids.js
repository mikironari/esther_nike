import { useState } from 'react';
import '../css/Kids.css';
import KidsData from '../data/KidsData';

function Kids() {

  let [kidsPageList] = useState(KidsData);

  return (
    <div className='kidsPage'>
      <h4 className='bold'>NIKE KIDS</h4>
      {
            kidsPageList.map((a, i)=>{
              return (
                <KidsPageCard key={(a, i)} kidsPageList={kidsPageList[i]} i={i}></KidsPageCard>
                )
              })  
          }
    </div>
  )
}

function KidsPageCard(props) {
  return (
    <div className='lists mt-5 mb-5'>
      <img className="vermo"
          src={ props.kidsPageList.img } />
      <img className='verpc'
          src={ props.kidsPageList.imgSrc } />
      <p className='bold mt-4 mb-1'>{ props.kidsPageList.smallTitle }</p>    
      <h1 className="bold">{ props.kidsPageList.title }</h1>
      <p className="left mt-4">{ props.kidsPageList.content }</p>
      <p className="left mb-4">{ props.kidsPageList.text }</p>
      <p className="left mb-4">{ props.kidsPageList.text2 }</p>
      <div className="left">
        <button className="blackbtn">구매하기</button>
      </div>
    </div>
  )
}

export default Kids;