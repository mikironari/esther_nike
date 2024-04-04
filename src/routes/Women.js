import { useState } from 'react';
import '../css/Women.css';
import WomenData from '../data/WomenData';

function Women() {

  let [womenPageList] = useState(WomenData);

  return (
    <div className='womenPage'>
      <h4 className='bold'>NIKE WOMEN</h4>
      {
            womenPageList.map((a, i)=>{
              return (
                <WomenPageCard key={(a, i)} womenPageList={womenPageList[i]} i={i}></WomenPageCard>
                )
              })  
          }
    </div>
  )
}

function WomenPageCard(props) {
  return (
    <div className='lists mt-5 mb-5'>
      <img className="vermo"
          src={ props.womenPageList.img } />
      <img className='verpc'
          src={ props.womenPageList.imgSrc } />
      <p className='bold mt-4 mb-1'>{ props.womenPageList.smallTitle }</p>    
      <h1 className="bold">{ props.womenPageList.title }</h1>
      <p className="left mt-4">{ props.womenPageList.content }</p>
      <p className="left mb-4">{ props.womenPageList.text }</p>
      <p className="left mb-4">{ props.womenPageList.text2 }</p>
      <div className="left">
        <button className="blackbtn">구매하기</button>
      </div>
    </div>
  )
}

export default Women;