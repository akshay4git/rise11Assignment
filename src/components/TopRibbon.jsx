import React from 'react'
import Person from '@mui/icons-material/Person'
import Notifications from '@mui/icons-material/Notifications'

const TopRibbon = () => {
  return (
    <main className=' flex h-12'>
        <div className='absolute right-0 flex p-3 gap-4'>
          <Person className="text-blue-600"/>  
          <Notifications className="text-blue-600"/>
        </div>
    </main>
  )
}

export default TopRibbon