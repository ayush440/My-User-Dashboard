<template>
  <div class="bg-white overflow-hidden shadow rounded-lg p-6">
    <div class="flex items-center">
      <div class="flex-shrink-0 bg-teal-100 rounded-md p-3">
        <component :is="icon" class="h-6 w-6 text-teal-600" />
      </div>
      <div class="ml-5 w-0 flex-1">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ title }}
        </dt>
        <dd class="flex items-baseline">
          <div class="text-2xl font-semibold text-gray-900">
            {{ value }}
          </div>
        </dd>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UsersIcon, CogIcon, CubeIcon } from '@heroicons/vue/outline'

defineProps({
  title: String,
  value: [Number, String],
  icon: {
    type: String,
    default: 'UsersIcon'
  }
})

const iconComponents = {
  UsersIcon,
  CogIcon,
  CubeIcon
}
</script>