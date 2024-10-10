<template>
  <aside class="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
    <div class="flex items-center space-x-2 px-4">
      <span class="text-2xl font-extrabold text-yellow-500">DASHBOARD!</span>
    </div>
    <nav>
      <router-link v-for="item in menuItems" :key="item.name" :to="item.to" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-700 hover:text-white">
        <div class="flex items-center space-x-2">
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.name }}</span>
        </div>
      </router-link>
    </nav>
    <div class="px-4 py-2 mt-auto">
      <div class="flex items-center space-x-2">
        <img src="" alt="Sourabh" class="w-8 h-8 rounded-full" />
        <div>
          <div class="font-medium">Sourabh</div>
          <div class="text-sm text-teal-300">Admin</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { HomeIcon, BriefcaseIcon, ShoppingCartIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/vue/outline'

const menuItems = [
  { name: 'Dashboards', to: '/', icon: HomeIcon },
  { name: 'Brokers', to: '/brokers', icon: BriefcaseIcon },
  { name: 'Orders', to: '/orders', icon: ShoppingCartIcon },
  { name: 'Position', to: '/position', icon: CurrencyDollarIcon },
  { name: 'Users', to: '/users', icon: UsersIcon },
]
</script>