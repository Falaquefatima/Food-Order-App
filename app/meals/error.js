'use client'

const error = ({error}) => {
  return (
    <main className='error'>
      <h1>An error occurred !</h1>
      <p>Failed to fetch meal data</p>
    </main>
  );
}

export default error;
