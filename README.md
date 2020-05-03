<img src="./packages/docs/src/.vuepress/public/vue-enqueue.svg" alt="logo" width="128">

# vue-enqueue

Vue renderless component to enqueue components rendering.

## Docs & demo

[https://vue-enqueue.netlify.app/](https://vue-enqueue.netlify.app/)

## Quick start

In the example below (using [ElementUI](https://element.eleme.io/#/en-US/component/dialog)), dialogs will be shown one after the other:

```vue
<template>
  <div>
    <el-button type="primary" @click="isDialog1Visible = isDialog2Visible = true">
      Open both dialogs
    </el-button>

    <Enqueue>
      <el-dialog v-if="isDialog1Visible" visible title="Dialog 1" @close="isDialog1Visible = false">...</el-dialog>
    </Enqueue>

    <Enqueue>
      <el-dialog v-if="isDialog2Visible" visible title="Dialog 2" @close="isDialog2Visible = false">...</el-dialog>
    </Enqueue>
  </div>
</template>

<script>
import { Enqueue } from 'vue-enqueue'

export default {
  components: {
    Enqueue,
  },
  data: () => ({
    isDialog1Visible: false,
    isDialog2Visible: false,
  }),
}
</script>
```

## Installation

Install the `vue-enqueue` package:

```sh
npm i vue-enqueue
```

Or

```sh
yarn add vue-enqueue
```

## Quick start

Import the `Enqueue` component from `vue-enqueue`:

```vue
<script>
import { Enqueue } from 'vue-enqueue'

export default {
  components: {
    Enqueue,
  },
}
</script>
```


## Thanks & credits

This repo is based on @Akryum https://github.com/Akryum/vue-mention.
