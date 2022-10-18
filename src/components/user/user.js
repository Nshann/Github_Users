import "./user.css"

function User({user,deleteUser}){
  return(
    <div className="user_box">
      <img src={user.avatar_url} alt=""/>
      <h2>{user.login}</h2>
      <p>{user.type}</p>
      <a href={user.url}>{user.url}</a>
      <button onClick={() => deleteUser(user)}>Delete users</button>
    </div>
  )
}

export default User;