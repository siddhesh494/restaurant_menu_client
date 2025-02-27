

import React, { useState } from 'react'
import Accordion from '../../UtilitiesComponents/Accordion'
import { map } from 'lodash'
import Dish from './Dish'
import Button from '../../UtilitiesComponents/Button'
import InputDish from './InputDish'
import Input from '../../UtilitiesComponents/Input'
import DeleteIcon from '../../assests/PNG/delete.png'
import EditIcon from '../../assests/PNG/edit.png'

function MenuAccordion({
  menuTitle,
  menuItems,
  onMenuToggle,
  setMenus,
  menus,

  setShowDeleteDishModal,
  setSelectedDishForDelete,

  setShowDeleteCategoryConfirmation,
  setSelectedCategoryForDelete,

  setShowDeleteMenuConfirmation,
  setSelectedMenuForDelete,
}) {

  const [addDishEnable, setAddDishEnable] = useState({})
  const [newDish, setNewDish] = useState({
    dishName: "",
    dishDescription: "",
    dishPrive: 0,
    isVeg: true
  })
  const [addCategoryEnable, setAddCategoryEnable] = useState(false)
  const [newFoodCategory, setNewFoodCategory] = useState("")

  const [editCurrentCategory, setEditCurrentCategory] = useState({})
  const [editCategoryValue, setEditCategoryValue] = useState("")

  const disabledDish = () => {
    setAddDishEnable({})
    setNewDish({
      dishName: "",
      dishDescription: "",
      dishPrive: 0,
      isVeg: true
    })
  }
  const disabledCategory = () => {
    setNewFoodCategory("")
    setAddCategoryEnable(false)
  }

  const handleAddMenuItem = (menuName, category, dish) => {
    menus[menuName].menuList[category].push({
      dishName: dish.dishName,
      dishPrice: dish.dishPrice,
      dishDescription: dish.dishDescription,
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

  const undoEditCategory = () => {
    setEditCategoryValue("")
    setEditCurrentCategory({})
  }

  const saveEditCategory = (curCategory) => {
    menus[menuTitle].menuList[editCategoryValue] = [...menus[menuTitle].menuList[curCategory]]
    delete menus[menuTitle].menuList[curCategory]
    setMenus({...menus})
    undoEditCategory()
  }

  return (
    <Accordion
      showDelete={true}
      onDelete={() => {
        setSelectedMenuForDelete(menuTitle)
        setShowDeleteMenuConfirmation(true)
      }}
      title = {menuTitle}
      isOpen={menuItems.isOpen}
      classes={{
        accordionContainer: "my-9"
      }}
      handleOnClick = {() => {
        onMenuToggle(menuTitle)
      }}
    >
      <div>
        {map(menuItems.menuList, (list, category) => {
          return (
            <div className='px-3 py-4' key={category}>
              <div className='flex flex-row justify-between mb-1 mr-5'>
                {editCurrentCategory[category] ? (
                  <div className='flex flex-row justify-between mx-4 gap-2 mb-5'>
                    <div className='w-[50%]'>
                      <Input
                        value={editCategoryValue}
                        placeholder={"Food Category"}
                        onChange={(e) => {
                          setEditCategoryValue(e.target.value)
                          // setNewFoodCategory(e.target.value)
                        }}
                      />
                    </div>
                    
                    <div className='flex flex-row gap-2'>
                      <Button
                        size="sm"
                        variant="blue"
                        disabled={!editCategoryValue}
                        onClick={() => {
                          saveEditCategory(category)
                          // handleAddNewCategory(menuTitle, newFoodCategory)
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="red"
                        onClick={() => {
                          undoEditCategory()
                        }}
                      >
                        Undo
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className='font-semibold text-2xl text-[#FF5722]' >{category}</h2>
                    <div className='flex flex-row gap-1'>
                      <img 
                        src={EditIcon}
                        alt="EditIcon"
                        className='cursor-pointer'
                        onClick={() => {
                          setEditCategoryValue(category)
                          setEditCurrentCategory({
                            [category]: true 
                          })
                        }}
                      />
                      <img 
                        src={DeleteIcon}
                        alt="DeleteIcon"
                        className='cursor-pointer'
                        onClick={() => {
                          setSelectedCategoryForDelete({
                            menuTitle: menuTitle,
                            category: category
                          })
                          setShowDeleteCategoryConfirmation(true)
                        }}
                      />
                    </div>
                  </>
                )}
                
              </div>
              <hr  className='py-1 '/>

              {map(list, (dish, index) => {
                return (
                  <Dish
                    key={index}
                    dish={dish} 
                    category={category}
                    menuTitle={menuTitle}
                    menus={menus}
                    setMenus={setMenus}
                    setShowDeleteDishModal={setShowDeleteDishModal}
                    setSelectedDishForDelete={setSelectedDishForDelete}
                  />
                )
              })}

              {/* add new dish input section */}
              {
                addDishEnable && addDishEnable[category] ?
                <div className='py-3 bg-gray-50 rounded-lg shadow my-3'>
                  <InputDish
                    newDish={newDish}
                    setNewDish={setNewDish}
                    disabledDish={disabledDish}
                    category={category}
                    menuTitle={menuTitle}
                    handleAddEditMenuItem={handleAddMenuItem}
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