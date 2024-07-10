import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// global store for the application
const useFormStore = defineStore('form-data', () => {
  const data = ref({ persons: 0, tipPercentage: 0, bill: 0 })

  const tipPerPerson = computed(() => {
    const value = (data.value.bill * data.value.tipPercentage) / 100 / data.value.persons
    if (value) {
      return value
    } else {
      return 0
    }
  })
  const perPersonPay = computed(() => {
    const value = data.value.bill / data.value.persons + tipPerPerson.value
    if (value) {
      return value
    } else {
      return 0
    }
  })

  const updateForm = (name: string, value: string | number) => {
    data.value = { ...data.value, [name]: value }
  }

  return { data, tipPerPerson, perPersonPay, updateForm }
})

export default useFormStore
