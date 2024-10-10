<template>
  <div class="bg-white shadow rounded-lg p-4 flex items-center">
    <div :class="`bg-${accentColor}-500 w-1 h-12 mr-4 rounded-full`"></div>
    <div class="flex-1">
      <h3 class="text-sm font-medium text-gray-500">{{ title }}</h3>
      <p class="text-2xl font-semibold text-gray-900">{{ value }}</p>
    </div>
    <div :class="`bg-${accentColor}-100 rounded-full p-2`">
      <component :is="iconComponent" class="h-6 w-6" :class="`text-${iconColor}-500`" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { UserGroupIcon, CogIcon, CubeIcon } from '@heroicons/vue/solid'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [Number, String],
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  accentColor: {
    type: String,
    required: true
  },
  iconColor: {
    type: String,
    required: true
  }
})

const iconComponent = computed(() => {
  const icons = {
    UserGroupIcon,
    CogIcon,
    CubeIcon
  }
  return icons[props.icon]
})
</script>