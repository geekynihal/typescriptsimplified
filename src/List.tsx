import { render } from '@testing-library/react';
import React from 'react'
interface IState {
    people:{
    name:string,
    age:number,
    url:string,
    notes?:undefined|string
  }[]
  }


// export default function List(props:IState) {
//     return (
//         <div>
//             this is list component
//         </div>
//     )
// }




const List:React.FC<IState>=({people})=>{
    const renderList=()=>{
      return people.map((person)=>
         <>
         <li>{person.name}</li>
         <li>{person.age}</li>
         <li>{person.url}</li>
         <li>{person.notes}</li>
         </>
    )
}
return(
    <ul>
        
     {renderList()}
        
    </ul>
)
}
export default List;