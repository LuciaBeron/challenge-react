import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoEnterOutline } from 'react-icons/io5';


export default function BlogList({ blogList }) {
    return (
        <div>
    
            {
                blogList.map(item => {
                    return (
                        <tr key={item.id} >
                            <td>{item.title}</td>
                            <td> <GrEdit /></td>
                            <td> <RiDeleteBinLine /> </td>
                            <td> <IoEnterOutline /> </td>
                        </tr>
                    )
              
                })
            } 
        </div>       
     
    )
}

