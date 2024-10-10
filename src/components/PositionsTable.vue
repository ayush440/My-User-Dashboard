<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th v-for="header in headers" :key="header" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="position in positions" :key="position.strategy">
          <td v-for="(value, key) in position" :key="key" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ value }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button class="text-teal-600 hover:text-teal-900">
              <ChevronRightIcon class="h-5 w-5" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/solid'

const props = defineProps({
  positions: Array
})

const headers = ['STRATEGY NAME', 'QTY', 'TYPE', 'TIME']
</script>