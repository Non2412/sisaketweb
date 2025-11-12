'use client'

import { ReactNode } from 'react'
import './StatsCard.css'

interface StatsCardProps {
  title: string
  value: string | number
  icon?: ReactNode
  bgColor: 'primary' | 'success' | 'info' | 'warning' | 'cyan' | 'purple' | 'blue' | 'orange'
  unit?: string
}

export default function StatsCard({ title, value, icon, bgColor, unit }: StatsCardProps) {
  return (
    <div className={`stats-card stats-card-${bgColor}`}>
      {icon && <div className="stats-card-icon">{icon}</div>}
      <p className="stats-card-title">{title}</p>
      <p className="stats-card-value">{value}</p>
      {unit && <p className="stats-card-unit">{unit}</p>}
    </div>
  )
}
