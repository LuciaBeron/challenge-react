import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoEnterOutline } from 'react-icons/io5';


export default function BlogList({ blogList }) {
    return (
        
        <table className="table">    
            {
                blogList.map(item => {
                    return (
                        <tr key={item.id} >
                            <td>{item.title}</td>
                            <td> <GrEdit /></td>
                            <td> <RiDeleteBinLine /> </td>
                            <td>
                                <LinkContainer to={`/posts/${item.id}`}>
                                    <IoEnterOutline />
                                </LinkContainer>
                            </td>
                        </tr>
                    )
              
                })
            } 
        </table>     
     
    )
}

