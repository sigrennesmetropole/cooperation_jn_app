import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { LinePlanningStateTypes } from '@/model/line-planning-state.model'

export const usePlanningStore = defineStore('planning', () => {
  const selectedYear: Ref<number> = ref(2025)
  const selectedSemester: Ref<number> = ref(1)
  const selectedLineState: Ref<LinePlanningStateTypes | null> = ref(null)
  const selectedLine: Ref<number> = ref(0)

  function getSelectedDate() {
    const selectedMonth = selectedSemester.value % 2 == 1 ? 1 : 7
    return new Date(selectedYear.value, selectedMonth)
  }

  function setDate(date: Date) {
    selectedYear.value = date.getUTCFullYear()
    selectedSemester.value = date.getUTCMonth() < 7 ? 1 : 2
  }

  function setLinePlanningState(lineState: LinePlanningStateTypes) {
    if (
      selectedLineState.value &&
      selectedLineState.value.id === lineState.id
    ) {
      selectedLineState.value = null
    } else {
      selectedLineState.value = lineState
    }
  }

  function isLinePlanningStateHighlighted(
    linePlanningState: LinePlanningStateTypes
  ): boolean {
    if (selectedLineState.value == null) {
      return true
    }
    return selectedLineState.value?.id == linePlanningState.id
  }

  return {
    getSelectedDate,
    selectedSemester,
    selectedYear,
    setDate,
    selectedLine,
    selectedLineState,
    setLinePlanningState,
    isLinePlanningStateHighlighted,
  }
})
