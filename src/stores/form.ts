import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export interface FormData {
  persons: string
  tipPercentage: number
  bill: string
  customPercentage: string
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
    persons: '',
    tipPercentage: 0,
    bill: '',
    useCustom: false,
    customPercentage: '',
    error: {
      persons: '',
      tipPercentage: '',
      bill: ''
    }
  })
  // global values
  const bill = Number(data.bill)
  const persons = Number(data.persons)
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
      percent = Number(data.customPercentage)
    } else {
      percent = data.tipPercentage
    }

    const value = (bill * percent) / 100 / persons
    if (value == Infinity) {
      data.error.persons = "Can't be zero"
    } else {
      data.error.persons = ''
    }
    return checkFinite(value)
  })
  const perPersonPay = computed(() => {
    const value = bill / persons + tipPerPerson.value
    return checkFinite(value)
  })

  const reset = () => {
    data.persons = ''
    data.tipPercentage = 0
    data.bill = ''
    data.customPercentage = ''
    data.useCustom = false
  }

  return { data, tipPerPerson, perPersonPay, reset }
})

export default useFormStore
