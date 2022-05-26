<script lang="ts" setup>
import { ref } from "vue";
import useStore from "../../store/modules/app"

const store = useStore()

let addItem = () => {
    store.addItem({
        id: 4,
        title: "item4"
    })
}

let message = ref("this is component")
</script>

<template>
    <pre @click="addItem">
        {{store.items}}
    </pre>
</template>