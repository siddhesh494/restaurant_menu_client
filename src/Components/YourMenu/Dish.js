import React from 'react'
import VegIcon from '../../assests/PNG/veg.png'
import NonVegIcon from '../../assests/PNG/nonveg.png'
import DeleteIcon from '../../assests/PNG/delete.png'
import EditIcon from '../../assests/PNG/edit.png'
import InputDish from './InputDish'

function Dish({
  index,
  dish,
  category,
  menuTitle,
  menus,
  setMenus,
  setShowDeleteDishModal,
  setSelectedDishForDelete
}) {

  const handleOnEdit = () => {
    menus[menuTitle].menuList[category][index].isEdit = true
    setMenus({...menus})
  }
  const undoEdit = () => {
    menus[menuTitle].menuList[category][index].isEdit = false
    setMenus({...menus})
  }
  const editedDish = (value) => {
    menus[menuTitle].menuList[category][index] = value
    setMenus({...menus})
  }
  const handleUpdateMenuItem = (menuTitle, category, val) => {
    menus[menuTitle].menuList[category][index] = {...val, isEdit: false}
    setMenus({...menus})
  }
  return (
    <>
    {dish.isEdit ? (
      <InputDish
        newDish = {dish}
        setNewDish={editedDish}
        disabledDish={undoEdit}
        handleAddEditMenuItem={handleUpdateMenuItem}
        menuTitle={menuTitle}
        category={category}
      />
    ) : (

    <div className='flex flex-row justify-between mx-4 my-1'>
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
      
      <div className='flex flex-row gap-3 items-center'>
        <div>
          <p className='text-[#666666]'>{dish.dishPrice} Rs</p>
        </div>
        <div className='flex flex-row gap-1'>
          <img 
            src={EditIcon}
            alt="EditIcon"
            className='cursor-pointer'
            onClick={() => {
              handleOnEdit()
            }}
          />
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
    )}
    </>
  )
}

export default Dish