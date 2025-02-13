

import React, { useState } from 'react'
import Accordion from '../../UtilitiesComponents/Accordion'
import { map } from 'lodash'
import Dish from './Dish'
import Button from '../../UtilitiesComponents/Button'
import InputDish from './InputDish'
import Input from '../../UtilitiesComponents/Input'

function MenuAccordion({
  menuItems, 
  menuTitle,
  onMenuToggle,
  removeDish,
  setMenus,
  menus,

  setShowDeleteDishModal,
  setSelectedDishForDelete,
}) {

  const [addDishEnable, setAddDishEnable] = useState({})
  const [newDish, setNewDish] = useState({
    name: "",
    discription: "",
    price: 0,
    isVeg: true
  })
  const [addCategoryEnable, setAddCategoryEnable] = useState(false)
  const [newFoodCategory, setNewFoodCategory] = useState("")


  const disabledDish = () => {
    setAddDishEnable({})
    setNewDish({
      name: "",
      discription: "",
      price: 0,
      isVeg: true
    })
  }
  const disabledCategory = () => {
    setNewFoodCategory("")
    setAddCategoryEnable(false)
  }

  const handleAddMenuItem = (menuName, category, dish) => {
    menus[menuName].menuList[category].push({
      dishName: dish.name,
      dishPrice: dish.price,
      dishDescription: dish.discription,
      isVeg: dish.isVeg
    })
    setMenus({...menus})
    disabledDish()
  }

  const handleAddNewCategory = (menuName, category) => {
    menus[menuName].menuList[category] = []
    setMenus({...menus})
    disabledCategory()
  }

  return (
    <Accordion
      title = {menuTitle}
      isOpen={menuItems.isOpen}
      classes={{
        accordionContainer: "my-5"
      }}
      handleOnClick = {() => {
        onMenuToggle(menuTitle)
      }}
    >
      <div>
        {map(menuItems.menuList, (list, category) => {
          return (
            <div className='p-2'>
              <h2 className='font-semibold text-lg text-[#1E88E5]' >{category}</h2>
              {map(list, (dish) => {
                return (
                  <Dish
                    dish={dish} 
                    category={category}
                    menuTitle={menuTitle}
                    setShowDeleteDishModal={setShowDeleteDishModal}
                    setSelectedDishForDelete={setSelectedDishForDelete}
                  />
                )
              })}
              {
                addDishEnable && addDishEnable[category] ?
                <div className='my-5'>
                  <InputDish
                    newDish={newDish}
                    setNewDish={setNewDish}
                    disabledDish={disabledDish}
                    category={category}
                    menuTitle={menuTitle}
                    handleAddMenuItem={handleAddMenuItem}
                  />
                </div> : null
              }
              {!addDishEnable[category]? <div className='w-max ml-auto px-1 py-2'>
                <Button
                  size="sm"
                  variant="blue"
                  onClick={() => {
                    setAddDishEnable({
                      [category]: true
                    })
                  }}
                >
                  Add New Dish
                </Button>
              </div> : null}
            </div>
          )
        })}
        
        <hr  className='py-2'/>

        {/* food category section */}
        {addCategoryEnable ? (
          <div className='flex flex-row justify-between mx-4 gap-2 mb-5'>
            <div className='w-[50%]'>
              <Input
                value={newFoodCategory}
                placeholder={"Food Category"}
                onChange={(e) => {
                  setNewFoodCategory(e.target.value)
                }}
              />
            </div>
            
            <div className='flex flex-row gap-2'>
              <Button
                size="sm"
                variant="blue"
                disabled={!newFoodCategory}
                onClick={() => {
                  handleAddNewCategory(menuTitle, newFoodCategory)
                }}
              >
                Save
              </Button>
              <Button
                size="sm"
                variant="red"
                onClick={disabledCategory}
              >
                Undo
              </Button>
            </div>
          </div>
        ) : null}
        
        <div className='w-max ml-auto px-1'>
          <Button
            size="sm"
            variant="blue"
            onClick={() => {
              setAddCategoryEnable(true)
            }}
          >
            Add Food Category
          </Button>
        </div>
      </div>
    </Accordion>
  )
}

export default MenuAccordion