import { forEach } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMenuDetails } from '../../APIService/menu'
import toast from 'react-hot-toast'
import MenuSelection from './MenuSelection'
import { menuHTML } from './sampleHTML'

function ViewMenu() {

  const { restaurantID } = useParams()
  const [menus, setMenus] = useState({})
  const [pageViseMenu, setPageViseMenu] = useState(<h1>Loading</h1>)
  const [selectedMenu, setSelectedMenu] = useState(null)

  useEffect(() => {
    restaurantID && getMenu(restaurantID)
  }, [restaurantID])

  useEffect(() => {
    selectedMenu && generatePageViseContent(selectedMenu)
  }, [selectedMenu])

  const getMenu = async (restaurantID) => {
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
        if(Object.keys(menuList).length === 1) {
          setSelectedMenu(menuList[Object.keys(menuList)[0]])
        }
      }
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    }
  }

  const generatePageViseContent = (selectedMenu) => {
    const html = menuHTML({categoryList: selectedMenu.menuList})
    setPageViseMenu(html)
  }

  const selectMenuFn = (menuTitle) => {
    if(menus[menuTitle]) {
      setSelectedMenu(menus[menuTitle])
    } else {
      console.log("Invalid menu selected")
    }
  }

  return (
    <div>
      {Object.keys(menus).length === 1 || selectedMenu ? (
        pageViseMenu
      ) : (
        <div>
          <MenuSelection 
            menusList={Object.keys(menus)}
            selectMenuFn={selectMenuFn}
          />
        </div>
      )}
      
    </div>
  )
}

export default ViewMenu