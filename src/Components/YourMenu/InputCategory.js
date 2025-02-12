import React from 'react'
import Input from '../../UtilitiesComponents/Input'
import Textarea from '../../UtilitiesComponents/TextArea'
import Button from '../../UtilitiesComponents/Button'
import { Switch } from '../../UtilitiesComponents/Switch/Switch'
import VegIcon from '../../assests/PNG/veg.png'
import NonVegIcon from '../../assests/PNG/nonveg.png'

function InputDish({
  newDish,
  setNewDish,
  disabledDish
}) {
  return (
    <div className='flex flex-row justify-between mx-4 gap-2'>
      <div className='flex flex-col gap-1'>
        <Input 
          value={newDish.name}
          placeholder={"Dish name"}
          onChange={(e) => {
            setNewDish((prev) => ({...prev, name: e.target.value}) )
          }}
        />
        <Textarea 
          value={newDish.discription}
          placeholder={"Dish Discription"}
          onChange={(e) => {
            setNewDish((prev) => ({...prev, discription: e.target.value}) )
          }}
          className='border border-black rounded-md'
        />
        <div className='flex flex-row gap-1 items-center'>
          <div>
            <img 
              src={NonVegIcon}
              alt='NonVegIcon'
              width={20}
            />
          </div>
          <Switch 
            checked={newDish.isVeg}
            onCheckedChange={()=> {
              setNewDish((prev) => ({...prev, isVeg: !prev.isVeg}) )
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
            value={newDish.price}
            type='number'
            placeholder={"Dish Price"}
            onChange={(e) => {
              setNewDish((prev) => ({...prev, price: +e.target.value}) )
            }}
          />
        </div>
        <div className='w-full flex flex-row gap-2'>
          <Button
            size="sm"
            variant="blue"
            onClick={() => {

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