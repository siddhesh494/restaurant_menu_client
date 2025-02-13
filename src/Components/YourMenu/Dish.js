import React from 'react'
import VegIcon from '../../assests/PNG/veg.png'
import NonVegIcon from '../../assests/PNG/nonveg.png'
import DeleteIcon from '../../assests/PNG/delete.png'

function Dish({
  dish,
  category,
  menuTitle,
  setShowDeleteDishModal,
  setSelectedDishForDelete
}) {
  return (
    <div className='flex flex-row justify-between mx-4'>
      <div className='flex flex-row gap-2 items-center'>
        <div>
          {dish.isVeg ? 
            <img 
              src={VegIcon}
              alt='VegIcon'
            /> :
            <img 
              src={NonVegIcon}
              alt='NonVegIcon'
            /> 
          }
        </div>
        <div>
          <p className='text-[#333333] font-medium'>{dish.dishName}</p>
          <p className='text-[#333333] font-thin text-sm'>{dish.dishDescription}</p>
        </div>
      </div>
      
      <div className='flex flex-row gap-2 items-center'>
        <div>
          <p className='text-[#666666]'>{dish.dishPrice} Rs</p>
        </div>
        <div>
          <img 
            src={DeleteIcon}
            alt="DeleteIcon"
            className='cursor-pointer'
            onClick={() => {
              setShowDeleteDishModal(true)
              setSelectedDishForDelete({
                menuTitle: menuTitle,
                category: category,
                dishName: dish.dishName
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dish