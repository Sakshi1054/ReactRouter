import React, { useEffect , useState} from 'react';
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Githun followers : {data.followers}
      <img src={data.avatar_url} alt="pic" width={300} />
    </div>
  )
}

export default Github;

export const GithubInfo = () => {
    const response = fetch('https://api.github.com/users/Sakshi1054');
    return response;
}
