import React,{ useEffect, useState } from 'react'
import Usercard from "./usercard";

function Users() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
      

    }, []);
    useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
        console.log(data);
      }, [data]);
    
  return (
    <div className='flex mt-5 flex-wrap justify-center'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (
            <div className='mr-10'>
          <Usercard user={user}/>
          </div>
        ))
      )}

    </div>
  );
}
export default Users;
