<script lang="ts" setup>
import { ref } from 'vue';
import type { Component } from 'vue';

const icon = ref<Component>();
const val = ref('12334')
</script>
<template>
  <div>
    {{  icon }}
    {{ val }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
