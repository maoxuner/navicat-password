<script setup>
import { ref } from 'vue'
import NavicatPassword from '../utils/navicat-password'

const decrypted_password = ref('')
const encrypted_password = ref('')

const cipher = new NavicatPassword()

const encrypt = () => {
  encrypted_password.value = decrypted_password.value
    .split('\n')
    .map((value) => value.trim())
    .filter((value) => value)
    .map((value) => cipher.encrypt(value))
    .join('\n')
}
const decrypt = () => {
  decrypted_password.value = encrypted_password.value
    .split('\n')
    .map((value) => value.trim())
    .filter((value) => value)
    .map((value) => cipher.decrypt(value))
    .join('\n')
}
</script>

<template>
  <form @submit.native.prevent class="flex flex-col justify-center items-center gap-4">
    <h2 class="text-center text-3xl pb-8">Navicat (12+)<br>Password Encrypt/Decrypt</h2>
    <div class="flex flex-row justify-center items-center gap-4">
      <textarea id="decrypted_password" v-model="decrypted_password" class="border border-blue-500 rounded w-96 px-4 py-2" placeholder="Decrypted Password" rows="10" />
      <div class="flex flex-col justify-center items-center gap-4">
        <button type="button" class="border border-blue-500 rounded px-2 py-1 text-blue-500" @click="encrypt">=> Encrypt =></button>
        <button type="button" class="border border-blue-500 rounded px-2 py-1 text-blue-500" @click="decrypt"><= Decrypt <=</button>
      </div>
      <textarea id="encrypted_password" v-model="encrypted_password" class="border border-blue-500 rounded w-96 px-4 py-2" placeholder="Encrypted Password" rows="10" />
    </div>
  </form>
</template>
