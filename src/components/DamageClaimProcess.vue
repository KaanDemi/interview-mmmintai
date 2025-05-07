<script setup lang="ts">
import type { ProcessItem } from '@/lib/process-item.dt';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  steps: Array as () => ProcessItem[]
})

// Define a ref to keep track of selected items
// This will be an array of indices of the items that are currently expanded
const selectedItems = ref<number[]>([])

// Function to toggle the details of an item
// If the item is not already selected, add it to the selectedItems array
// If it is already selected, remove it from the selectedItems array
// This allows for multiple items to be expanded at once
const toggleDetails = (index: number) => {
  if (!selectedItems.value.includes(index)) {
    selectedItems.value.push(index)
  }
  else{
    selectedItems.value = selectedItems.value.filter(i => i !== index)
  }
}

</script>

<template>
  <div class="card">
    <Timeline :value="props.steps" >

      <template #content="slotProps">
        <Card class="mt-4">
          <template #title>
            {{ slotProps.item.title }}
          </template>
          <template #subtitle>
            <p>{{new Date(slotProps.item.timestamp).toLocaleString("de-DE") }}</p>
          </template>
          <template #content>
            <div v-if="selectedItems.includes(slotProps.index)" class="flex justify-content-between">
              <p><strong>Kontakt:</strong> {{ slotProps.item.contact }}</p>
              <p><strong>Status:</strong> {{ slotProps.item.status }}</p>
              <p><strong>Ort:</strong> {{ slotProps.item.location }}</p>
              <p><strong>Kommentar:</strong> {{ slotProps.item.comment }}</p>
              <p v-if="slotProps.item.referenceId">
                <strong>Referenz-ID:</strong> {{ slotProps.item.referenceId }}
              </p>
            </div>
            <Button :label="selectedItems.includes(slotProps.index) ? 'weniger' : 'mehr'" style="color: #020617;" text @click="toggleDetails(slotProps.index)"></Button></template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>
