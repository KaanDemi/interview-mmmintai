<script lang='ts' setup>
import { ref } from 'vue'
import type { ProcessItem } from '@/lib/process-item.dt'
import DamageClaimProcess from '@/components/DamageClaimProcess.vue';

const steps = ref<ProcessItem[]>([
  {
    type: 'CALL_RECEIVED',
    title: 'Schadenmeldung telefonisch eingegangen',
    timestamp: '2025-04-10T08:45:00Z',
    contact: 'Max Mustermann',
    status: 'erfasst',
    location: 'Kundencenter Berlin',
    comment: 'Kratzer am Stoßfänger gemeldet.',
    referenceId: 'CALL-001',
    amount: 0
  },
  {
    type: 'IMAGES_RECEIVED',
    title: 'Schadenbilder übermittelt',
    timestamp: '2025-04-10T10:05:00Z',
    contact: 'Max Mustermann',
    status: 'eingegangen',
    location: 'Upload-Portal',
    comment: '4 Bilder vom Fahrzeugheck.'
  },
  {
    type: 'KVA_REQUESTED',
    title: 'KVA angefragt',
    timestamp: '2025-04-10T11:30:00Z',
    contact: 'Autohaus Meier',
    status: 'angefragt',
    location: 'Wolfsburg',
    comment: 'Bitte Rückmeldung bis 12.04.'
  },
  {
    type: 'KVA_RECEIVED',
    title: 'KVA erhalten',
    timestamp: '2025-04-11T14:22:00Z',
    contact: 'Autohaus Meier',
    status: 'eingegangen',
    location: 'System',
    comment: 'KVA mit 6 Positionen.',
    referenceId: 'KVA-001'
  },
  {
    type: 'LEASE_APPROVAL',
    title: 'Freigabe Leasing',
    timestamp: '2025-04-12T09:00:00Z',
    contact: 'Leasing AG',
    status: 'freigegeben',
    location: 'Onlineportal',
    comment: 'Genehmigt bis 2000 EUR.',
    referenceId: 'LEASE-APP-001'
  },
  {
    type: 'FLEET_APPROVAL',
    title: 'Freigabe Fuhrparkmanager',
    timestamp: '2025-04-12T11:45:00Z',
    contact: 'Sven Fuhrmann',
    status: 'freigegeben',
    location: 'intern',
    comment: 'Rückmeldung an Fahrer erfolgt.',
    referenceId: 'FLEET-APP-001'
  },
  {
    type: 'INSURANCE_APPROVAL',
    title: 'Freigabe Versicherung',
    timestamp: '2025-04-13T08:30:00Z',
    contact: 'AllSecure Versicherung',
    status: 'freigegeben',
    location: 'Versicherungsportal',
    comment: 'Schadennummer AS-2025-38217',
    referenceId: 'INS-APP-001'
  },
  {
    type: 'WORKSHOP_APPOINTMENT',
    title: 'Werkstatttermin vereinbart',
    timestamp: '2025-04-13T15:20:00Z',
    contact: 'Autohaus Meier',
    status: 'terminiert',
    location: 'Wolfsburg',
    comment: 'Termin am 16.04. um 09:00',
    referenceId: 'TERM-001'
  },
  {
    type: 'REPAIRED',
    title: 'Auto repariert',
    timestamp: '2025-04-17T17:00:00Z',
    contact: 'Autohaus Meier',
    status: 'abgeschlossen',
    location: 'Wolfsburg',
    comment: 'Stoßfänger und Kennzeichenhalter ersetzt.'
  },
  {
    type: 'PROCESS_COMPLETED',
    title: 'Vorgang abgeschlossen',
    timestamp: '2025-04-18T10:00:00Z',
    contact: 'Lea Abwicklung',
    status: 'geschlossen',
    location: 'intern',
    comment: 'Fahrzeug übergeben und dokumentiert.'
  }
])
</script>

<template>
  <v-row>
    <v-col cols="12">
      <h1>Damage claim process</h1>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Process Steps</v-card-title>
        <v-card-text>
          <DamageClaimProcess :steps="steps"/>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
