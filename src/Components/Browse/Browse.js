import { Download } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import baseURL from './../../APIService/baseURL.json'
import toast from 'react-hot-toast';


function Browse() {
  let appENV = process.env.REACT_APP_API_ENV || 'development'
  const navigate = useNavigate();
  const restaurantDetail = useSelector(store => store.user.restaurantDetails)

  const downloadQR = async () => {
    const url = `${baseURL[appENV].baseURL}/viewMenu/${restaurantDetail.restaurantID}`
    console.log("url", url)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&format=png`; // Dynamic format
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `Restaurant-Menu-QR.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up memory
      URL.revokeObjectURL(blobUrl);
  } catch (error) {
    toast.error("Error: Please try again later!")
    console.error("Error downloading QR code:", error);
  }
};

  return (
    <div className="flex min-h-screen ">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">Manage your restaurant easily!</p>

        {/* First Row: View Menu & Download QR */}
        <div className="flex gap-4 mb-6 mt-6">
          <button
            onClick={() => window.open(`/viewMenu/${restaurantDetail?.restaurantID}`, "_blank")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View Menu
          </button>
          <button
            onClick={() => navigate("/dashboard/menu")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Edit Menu
          </button>
          <button
            onClick={downloadQR}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md flex items-center gap-2 hover:bg-green-700 transition"
          >
            <Download size={18} /> Download QR
          </button>
        </div>

        {/* Second Row: Menu Views */}
        {/* <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <Eye size={24} className="text-gray-600 mr-3" />
          <p className="text-lg font-medium">Total Menu Views: <span className="text-blue-600 font-bold">{menuViews}</span></p>
        </div> */}
      </main>
    </div>
  )
}

export default Browse