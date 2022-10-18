import { type } from '@testing-library/user-event/dist/type';
import './Header.css'

function Header({text, setText}) {
  return(
    <header className="header">
      <div className="title_box">
        <h1>GitHub Users</h1>
      </div>
      <form className="form">
        <input type='text' placeholder='Search user...' className='input' value={text} onChange={(e)=> setText(e.target.value)}/>
        <button>Delete</button>
        
      </form>
    </header>
  )
}

export default Header;