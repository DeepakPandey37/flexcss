import React from 'react'
import Translate from '../common/Translate'
import Getlocation from '../common/Getlocation'

const FunctionsTab = () => {
  return (
    <div className='flex gap-5'>
      <Translate/>
      <Getlocation/>
    </div>
  )
}

export default FunctionsTab