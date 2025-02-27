import { useContext } from 'react';
import { Link } from 'react-router-dom'
import UsersContext from './UsersContext';
import DetailsContext from './DetailsContext';

function Home() {
  let users = useContext(UsersContext);
  let { setDetails } = useContext(DetailsContext);

  return(
    <>
      <h3>Whose address would you like?</h3>
      <ul>
          {users.map((elm, index)=> {
            return(
              <li key={index}>
                <Link to={`/details/${elm.login.username}`} onClick={() => (
                  setDetails({title: elm.name.title, fullName: `${elm.name.first} ${elm.name.last}`, address: `${elm.location.street.number} ${elm.location.street.name}` })
                )}>
                  {elm.name.first} {elm.name.last}
                </Link>
              </li>
          )})}
       </ul>
    </>
)
}

export {Home}