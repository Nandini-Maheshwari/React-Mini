import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

//When you have a route that needs to fetch data 
//(for example, from an API) before rendering a component,
//you define a function (called the "loader") for that route.

// useLoaderData hook is used to access the data loaded by the loader

function Github () {
  const data = useLoaderData()

  // const [data, setData] = useState(0);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/nandini-maheshwari')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data);
  //     console.log(data);
  //   })
  // }, [])

  return (
    <div className="text-center m-4 bg-orange-400 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile pic" width={300} />
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/nandini-maheshwari')
  return response.json()
}

//When the Github component is rendered due to a route change,
//useLoaderData triggers the associated loader function (githubInfoLoader in this case).
//The loader function, being asynchronous, fetches data from the GitHub API.