'use client'

import { useState } from 'react'
import Link from 'next/link'
import StatsCard from '@/components/StatsCard'

// Mock data - ในระบบจริงควรดึงจาก API
const mockOrders = [
  {
    id: 1,
    date: '2024-01-15',
    type: 'เสื้อแบบที',
    totalItems: 10,
    totalPrice: 500,
    status: 'รอดำเนินการ',
    sizes: { L: 3, M: 2, XL: 5 }
  },
  {
    id: 2,
    date: '2024-01-10',
    type: 'เสื้อโพโล',
    totalItems: 5,
    totalPrice: 250,
    status: 'กำลังจัดส่ง',
    sizes: { M: 2, S: 3 }
  }
]

export default function OrderHistoryPage() {
  const [orders] = useState(mockOrders)
  
  const totalOrders = orders.length
  const pendingOrders = orders.filter(o => o.status === 'รอดำเนินการ').length
  const shippingOrders = orders.filter(o => o.status === 'กำลังจัดส่ง').length
  const totalShirts = orders.reduce((sum, order) => sum + order.totalItems, 0)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">📦 ประวัติการสั่งซื้อ</h1>
            <p className="text-gray-600">รายการคำสั่งซื้อเสื้อเฉลิมฉลองเนื่อง 243 ปี</p>
          </div>
          <Link href="/order">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <span>➕</span>
              <span>สั่งซื้อใหม่</span>
            </button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="คำสั่งซื้อทั้งหมด"
            value={totalOrders}
            icon="📋"
            bgColor="primary"
          />
          <StatsCard 
            title="เสื้อที่สั่งทั้งหมด"
            value={totalShirts}
            icon="👕"
            bgColor="success"
          />
          <StatsCard 
            title="ยอดรอมที่ชำ"
            value={shippingOrders}
            icon="📦"
            bgColor="cyan"
          />
          <StatsCard 
            title="สถานะที่หลากหลาย"
            value={pendingOrders}
            icon="📊"
            bgColor="orange"
          />
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">📋</span>
            <h2 className="text-xl font-bold text-gray-800">รายการคำสั่งซื้อ</h2>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">ยังไม่มีประวัติการสั่งซื้อ</h3>
              <p className="text-gray-500 mb-6">เมื่อคุณสั่งซื้อเสื้อแล้ว ประวัติจะแสดงที่นี่</p>
              <Link href="/order">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all">
                  + สั่งซื้อเลย
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        คำสั่งซื้อ #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        📅 วันที่สั่งซื้อ: {new Date(order.date).toLocaleDateString('th-TH', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        order.status === 'รอดำเนินการ' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : order.status === 'กำลังจัดส่ง'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">ประเภทเสื้อ</p>
                      <p className="font-semibold text-gray-800">{order.type}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">จำนวนทั้งหมด</p>
                      <p className="font-semibold text-gray-800">{order.totalItems} ตัว</p>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 mb-2 font-medium">รายละเอียดไซส์:</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(order.sizes).map(([size, count]) => (
                        <span key={size} className="px-3 py-1 bg-white rounded-full text-sm font-semibold text-gray-700 border border-indigo-200">
                          {size}: {count} ตัว
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">ยอดรวม</p>
                      <p className="text-2xl font-bold text-indigo-600">{order.totalPrice} บาท</p>
                    </div>
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                      ดูรายละเอียด →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-cyan-50 border-l-4 border-cyan-500 rounded-lg p-6">
          <h3 className="font-bold text-cyan-900 mb-3">ℹ️ ข้อมูลสำคัญ</h3>
          <div className="space-y-2 text-sm text-cyan-800">
            <p>• หากมีปัญหาเกี่ยวกับการสั่งซื้อ กรุณาติดต่อ: 093-368-1830</p>
            <p>• ระยะเวลาจัดส่ง: ประมาณ 7-14 วันทำการ</p>
            <p>• การชำระเงิน: โอนผ่านธนาคารกรุงเทพ สาขาที่ 333-4-23366-5</p>
            <p>• กรุณาเก็บหลักฐานการโอนเงินไว้เป็นหลักฐาน</p>
          </div>
        </div>
      </div>
    </div>
  )
}
