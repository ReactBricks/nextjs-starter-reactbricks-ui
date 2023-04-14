const ErrorNoHeader = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-20 text-gray-600'>
      <h2 className='text-2xl text-red-600 font-semibold mb-8'>
        Warning: there is no header.
      </h2>
      <p className='mb-6'>React Bricks cannot find an entity for the header.</p>
    </div>
  )
}

export default ErrorNoHeader
