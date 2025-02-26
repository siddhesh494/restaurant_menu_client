import React, { useEffect, useState } from 'react'
import { Input } from '../../UtilitiesComponents/Input/Input'
import { useSelector } from 'react-redux'
import { Textarea } from '../../UtilitiesComponents/TextArea/TextArea'
import Button from '../../UtilitiesComponents/Button/Button'
import toast from 'react-hot-toast'
import { getRestaurantDetails, updateRestaurantDetails } from '../../APIService/restaurant'
import { verifyEmail } from '../../APIService/auth'

function Profile() {

  const restaurantDetails = useSelector((store) => store.user.restaurantDetails)
  const [isSaveLoading, setIsSaveLoading] = useState(false)
  const [restaurantName, setRestaurantName] = useState("")
  const [restaurantEmail, setRestaurantEmail] = useState("")
  const [restaurantAddress, setRestaurantAddress] = useState("")

  useEffect(() => {
    if(restaurantDetails.restaurantID) getProfileDetails()
  }, [restaurantDetails])

  const verifyEmailFn = async () => {
    try {
      await verifyEmail()
      
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    }
  }

  const handleUpdateProfiledetails = async () => {
    setIsSaveLoading(true)
    try {
      const response = await updateRestaurantDetails({
        name: restaurantName,
        address: restaurantAddress
      })
      if(response) {
        toast.success(`Saved!`)
      }
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    } finally {
      setIsSaveLoading(false)
    }
  }

  const getProfileDetails = async () => {
    try {
      const response = await getRestaurantDetails({})
      if(response) {
        if(response.name) setRestaurantName(response.name)
        if(response.email) setRestaurantEmail(response.email)
        if(response.address) setRestaurantAddress(response.address)
      }
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    }
  }

  return (
    <div className="max-w-3xl my-10 mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#FF5722]">Profile Information</h2>

      {/* Restaurant Name */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-semibold">Restaurant Name</label>
        <Input 
          type="text" 
          placeholder="Enter restaurant name" 
          className="w-full" 
          value={restaurantName}
          onChange={(e) => {
            setRestaurantName(e.value)
          }}
          />
      </div>

      {/* Email with Verify Button */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex-1">
          <div className='flex flex-row justify-between'>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            {!restaurantDetails.isEmailVerified ? <p className='text-blue-500 underline cursor-pointer' onClick={verifyEmailFn}>Verify</p> : null}
          </div>
          <Input 
            type="email" 
            placeholder="Enter email" 
            className="w-full" 
            value={restaurantEmail}
            disabled={true}
            onChange={(e) => {
              setRestaurantEmail(e.value)
            }}
          />
        </div>
        <div>
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Address</label>
        <Textarea 
          type="text" 
          placeholder="Enter address" 
          className="w-full" 
          value={restaurantAddress}
          onChange={(e) => {
            setRestaurantAddress(e.target.value)
          }}
        />
      </div>

      <div className="flex justify-end mt-6">
        <Button 
          size="md" 
          variant="primary" 
          onClick={handleUpdateProfiledetails}
          isLoading={isSaveLoading}
        >
          Save Changes
        </Button>
      </div>

    </div>
  )
}

export default Profile