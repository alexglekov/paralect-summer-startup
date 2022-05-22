import { useSelector } from 'react-redux'
import classes from '../Profile/Profile.module.css'

function Profile() {

    const nick = useSelector(state => state.nick.nick) 
    const followers = useSelector(state => state.profile.followers.length)
    const following = useSelector(state => state.profile.following)
    const name = useSelector(state => state.profile.name)
    const avatar_url = useSelector(state => state.profile.avatar)
    let followersShort = followers
    let followingShort = following

    if(followersShort > 1000){
        followersShort = String((followers/1000).toFixed(1)) + "k"
    }
    if(followingShort > 1000){
        followingShort = String((followers/1000).toFixed(1)) + "k"
    }

  return (
    <div className={classes.profile}>
        <div className={classes.profileAvatar}>
            <img className={classes.profilePic} src={avatar_url} alt='profilePicture' />
        </div>
        <div className={classes.profileDescription}>
            <p className={classes.profileDescriptionName}>
                {name}
            </p>
            <p className={classes.profileDescriptionNick}>
                <a className={classes.profileDescriptionNickLink} href={`https://github.com/${nick}`} target="_blank">{nick}</a>
            </p>
            <div className={classes.profileDescriptionFollowWrapper}>
                <div className={classes.profileDescriptionFollow}>
                    <img className={classes.profileDescriptionFollowPic} src='img/shared.png' alt='shared' />
                    <p className={classes.profileDescriptionFollowText}>{followersShort} followers</p>
                </div>
                <div className={classes.profileDescriptionFollow}>
                    <img className={classes.profileDescriptionFollowPic} src='img/provate.png' alt='provate' />
                    <p className={classes.profileDescriptionFollowText}>{followingShort} following</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile