import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <div className="header__logo">
                <img src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
                 alt=""
                 width="90"
                 height="30"
                 className="logo"
                 />
                 <div className="header__menu">
                <p>Home</p>
                <p>Tv Shows</p>
                <p>Movies</p>
                <p>Kids</p>
                 </div>
                
            </div>
           
            </div>
            <div className="header__right">
                <div className="header__input">
                 <SearchIcon className="search"/>
               <input type="text" placeholder="Search"/> 
                </div>
                <Avatar className="avatar" src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/60442986_1661796113964591_7519028487544854068_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=HNuBxY3b_8kAX-d8SH_&tp=18&oh=5839600061f630b86f9b9753d717fe0f&oe=5FCDEFC4"/>
            </div>
            
            

        </div>
    )
}

export default Header
