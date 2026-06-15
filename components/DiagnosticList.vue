<script setup lang="ts">
import type { DiagnosticItem } from '~/types/patient'
defineProps<{ items: DiagnosticItem[] }>()
</script>

<template>
  <section class="panel diagnostic-list">
    <h2>Diagnostic List</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
