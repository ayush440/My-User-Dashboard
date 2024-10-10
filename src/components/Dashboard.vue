<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Header -->
        <header class="bg-white shadow-sm z-10">
          <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <ProfileDropdown />
          </div>
        </header>
  
        <!-- Main content area -->
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Welcome message -->
            <div class="bg-white shadow-sm rounded-lg p-6 mb-6">
              <h2 class="text-2xl font-bold text-gray-900">Hello {{ username }}</h2>
              <p class="mt-1 text-gray-600">Welcome back! Let's start your trade with the best strategies by us</p>
            </div>
  
            <!-- Metrics -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
              <MetricCard title="Total Orders" :value="totalOrders" />
              <MetricCard title="Total Profit" :value="totalProfit" prefix="+" suffix=".00" />
              <MetricCard title="Brokers Connected" :value="`${brokersConnected}/10`" />
            </div>
  
            <!-- Trading toggle and positions -->
            <div class="bg-white shadow-sm rounded-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Positions</h3>
                <div class="flex space-x-2">
                  <button 
                    @click="tradingMode = 'live'"
                    :class="['px-4 py-2 rounded-md', tradingMode === 'live' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700']"
                  >
                    Live
                  </button>
                  <button 
                    @click="tradingMode = 'paper'"
                    :class="['px-4 py-2 rounded-md', tradingMode === 'paper' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700']"
                  >
                    Paper
                  </button>
                </div>
              </div>
              <PositionsTable :positions="positions" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Sidebar from './Sidebar.vue'
  import ProfileDropdown from './ProfileDropdown.vue'
  import MetricCard from './MetricCard.vue'
  import PositionsTable from './PositionsTable.vue'
  
  const username = ref('ayush')
  const totalOrders = ref(9)
  const totalProfit = ref(1542)
  const brokersConnected = ref(0)
  const tradingMode = ref('live')
  
  const positions = ref([
    { strategy: 'DOMAIN TREND', qty: 500, type: 'SELL', pnl: 0.00 },
    { strategy: 'DOMAIN PRICE ACTION', qty: 500, type: 'BUY', pnl: 7.00 },
    { strategy: 'DOMAIN TREND', qty: 551, type: 'SELL', pnl: 5.00 },
    { strategy: 'DOMAIN TREND', qty: 51, type: 'BUY', pnl: 0.00 },
    { strategy: 'DOMAIN TREND', qty: 10, type: 'BUY', pnl: 0.00 },
  ])
  </script>