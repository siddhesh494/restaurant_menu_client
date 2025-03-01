import React from 'react'
import Button from '../../UtilitiesComponents/Button/Button'
import { isEmpty } from 'lodash'

function MenuSelection({
  menusList,
  selectMenuFn
}) {
  return (
    <div className="mb-2 w-[400px] h-screen bg-gray-200 sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto flex flex-col items-center justify-center">
      {
        !isEmpty(menusList) ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Select Menu</h1>
            <div className="w-2/3 flex flex-col gap-4">
              {menusList.map((menu, index) => (
                <Button 
                  key={index} 
                  variant="primary" 
                  size="lg"
                  onClick={() => {
                    selectMenuFn(menu)
                  }}
                >
                  {menu}
                </Button>
              ))}
            </div>
          </>
        ) : (
          null
        )
      }
      
    </div>
  )
}

export default MenuSelection