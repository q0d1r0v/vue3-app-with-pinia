<script setup lang="ts">
import {reactive, ref} from "vue"
import { defineAsyncComponent } from 'vue'
const test = defineAsyncComponent(() => {
  return import("./components/app/component.vue")
})

  // types and interfaces

  let msg = ref("hello")
  let r = reactive({
    message: "hello"
  })

  function translate() {
    console.log(msg)
    console.log(r)
    msg.value === "hello" ? msg.value = "salom" : msg.value = "hello"
  }
</script>

<template>
  <h1>this is message: <span class="text-orange-500">{{msg}}</span></h1>
  <button @click="translate">translate</button>
  <component :is="test"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
