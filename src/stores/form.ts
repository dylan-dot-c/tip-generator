import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export interface FormData {
  persons: number
  tipPercentage: number
  bill: number
  customPercentage: number
  useCustom: boolean
  error: {
    persons: string
    tipPercentage: string
    bill: string
  }
}

// global store for the application
const useFormStore = defineStore('form-data', () => {
  const data = reactive<FormData>({
    persons: 0,
    tipPercentage: 0,
    bill: 0,
    useCustom: false,
    customPercentage: 0,
    error: {
      persons: '',
      tipPercentage: '',
      bill: ''
    }
  })

  // helper function
  const checkFinite = (value: number) => {
    if (value == 0 || !isFinite(value)) {
      return 0
    } else {
      return value
    }
  }

  const tipPerPerson = computed(() => {
    let percent = 0
    if (data.useCustom) {
      percent = data.customPercentage
    } else {
      percent = data.tipPercentage
    }

    const value = (data.bill * percent) / 100 / data.persons
    if (value == Infinity) {
      data.error.persons = "Can't be zero"
    } else {
      data.error.persons = ''
    }
    return checkFinite(value)
  })
  const perPersonPay = computed(() => {
    const value = data.bill / data.persons + tipPerPerson.value
    return checkFinite(value)
  })

  const reset = () => {
    data.persons = 0
    data.tipPercentage = 0
    data.bill = 0
  }

  return { data, tipPerPerson, perPersonPay, reset }
})

export default useFormStore
