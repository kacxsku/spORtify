import React, {useState} from "react";
import '../styles/homePage.css'
import {userContext} from './../App.js'
import {useContext} from 'react'


function HomePage() {
    const {user, setUser} = useContext(userContext);
    const [page, setPage] = useState(1);

    function handlePageChange(pageName){
        alert(pageName)
        setPage(pageName)
    }

    function handleChange(event){
        const{name,value} = event.target;
        setUser( prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    return (
        <div className="PageEX">
            {/* // menu */}
            <p onClick={() => handlePageChange(1)}>set green</p>
            <p onClick={() => handlePageChange(2)}>set yellow</p>
            <p onClick={() => handlePageChange(3)}>set red</p>
            {/* content */}
            { page ===1 && <div className="green" ></div>}
            { page ===2 && <div className="yellow" onClick={() => handlePageChange(2)}></div>}
            { page ===3 && <div className="red" onClick={() =>  handlePageChange(3)}></div>}
        </div>
    )
}

export {HomePage};