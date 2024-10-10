<template>
    <aside class="bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div class="flex items-center space-x-2 px-4">
        <img src="" alt="Logo" class="w-8 h-8" />
        <span class="text-2xl font-extrabold">FUTURE</span>
      </div>
      <nav>
        <router-link v-for="item in menuItems" :key="item.name" :to="item.to" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <div class="flex items-center space-x-2">
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </div>
        </router-link>
      </nav>
    </aside>
  </template>
  
  <script setup>
  import { HomeIcon, ChartBarIcon, BriefcaseIcon, CurrencyDollarIcon, ShoppingCartIcon, FilmIcon } from '@heroicons/vue/outline'
  
  const menuItems = [
    { name: 'Dashboard', to: '/', icon: HomeIcon },
    { name: 'My Strategies', to: '/strategies', icon: ChartBarIcon },
    { name: 'Brokers', to: '/brokers', icon: BriefcaseIcon },
    { name: 'Positions', to: '/positions', icon: CurrencyDollarIcon },
    { name: 'Orders', to: '/orders', icon: ShoppingCartIcon },
    { name: 'Videos', to: '/videos', icon: FilmIcon },
  ]
  </script>