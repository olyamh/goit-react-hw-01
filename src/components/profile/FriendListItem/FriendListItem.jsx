import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({avatar, name, isOnline}) =>{
    return (
        <div className={clsx(css.friendCard)}>
  <img src={avatar} alt="Avatar" width="48" className={clsx(css.imgAva)}/>
  <p className={clsx(css.friendName)}>{name}</p>
  <p className={clsx(css.status, isOnline ? css.green : css.red)}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}

export default FriendListItem