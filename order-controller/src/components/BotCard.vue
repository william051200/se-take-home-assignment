<script setup lang="ts">
import { Bot } from "@/models";

const props = defineProps<{
  bot: Bot;
}>();

const emit = defineEmits(["removeBot", "startWorking", "stopWorking"]);

function onRemoveBotButtonClicked() {
  emit("removeBot");
}

function onStartWorkingButtonClicked() {
  emit("startWorking");
}

function onStopWorkingButtonClicked() {
  emit("stopWorking");
}
</script>

<template>
  <n-card>
    <n-flex horizontal style="align-items: center">
      Bot ID:
      <n-tag class="highlight">{{ props.bot.id }}</n-tag>
      Working status:
      <n-tag v-if="props.bot.isWorking" class="highlight" type="success">Working</n-tag>
      <n-tag v-else class="highlight" type="warning">Idle</n-tag>

      <div v-if="props.bot.isWorking">Order number:</div>
      <n-tag v-if="props.bot.isWorking" type="info">{{ props.bot.orderNumber }}</n-tag>

      <div v-if="props.bot.isWorking">Time:</div>
      <n-tag v-if="props.bot.isWorking" type="info">{{ props.bot.timeoutSec }}</n-tag>

      <!-- <n-button type="error" @click="onRemoveBotButtonClicked">Remove</n-button> -->
      <!-- <n-button v-if="!isWorking" type="info" @click="onStartWorkingButtonClicked">
        Start Working
      </n-button>
      <n-button v-else type="warning" @click="onStopWorkingButtonClicked">Stop Working</n-button> -->
    </n-flex>
  </n-card>
</template>

<style scoped>
.n-card {
  width: 100%;
}

.highlight {
  margin-right: 20px;
}
</style>
