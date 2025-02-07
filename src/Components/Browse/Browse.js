import { Download, Eye, LogOut, Menu, QrCode, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Browse() {
  const navigate = useNavigate();
  const [menuViews, setMenuViews] = useState(124); // Example count

  const downloadQR = () => {
    const qrUrl = "https://your-qr-image-url.com/qr.png"; // Replace with dynamic QR URL
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "Restaurant-Menu-QR.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">Manage your restaurant easily!</p>

        {/* First Row: View Menu & Download QR */}
        <div className="flex gap-4 mb-6 mt-6">
          <button
            onClick={() => window.open(`/viewMenu/21212`, "_blank")}
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
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <Eye size={24} className="text-gray-600 mr-3" />
          <p className="text-lg font-medium">Total Menu Views: <span className="text-blue-600 font-bold">{menuViews}</span></p>
        </div>
      </main>
    </div>
  )
}

export default Browse