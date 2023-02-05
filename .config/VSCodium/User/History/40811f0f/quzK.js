import { ref } from 'vue'
const items = ref([])
const comparison = ref([])
const fetching = ref(false)
export const useItemComparison = () => {
    items, comparison, fetching
}
