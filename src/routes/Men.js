import { useState } from 'react';
import '../css/Men.css';
import MenData from '../data/MenData';

function Men() {

  let [menPageList] = useState(MenData);

  return (
    <div className='menPage'>
      <h4 className='bold'>NIKE MEN</h4>
      {
            menPageList.map((a, i)=>{
              return (
                <MenPageCard key={(a, i)} menPageList={menPageList[i]} i={i}></MenPageCard>
                )
              })  
          }
    </div>
  )
}

function MenPageCard(props) {
  return (
    <div className='lists mt-5 mb-5'>
      <img className="vermo"
          src={ props.menPageList.img } />
      <img className='verpc'
          src={ props.menPageList.imgSrc } />
      <p className='bold mt-4 mb-1'>{ props.menPageList.smallTitle }</p>    
      <h1 className="bold">{ props.menPageList.title }</h1>
      <p className="left mt-4">{ props.menPageList.content }</p>
      <p className="left mb-4">{ props.menPageList.text }</p>
      <p className="left mb-4">{ props.menPageList.text2 }</p>
      <div className="left">
        <button className="blackbtn">구매하기</button>
      </div>
    </div>
  )
}

export default Men;