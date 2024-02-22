import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './style/DropDown.css'

const DropDown = ({ data, tag, link }) => {
    console.log("Deopdown data - ", data)
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            window.location.href = 'http://localhost:8000/logout';
        }
    };

    return (
        <div className="dropdown">

            <Link to={link} style={{ textDecoration: 'inherit', color: 'inherit' }} onMouseOver={() => { setDropdownVisibility(true) }} onMouseLeave={() => { setDropdownVisibility(false) }}>
                {tag == 'Logout' ?
                    <span style={{ margin: 15 }} onClick={handleLogout}>
                        {tag}
                    </span>
                    : <span style={{ margin: 15 }}>
                        {tag}
                    </span>
                }
            </ Link>
            {isDropdownVisible && (
                <div className="dropdown-content">
                    {/* Your dropdown content goes here */}
                    {/* <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Role: User</p> */}
                    {/* Add more profile details as needed */}
                    <>
                        {data?.map((item) => {
                            console.log("item - ", item);
                            return <p>{item}</p>;
                        })}
                    </>
                </div>
            )}
        </div>
    )
}

export default DropDown