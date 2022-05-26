import {acceptHMRUpdate, defineStore} from "pinia"

const useStore = defineStore("app", {
    state: () => ({
        items: [
            {
                id: 1,
                title: "item1"
            },
            {
                id: 2,
                title: "item2"
            },
            {
                id: 3,
                title: "item3"
            }
        ]
    }),
    actions: {
        addItem(data) {
            this.items.push(data)
        }
    }
})

import.meta.hot?.accept(acceptHMRUpdate(useStore, import.meta.hot))

export default useStore