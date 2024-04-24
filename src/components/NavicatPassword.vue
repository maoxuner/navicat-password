<script setup>
import { ref } from 'vue'
import NavicatPassword from '../utils/navicat-password'

const input = ref('')
const output = ref('')

const cipher = new NavicatPassword()

const encrypt = () => {
  output.value = cipher.encrypt(input.value)
}
const decrypt = () => {
  output.value = cipher.decrypt(input.value)
}
const cleanup = () => {
  output.value = ''
}
</script>

<template>
  <form @submit.native.prevent class="flex flex-col justify-center items-center gap-4 h-screen">
    <h2 class="text-center text-3xl pb-8">Navicat Password<br>Encrypt/Decrypt</h2>
    <div class="flex flex-col justify-center items-center gap-4 pb-4">
      <input v-model="input" type="text" class="border border-blue-500 rounded w-96 px-4 py-2" placeholder="Encrypted/Decrypted Password" @input="cleanup" />
      <input v-model="output" type="text" class="border border-blue-500 rounded w-96 px-4 py-2" placeholder="Decrypted/Encrypted Password" />
    </div>
    <div class="flex gap-4">
      <button type="button" class="border border-blue-500 rounded px-2 py-1 text-blue-500" @click="encrypt">Encrypt</button>
      <button type="button" class="border border-blue-500 rounded px-2 py-1 text-blue-500" @click="decrypt">Decrypt</button>
    </div>
  </form>
</template>
