import React from 'react'
import { useState } from 'react'
import { IState } from "./App"
interface IProps {    //the props we r exportng we have to declare its type ot interface in the exported component
    people: IState["people"]
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        notes?: string|undefined;
    }[]>>               //to know its type go to app.js and hovwer over the sent props ull get that
}
export default function Add_to_list({people,setPeople}: IProps) {
    const [input, useInput] = useState({
        name: "",
        age: "",
        url: "",
        notes: ""
    })
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>//got from 26th line and html text are error because of text area refer 44th line
    ): void => {
        useInput({
            ...input,
            [e.target.name]: e.target.value//we used w.target.value to prevent repetion of handle change in the place of [e.target.value] we can write name,age,note or url
        })
    }
    const Click = (): void => {
      
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),//well get the erro because input tag age can be string also
                url:input.url,
                notes:input.notes
            }
        ])
        useInput({
            name:"",
            age:"",
            url:"",
            notes:""
        })
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Add name"
                value={input.name}
                // onChange={(e)=>{}}//how to get the data type of "e" just write this function hover over it and copy this above
                onChange={HandleChange}
                name="name" />
            <input
                type="number"
                placeholder="Add age"
                value={input.age}
                onChange={HandleChange}
                name="age" />
            <input
                type="text"
                placeholder="Add url"
                value={input.url}
                onChange={HandleChange}
                name="url" />
            <textarea
                placeholder="Add notes"
                value={input.notes}
                onChange={HandleChange}//it was showing error because e type was declared above which was input
                name="notes" />
            <button onClick={Click}>click me</button>
        </div>
    )
}
