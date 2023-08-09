import React from 'react';

const SingleBlogPage = ({params}) => {
    const [year, id] = params.segments
    console.log(params.segments)
    return (
        <div>
          <h1>this is {year} of {id}</h1>  
        </div>
    );
};

export default SingleBlogPage;
