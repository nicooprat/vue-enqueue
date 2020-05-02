---
home: true
heroImage: /vue-enqueue.svg
heroText: vue-enqueue
tagline: Vue renderless component to enqueue rendering
actionText: Get Started →
actionLink: /guide/
features:
- title: Lightweight
  details: Only a few lines of code
- title: Renderless
  details: Won't break your design
- title: Stupid
  details: No magic, only rendering
footer: MIT Licensed | Copyright © 2020-present Nico Prat
---

This renderless component simply renders its slot in the order they've been mounted. It can be useful to chain up dialogs instead of stacking them for instance. It's a good way to be sure **rendering order is preserved** and multiple **children will never be rendered at the same time**, without adding any logic in your code.

## Demo

Wrap any other component that could be displayed or hidden. It **must use `v-if`** and not `v-show` (or any CSS property to hide it) because Enqueue will check if the vnode exists, not if it's visible.

```vue{7-9,11-13}
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

<GettingStartedDemo />


## Namespaces

When multiple queues are needed, namespaced queues are here to help (default is `'default'`):

```vue{7-9,11-13,15-17}
<template>
  <div>
    <el-button type="primary" @click="isDialog1Visible = isDialog2Visible = true">
      Open both dialogs
    </el-button>

    <Enqueue namespace="red">
      <el-dialog v-if="isDialog1Visible" visible title="Dialog 1" @close="isDialog1Visible = false">...</el-dialog>
    </Enqueue>

    <Enqueue namespace="red">
      <el-dialog v-if="isDialog2Visible" visible title="Dialog 2" @close="isDialog2Visible = false">...</el-dialog>
    </Enqueue>

    <Enqueue namespace="blue">
      <el-dialog v-if="isDialog3Visible" visible title="Dialog 3" @close="isDialog3Visible = false">...</el-dialog>
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
    isDialog3Visible: false,
  }),
}
</script>
```

<NamespaceDemo />
