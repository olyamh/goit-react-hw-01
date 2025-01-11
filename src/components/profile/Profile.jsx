import React from "react";
import clsx from "clsx";
import css from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats:{followers, views, likes}}) => {
    return (
        <div className={clsx(css.userProfile)}>
  <div className={clsx(css.profileBlock)}>
    <img 
      src={image}
      alt="User avatar"
      className={clsx(css.userAva)}
    />
    <p className={clsx(css.nameTitle)}>{name}</p>
    <p className={clsx(css.text)}>@{tag}</p>
    <p className={clsx(css.text)}>{location}</p>
  </div>

  <ul className={clsx(css.listUl)}>
    <li className={clsx(css.listItem)}>
      <span className={clsx(css.spanTitle)}>Followers</span>
      <span className={clsx(css.spanNumber)}>{followers}</span>
    </li>
    <li className={clsx(css.listItem)}>
      <span className={clsx(css.spanTitle)}>Views</span>
      <span className={clsx(css.spanNumber)}>{views}</span>
    </li>
    <li className={clsx(css.listItem)}>
      <span className={clsx(css.spanTitle)}>Likes</span>
      <span className={clsx(css.spanNumber)}>{likes}</span>
    </li>
  </ul>
</div>
    )

}

export default Profile;