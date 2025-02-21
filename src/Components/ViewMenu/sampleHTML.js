import { map } from "lodash"
import VegIcon from '../../assests/PNG/veg.png'
import NonVegIcon from '../../assests/PNG/nonveg.png'

export const html = (
  <div class="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">

    {/* <!-- Category: Rice --> */}
    <div class="mb-6">
        <h2 class="text-xl font-semibold border-b-2 pb-2 mb-4 text-[#FF5722]">🍚 Rice</h2>
        
        <div class="space-y-4">
            {/* <!-- Dish 1 --> */}
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow gap-1">
                <div>
                    <h3 class="text-lg font-semibold">Fried Rice</h3>
                    <p class="text-sm text-gray-600"> Classic fried rice with vegetables and soy sauce. Classic fried rice with vegetables and soy sauce.</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-green-600">🟢</span>
                    <span class="text-gray-800 font-semibold">₹200</span>
                </div>
            </div>

            {/* <!-- Dish 2 --> */}
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow gap-1">
                <div>
                    <h3 class="text-lg font-semibold">Chicken Biryani</h3>
                    <p class="text-sm text-gray-600">Spicy chicken biryani with aromatic basmati rice.</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-red-600">🔴</span>
                    <span class="text-gray-800 font-semibold">₹350</span>
                </div>
            </div>

        </div>
    </div>

    {/* <!-- Category: Noodles --> */}
    <div class="mb-6">
        <h2 class="text-xl font-semibold border-b-2 pb-2 mb-4 text-[#FF5722]">🍜 Noodles</h2>
        
        <div class="space-y-4">
            {/* <!-- Dish 1 --> */}
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow gap-1">
                <div>
                    <h3 class="text-lg font-semibold">Hakka Noodles</h3>
                    <p class="text-sm text-gray-600">Stir-fried noodles with veggies and soy sauce.</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-green-600">🟢</span>
                    <span class="text-gray-800 font-semibold">₹180</span>
                </div>
            </div>

            {/* <!-- Dish 2 --> */}
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow gap-1">
                <div>
                    <h3 class="text-lg font-semibold">Egg Noodles</h3>
                    <p class="text-sm text-gray-600">Noodles with scrambled eggs and seasonings.</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-red-600">🔴</span>
                    <span class="text-gray-800 font-semibold">₹220</span>
                </div>
            </div>

            {/* <!-- Dish 3 --> */}
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow gap-1">
                <div>
                    <h3 class="text-lg font-semibold">Egg Noodles</h3>
                    <p class="text-sm text-gray-600">Noodles with scrambled eggs and seasonings.</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-red-600">🔴</span>
                    <span class="text-gray-800 font-semibold">₹220</span>
                </div>
            </div>

            {/* <!-- Dish 4 --> */}
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow gap-1">
                <div>
                    <h3 class="text-lg font-semibold">Egg Noodles</h3>
                    <p class="text-sm text-gray-600">Noodles with scrambled eggs and seasonings.</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-red-600">🔴</span>
                    <span class="text-gray-800 font-semibold">₹220</span>
                </div>
            </div>
        </div>
    </div>

    
</div>
)

export const DishHtml = ({
  name, 
  description,
  isVeg,
  price
}) => {

  return (
    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow">
        <div className="w-3/4">
            <h3 class="text-lg font-semibold">{name}</h3>
            <p class="text-sm text-gray-600">{description}</p>
        </div>
        <div class="flex items-center gap-3">
            <span class="text-green-600">{isVeg ? <img 
              src={VegIcon}
              alt='VegIcon'
            /> : <img 
            src={NonVegIcon}
            alt='NonVegIcon'
          /> }</span>
            <span class="text-gray-800 font-semibold">₹{price}</span>
        </div>
    </div>
  )
}

export const CategoryHTML = ({
  categoryName,
  dishList
}) => {
  return (
    <div class="mb-6">
      <h2 class="text-xl font-semibold border-b-2 pb-2 mb-4 text-[#FF5722]">{categoryName}</h2>
      <div class="space-y-4">
        {map(dishList, (dish) => {
          return (
              <DishHtml 
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
  categoryList
}) => {
  console.log("categoryList",categoryList)
  return (
    <div class="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      {map(categoryList, (dishList, categoryName) => {
        return (
          <CategoryHTML 
            categoryName={categoryName}
            dishList={dishList}
          />
        )
      })}
    </div>
  )
}