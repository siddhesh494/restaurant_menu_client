import { useEffect, useState } from "react";
import Button from "../../UtilitiesComponents/Button";
import Input from "../../UtilitiesComponents/Input";
import { filter, forEach, map } from "lodash";
import MenuAccordion from "./MenuAccordion";
import Modal from "../../UtilitiesComponents/Modal";
import { getMenuDetails, updateMenuDetails } from "../../APIService/menu";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function YourMenu() {

  const restaurantDetail = useSelector(store => store.user.restaurantDetails)

  const [isGetLoading, setIsGetLoading] = useState(false)
  const [isSaveLoading, setIsSaveLoading] = useState(false)

  const [showDeleteDishModal, setShowDeleteDishModal] = useState(false)
  const [selectedDishForDelete, setSelectedDishForDelete] = useState({})

  const [showDeleteCategoryConfirmation, setShowDeleteCategoryConfirmation] = useState(false)
  const [selectedCategoryForDelete, setSelectedCategoryForDelete] = useState({})

  const [showDeleteMenuConfirmation, setShowDeleteMenuConfirmation] = useState(false)
  const [selectedMenuForDelete, setSelectedMenuForDelete] = useState("")

  const [addMenuEnable, setAddMenuEnable] = useState(false)
  const [newMenu, setNewMenu] = useState("")
  const [menus, setMenus] = useState({});

  useEffect(() => {
    console.log("restaurantDetail", restaurantDetail)
    restaurantDetail.restaurantID && getMenu(restaurantDetail.restaurantID)
  }, [restaurantDetail])

  const getMenu = async (restaurantID) => {
    console.log("restaurantID", restaurantID)

    setIsGetLoading(true)
    try {
      const response = await getMenuDetails({
        restaurantID: restaurantID
      })
      if(response) {
        const menuList = {}
        forEach(response, (menu) => {
          menuList[menu.menuName] = {
            isOpen: true,
            menuList: {}
          }
          forEach(menu.menuItems, (category) => {
            menuList[menu.menuName].menuList[category.categoryName] = []

            forEach(category.categoryItems, (dish) => {
              menuList[menu.menuName].menuList[category.categoryName].push({
                dishName: dish.dishName, 
                dishPrice: dish.price, 
                dishDescription: dish.dishDescription, 
                isVeg: dish.isVeg
              })
            })
          })


        })

        setMenus({...menuList})
      }
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    } finally {
      setIsGetLoading(false)
    }
  }

  const updateMenu = async () => {
    setIsSaveLoading(true)
    try {
      const body = {
        menuDetails: []
      }
      forEach(menus, (menuVal, menuName) => {
        const m = {
          menuName: menuName,
          menuItems: []
        }
        forEach(menuVal.menuList, (categoryVal, categoryName) => {
          const curCategory = {
            categoryName: categoryName,
            categoryItems: []
          }
          forEach(categoryVal, (dish) => {
            curCategory.categoryItems.push({
              dishName: dish.dishName,
              price: dish.dishPrice,
              isVeg: dish.isVeg,
              dishDescription: dish.dishDescription || null
            })
          })
          m.menuItems.push(curCategory)
        })
        body.menuDetails.push(m)
      })
      await updateMenuDetails(body)
      toast.success("Menu updated successfully!")

    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    } finally {
      setIsSaveLoading(false)
    }
  }

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

  // category handle
  const closeRemoveCategoryModal = () => {
    setShowDeleteCategoryConfirmation(false)
    setSelectedCategoryForDelete({})
  }
  const removeCategory = () => {
    const { menuTitle, category  } = selectedCategoryForDelete
    delete menus[menuTitle].menuList[category]
    setMenus({...menus})
    closeRemoveCategoryModal()
  }

  // menu handle
  const closeRemoveMenuModal = () => {
    setShowDeleteMenuConfirmation(false)
    setSelectedMenuForDelete("")
  }
  const removeMenu = () => {
    delete menus[selectedMenuForDelete]
    closeRemoveMenuModal()
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
    <Modal 
      isOpen={showDeleteCategoryConfirmation}
      onClose={() =>{
        closeRemoveCategoryModal()
      }}
      title="Do you want to delete this Category?"
      onConfirm={() => {
        removeCategory()
      }}
    />

    {/* delete menu modal */}
    <Modal 
      isOpen={showDeleteMenuConfirmation}
      onClose={() =>{
        closeRemoveMenuModal()
      }}
      title="Do you want to delete this Menu?"
      onConfirm={() => {
        removeMenu()
      }}
    />


    <div className="p-6 max-w-4xl mx-auto ">
      <div className='w-1/2 flex flex-row gap-2 ml-auto'>
        <Button
          size="md"
          variant="blue"
          isLoading={isSaveLoading}
          onClick={() => {
            updateMenu()
          }}
        >
          Save
        </Button>
        <Button
          size="md"
          variant="red"
          disabled={isSaveLoading}
          onClick={() => {
            getMenu(restaurantDetail.restaurantID)
          }}
        >
          Undo
        </Button>
      </div>

      {isGetLoading ? (
        <div className="mt-10 flex items-center justify-center h-full w-full">
          <Loader2 className="h-10 w-10 text-[#FF5722] animate-spin" />
        </div>
      ) : (
        map(menus, (value, key) => {
          return (
            <MenuAccordion
              key={key}
              menuTitle={key}
              menuItems={value}
              onMenuToggle={toggleMenu}
              removeDish={removeDish}
              setMenus={setMenus}
              menus={menus}

              setShowDeleteDishModal={setShowDeleteDishModal}
              setSelectedDishForDelete={setSelectedDishForDelete}

              setShowDeleteCategoryConfirmation={setShowDeleteCategoryConfirmation}
              setSelectedCategoryForDelete={setSelectedCategoryForDelete}

              setShowDeleteMenuConfirmation={setShowDeleteMenuConfirmation}
              setSelectedMenuForDelete={setSelectedMenuForDelete}
            />
          )
        })
      )}

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
