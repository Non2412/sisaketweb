'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SHIRT_TYPES = ['เสื้อแบบที', 'เสื้อโพโล']

const SIZES_SHIRT = ['L', 'M', 'XL', '3XL', 'S', '2XL', '4XL', '5XL', '6XL', '7XL']
const SIZES_POLO = ['L', 'M', 'S', '3S', '2XL', '4XL', '3XS', '3XL', '5XL', '6XL', '10XL']

export default function OrderPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    shirtType: 'เสื้อแบบที',
    sizes: {} as Record<string, number>
  })

  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleSizeChange = (size: string, value: number) => {
    setOrderData({
      ...orderData,
      sizes: {
        ...orderData.sizes,
        [size]: value
      }
    })
  }

  const getTotalShirts = () => {
    return Object.values(orderData.sizes).reduce((sum, count) => sum + count, 0)
  }

  const getTotalPrice = () => {
    const totalShirts = getTotalShirts()
    return totalShirts * 50 + (orderData.address ? 10 : 0)
  }

  const handleSubmit = () => {
    setShowConfirmDialog(true)
  }

  const confirmOrder = () => {
    // บันทึกคำสั่งซื้อ - ในระบบจริงต้องส่งไปยัง backend
    console.log('Order confirmed:', orderData)
    alert('สั่งซื้อสำเร็จ!')
    router.push('/order-history')
  }

  const currentSizes = orderData.shirtType === 'เสื้อแบบที' ? SIZES_SHIRT : SIZES_POLO

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">สั่งซื้อเสื้อเฉลิมฉลองเนื่อง 243 ปี</h1>
          <p className="text-gray-600">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${currentStep === 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="font-semibold">ข้อมูลผู้สั่งซื้อ</span>
            </div>
            
            <div className="w-16 h-1 bg-gray-300"></div>
            
            <div className={`flex items-center gap-2 ${currentStep === 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="font-semibold">เลือกสินค้าและจำนวน</span>
            </div>
          </div>
        </div>

        {/* Product Image Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 mb-6 text-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-6xl mb-2">👕</div>
              <p className="font-semibold">1. แบบที</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">👕</div>
              <p className="font-semibold">2. แบบโพโล</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">ราคา: 50 บาท ถ้าต้องเป็นพื้นด้วย 10 บาท</p>
            <p className="text-xs opacity-90">ส่งภายใน 26 ส.ค. 2568</p>
          </div>
        </div>

        {/* Step 1: Customer Information */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-indigo-600">ข้อมูลผู้สั่งซื้อ</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อ *</label>
                  <input
                    type="text"
                    required
                    placeholder="ชื่อ"
                    value={orderData.firstName}
                    onChange={(e) => setOrderData({...orderData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">นามสกุล *</label>
                  <input
                    type="text"
                    required
                    placeholder="นามสกุล"
                    value={orderData.lastName}
                    onChange={(e) => setOrderData({...orderData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">เบอร์โทรศัพท์ *</label>
                <input
                  type="tel"
                  required
                  placeholder="0XX-XXX-XXXX"
                  value={orderData.phone}
                  onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={orderData.email}
                  onChange={(e) => setOrderData({...orderData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ที่อยู่จัดส่ง/รับได้ที่ *</label>
                <textarea
                  required
                  placeholder="กรอก ชื่อ ที่อยู่ ครบถ้วน"
                  value={orderData.address}
                  onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">หมายเหตุ</label>
                <textarea
                  placeholder="ข"
                  value={orderData.notes}
                  onChange={(e) => setOrderData({...orderData, notes: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" className="w-4 h-4 text-indigo-600" />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  ต้องการให้ข้อมูลส่งเสริมออกยบระบบ
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <Link href="/" className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                ← กลับไปหน้าหลัก
              </Link>
              <button
                onClick={() => setCurrentStep(2)}
                disabled={!orderData.firstName || !orderData.lastName || !orderData.phone || !orderData.address}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                ถัดไป: เลือกสินค้า และจำนวน →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Products and Quantities */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-indigo-600">เลือกสินค้าและจำนวน</h2>

            {/* Order Summary Info */}
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded mb-6">
              <p className="text-sm font-semibold text-cyan-800 mb-1">ข้อมูลการสั่งซื้อ</p>
              <p className="text-xs text-cyan-700">ชื่อ: {orderData.firstName} {orderData.lastName}</p>
              <p className="text-xs text-cyan-700">เบอร์: {orderData.phone}</p>
              <p className="text-xs text-cyan-700">ที่อยู่: {orderData.address || '-'}</p>
            </div>

            {/* Shirt Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">เลือกประเภทเสื้อ</label>
              <div className="grid grid-cols-2 gap-4">
                {SHIRT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setOrderData({...orderData, shirtType: type, sizes: {}})
                    }}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                      orderData.shirtType === type
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                    <div className="text-xs mt-1 opacity-75">
                      {type === 'เสื้อแบบที' ? '(รอบแรก 293 บาท)' : '(รอบแรก 243 บาท)'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                จำนวนสินค้าเสื้อ แต่ละไซส์ ({orderData.shirtType})
              </label>
              
              <div className="grid grid-cols-3 gap-4">
                {currentSizes.map((size) => (
                  <div key={size} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <span className="font-semibold text-gray-700 w-12">{size}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSizeChange(size, Math.max(0, (orderData.sizes[size] || 0) - 1))}
                        className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="0"
                        value={orderData.sizes[size] || 0}
                        onChange={(e) => handleSizeChange(size, parseInt(e.target.value) || 0)}
                        className="w-16 text-center px-2 py-1 border border-gray-300 rounded"
                      />
                      <button
                        onClick={() => handleSizeChange(size, (orderData.sizes[size] || 0) + 1)}
                        className="w-8 h-8 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-sm font-semibold text-yellow-800">สรุปคำสั่งซื้อ</p>
              <p className="text-xs text-yellow-700">จำนวนเสื้อทั้งหมด: {getTotalShirts()} ตัว</p>
              <p className="text-xs text-yellow-700">ราคา: {getTotalShirts() * 50} บาท</p>
              <p className="text-xs text-yellow-700">ค่าส่ง: {orderData.address ? 10 : 0} บาท</p>
              <p className="text-lg font-bold text-yellow-900 mt-2">รวมทั้งสิ้น: {getTotalPrice()} บาท</p>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                ← กลับ
              </button>
              <button
                onClick={handleSubmit}
                disabled={getTotalShirts() === 0}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                🛒 สั่งซื้อเสื้อ ({getTotalPrice()} บาท)
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <div className="text-6xl mb-4">❓</div>
                <h3 className="text-2xl font-bold mb-2">ยืนยันการสั่งซื้อ</h3>
                <p className="text-gray-600 mb-1">ชื่อ-นามสกุล: ลุกขัย วิเชียร</p>
                <p className="text-gray-600 mb-1">โทรศัพท์: 0999123926</p>
                <p className="text-gray-600 mb-1">อีเมล: student73190@ssru.ac.th</p>
                <p className="text-gray-600 mb-1">ที่อยู่: ssdsrfssd</p>
                <p className="text-gray-600 mb-4">หมายเหตุ: ส</p>
                
                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold">รายการสั่งซื้อ:</p>
                  <p className="text-sm">ประเภท: {orderData.shirtType}</p>
                  {Object.entries(orderData.sizes).filter(([_, count]) => count > 0).map(([size, count]) => (
                    <p key={size} className="text-sm">ไซส์ {size}: {count} ตัว</p>
                  ))}
                  <p className="text-lg font-bold mt-2 text-indigo-600">รวม: {getTotalPrice()} บาท</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirmDialog(false)}
                    className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={confirmOrder}
                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
                  >
                    ยืนยันสั่งซื้อ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
