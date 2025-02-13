import React, { useEffect, useState } from 'react'
import Input from '../../UtilitiesComponents/Input'
import Textarea from '../../UtilitiesComponents/TextArea'
import Button from '../../UtilitiesComponents/Button'
import { Switch } from '../../UtilitiesComponents/Switch/Switch'
import VegIcon from '../../assests/PNG/veg.png'
import NonVegIcon from '../../assests/PNG/nonveg.png'

function InputDish({
  newDish,
  setNewDish,
  disabledDish,
  handleAddEditMenuItem,
  category,
  menuTitle
}) {
  const [dishValue, setDishValue] = useState({...newDish})
  useEffect(() => {
    setDishValue({...newDish})
  }, [newDish])

  return (
    <div className='flex flex-row justify-between mx-4 gap-2'>
      <div className='flex flex-col gap-1'>
        <Input 
          value={dishValue.dishName}
          placeholder={"Dish name"}
          onChange={(e) => {
            dishValue.dishName = e.target.value
            setDishValue({...dishValue})
            // setDishValue((prev) => ({...prev, dishName: e.target.value}) )
          }}
        />
        <Textarea 
          value={dishValue.dishDescription}
          placeholder={"Dish Discription"}
          onChange={(e) => {
            dishValue.dishDescription = e.target.value
            setDishValue({...dishValue})
            // setDishValue((prev) => ({...prev, dishDescription: e.target.value}) )
          }}
          className='border border-black rounded-md'
        />
        <p className={`font-thin text-xs text-right ${dishValue.dishDescription.length > 100 ? 'text-red-600 font-normal' : ''}`}>Max 100 words</p>
        <div className='flex flex-row gap-1 items-center'>
          <div>
            <img 
              src={NonVegIcon}
              alt='NonVegIcon'
              width={20}
            />
          </div>
          <Switch 
            checked={dishValue.isVeg}
            onCheckedChange={()=> {
              dishValue.isVeg = !dishValue.isVeg
              setDishValue({...dishValue})
              // setDishValue((prev) => ({...prev, isVeg: !prev.isVeg}) )
            }}
          />
          <div>
            <img 
              src={VegIcon}
              alt='VegIcon'
              width={20}
            />
          </div>
          
        </div>
        

      </div>
      
      <div className='flex flex-col gap-2 items-center'>
        <div>
          <Input 
            value={dishValue.dishPrice}
            type='number'
            placeholder={"Dish Price"}
            onChange={(e) => {
              dishValue.dishPrice = e.target.value
              setDishValue({...dishValue})
              // setDishValue((prev) => ({...prev, dishPrice: +e.target.value}) )
            }}
          />
        </div>
        <div className='w-full flex flex-row gap-2'>
          <Button
            size="sm"
            variant="blue"
            disabled={!(dishValue.dishName && dishValue.dishPrice && dishValue.dishDescription.length <= 100)}
            onClick={() => {
              handleAddEditMenuItem(menuTitle, category, dishValue)
            }}
          >
            Save
          </Button>
          <Button
            size="sm"
            variant="red"
            onClick={disabledDish}
          >
            Undo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InputDish