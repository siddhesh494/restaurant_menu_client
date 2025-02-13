import { useEffect, useState } from "react";
import Button from "../../UtilitiesComponents/Button";
import Input from "../../UtilitiesComponents/Input";
import { filter, map } from "lodash";
import MenuAccordion from "./MenuAccordion";
import Modal from "../../UtilitiesComponents/Modal";

export default function YourMenu() {
  const [showDeleteDishModal, setShowDeleteDishModal] = useState(false)
  const [selectedDishForDelete, setSelectedDishForDelete] = useState({})

  const [addMenuEnable, setAddMenuEnable] = useState(false)
  const [newMenu, setNewMenu] = useState("")
  const [menus, setMenus] = useState({
    Dining: {
      isOpen: true,
      menuList:{
        Starter: [
          {dishName: 'Chicken Lollipop', dishPrice: 1200, dishDescription: '', isVeg: false},
          {dishName: 'Paneer', dishPrice: 142, dishDescription: '', isVeg: true}
        ]
      }
    }
  });

  useEffect(() => {
    console.log("menus", menus)
  }, [menus])

  const toggleMenu = (menuType) => {
    menus[menuType].isOpen = !menus[menuType].isOpen
    setMenus({...menus})
  }
  const handleAddMenu = (menuType) => {
    menus[menuType] = {
      isOpen: true,
      menuList: {}
    }
    setMenus({...menus})
    disabledAddMenu()
  }

  const disabledAddMenu = () => {
    setNewMenu("")
    setAddMenuEnable(false)
  }

  const removeDish = () => {
    // console.log("selectedDishForDelete", selectedDishForDelete)
    const { menuTitle, category, dishName } = selectedDishForDelete
    const list = filter(menus[menuTitle].menuList[category], (dish) => {
      if(dish.dishName === dishName) return false
      return true
    })

    menus[menuTitle].menuList[category] = list
    setMenus({...menus})
    closeRemoveDishModal()
  }
  const closeRemoveDishModal = () => {
    setShowDeleteDishModal(false)
    setSelectedDishForDelete({})  
  }


  return (
    <>
    {/* delete dish modal */}
    <Modal 
      isOpen={showDeleteDishModal}
      onClose={() =>{
        closeRemoveDishModal()
      }}
      title="Do you want to delete this dish?"
      onConfirm={() => {
        removeDish()
      }}
    />

    {/* delete category modal */}

    {/* delete menu modal */}

    <div className="p-6 max-w-4xl mx-auto">

      {map(menus, (value, key) => {
        return (
          <MenuAccordion
            menuTitle={key}
            menuItems={value}
            onMenuToggle={toggleMenu}
            removeDish={removeDish}
            setMenus={setMenus}
            menus={menus}

            setShowDeleteDishModal={setShowDeleteDishModal}
            setSelectedDishForDelete={setSelectedDishForDelete}
          />
        )
      })}
      
      <hr  className='py-2'/>

      {/* add menu section */}
      {addMenuEnable ? (
        <div className='flex flex-row justify-between mx-4 gap-2 mb-5'>
          <div className='w-[50%]'>
            <Input
              value={newMenu}
              placeholder={"New Menu Name"}
              onChange={(e) => {
                setNewMenu(e.target.value)
              }}
            />
          </div>
          
          <div className='flex flex-row gap-2'>
            <Button
              size="sm"
              variant="blue"
              onClick={() => {
                handleAddMenu(newMenu)
              }}
              disabled={!newMenu}
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="red"
              onClick={disabledAddMenu}
            >
              Undo
            </Button>
          </div>
        </div>
      ) : null}

      {/* Add New Menu Button */}
      <div className="my-10">
        <Button 
          className="mb-4"
          onClick={() => {
            setAddMenuEnable(true)
          }}
        >
          + Add New Menu
        </Button>
      </div>
      
    </div>
    </>
  );
}
