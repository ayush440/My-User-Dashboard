<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white shadow-sm z-10">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">My Dashboards</h1>
        </div>
      </header>

      <!-- Main content area -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <!-- Welcome message and Metrics -->
          <div class="flex flex-col md:flex-row gap-6 mb-6">
            <!-- Welcome message -->
            <div class="md:w-1/2 bg-teal-600 rounded-lg p-6 text-white">
              <h2 class="text-2xl font-bold">Hello, Sourabh</h2>
              <p class="mt-1 text-teal-100">Welcome back! Let's Start your trade with a best strategies by us</p>
              <a href="#" class="text-yellow-300 hover:text-yellow-100 mt-2 inline-block">View Profile >></a>
            </div>
            <!-- Metrics Cards -->
            <div class="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <MetricItem title="Total Users" :value="1527" icon="UserGroupIcon" accentColor="indigo" iconColor="indigo" />
              <MetricItem title="Strategy" :value="4" icon="CogIcon" accentColor="red" iconColor="red" />
              <MetricItem title="Total Orders" :value="12" icon="CubeIcon" accentColor="green" iconColor="green" />
            </div>
          </div>

          <!-- Today's Profit and Positions -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Today's Profit -->
            <div class="bg-white shadow rounded-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Today's Profit</h3>
                <button class="bg-teal-600 text-white px-3 py-1 rounded">Square off</button>
              </div>
              <div class="text-3xl font-bold text-gray-900 mb-[-4]">₹1,09,000</div>
              <div class="h-16 w-full">
              
               
              </div>
              <div class="mt-4 space-y-2">
                <ProfitItem strategy="Super Hero Strategy" amount="1000" color="bg-gradient-to-r from-[#D4D6FF] to-white" />
<ProfitItem strategy="Super Hero Strategy" amount="1500" color="bg-gradient-to-r from-green-100 to-white" />
<ProfitItem strategy="Super Hero Strategy" amount="1500" color="bg-gradient-to-r from-yellow-100 to-white" />
<ProfitItem strategy="Super Hero Strategy" amount="1500" color="bg-gradient-to-r from-blue-100 to-white" />
<ProfitItem strategy="Super Hero Strategy" amount="1500" color="bg-gradient-to-r from-pink-100 to-white" />
              </div>
            </div>

            <!-- Positions -->
            <div class="bg-white shadow rounded-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Positions</h3>
                <a href="#" class="text-teal-600 hover:text-teal-800">See all</a>
              </div>
              <PositionsTable :positions="positions" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import MetricItem from './MetricItem.vue'
import ProfitItem from './ProfitItem.vue'
import PositionsTable from './PositionsTable.vue'

const positions = ref([
  { strategy: 'Super Hero Strategy', qty: 15, type: 'Buy', time: '08:56 am' },
  { strategy: 'Angel-A29999', qty: '₹256.09', type: '₹456.09', time: 'CLOSED' },
  { strategy: 'Super Hero Strategy', qty: 15, type: 'Buy', time: '08:56 am' },
  { strategy: 'Super Hero Strategy', qty: 15, type: 'Buy', time: '08:56 am' },
  { strategy: 'Super Hero Strategy', qty: 15, type: 'Buy', time: '08:56 am' },
  { strategy: 'Super Hero Strategy', qty: 15, type: 'Buy', time: '08:56 am' },
])
</script>