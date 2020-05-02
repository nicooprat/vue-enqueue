<img src="../docs/src/.vuepress/public/vue-enqueue.svg" alt="logo" width="128">

# vue-enqueue

Vue renderless functional component to dispatch children items in enqueue

[Documentation](https://vue-enqueue.netlify.app/)

## Quick start

```vue
<template>
  <Enqueue :enqueue="3">
    <div v-for="item in items" :key="item" v-text="item" />
  </Enqueue>
</template>

<script>
import { Enqueue } from 'vue-enqueue'

export default {
  components: {
    Enqueue,
  },
  data () {
    return {
      items: Array.from(Array(12)).map((v, i) => i),
    }
  },
}
</script>
```
