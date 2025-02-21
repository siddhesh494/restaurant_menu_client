import { map } from 'lodash'
import React from 'react'

function ShowMenu({
  pageViseMenu
}) {
  console.log("pageViseMenu", pageViseMenu)
  return (
    <div>
      {map(pageViseMenu, (content) => {
        return (
          <div 
            className="mb-2 w-[400px] h-screen sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto"
          >
            {content}
          </div>
        )
      })}
      
    </div>
    
  )
}

export default ShowMenu