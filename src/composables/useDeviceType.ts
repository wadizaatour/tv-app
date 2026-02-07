import { ref, onMounted, onUnmounted } from 'vue'

export enum DeviceType {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

export function useDeviceType() {
  const deviceType = ref<DeviceType>(DeviceType.Desktop)

  function updateType() {
    const width = window.innerWidth
    if (width <= 600) {
      deviceType.value = DeviceType.Mobile
    } else if (width <= 1024) {
      deviceType.value = DeviceType.Tablet
    } else {
      deviceType.value = DeviceType.Desktop
    }
  }

  onMounted(() => {
    updateType()
    window.addEventListener('resize', updateType)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateType)
  })

  return { deviceType }
}
