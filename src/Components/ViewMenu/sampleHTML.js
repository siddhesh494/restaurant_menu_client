import { map } from "lodash"
import VegIcon from '../../assests/PNG/veg.png'
import NonVegIcon from '../../assests/PNG/nonveg.png'

export const DishHtml = ({
  name, 
  description,
  isVeg,
  price
}) => {

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow">
        <div className="w-3/4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-green-600">{isVeg ? <img 
              src={VegIcon}
              alt='VegIcon'
            /> : <img 
            src={NonVegIcon}
            alt='NonVegIcon'
          /> }</span>
            <span className="text-gray-800 font-semibold">₹{price}</span>
        </div>
    </div>
  )
}

export const CategoryHTML = ({
  categoryName,
  dishList
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4 text-[#FF5722]">{categoryName}</h2>
      <div className="space-y-4">
        {map(dishList, (dish, ind) => {
          return (
              <DishHtml 
                key={ind}
                name={dish.dishName}
                description={dish.dishDescription || ""}
                isVeg={dish.isVeg}
                price={dish.dishPrice}
              />
          )
        })}
      </div>

    </div>
  )
}

export const menuHTML = ({
  categoryList,
  restaurantName
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <div className=" flex items-center justify-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">{restaurantName}</h1>
      </div>
      {map(categoryList, (dishList, categoryName) => {
        return (
          <CategoryHTML 
            key={categoryName}
            categoryName={categoryName}
            dishList={dishList}
          />
        )
      })}
    </div>
  )
}