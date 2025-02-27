import { useContext } from 'react';
import DetailsContext from './DetailsContext';

function Details() {
  let { details } = useContext(DetailsContext);

  return(
    <>
    {details.title == '' ? <p>Person not selected</p> :
      <>
        <h3>{details.title} {details.fullName}</h3>
        <p>Lives at {details.address}.</p>
      </>
  }
    </>
  )
}

export {Details}