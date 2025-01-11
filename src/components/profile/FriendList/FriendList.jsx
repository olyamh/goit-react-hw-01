import React from "react";
import css from "./FriendList.module.css"
import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) =>{
    return(
        <ul className={clsx(css.friendList)}>
            {friends.map((friend)=>{
                return (
                    <li key={friend.id}>
                        <FriendListItem 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        />
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default FriendList