<template>
  <div>
    <button data-cy="start" @click="isVisible1 = isVisible2 = isVisible3 = true">Open</button>
    <Enqueue namespace="left">
      <button v-if="isVisible1" data-cy="button1" @click="isVisible1 = false">Close 1</button>
    </Enqueue>
    <Enqueue namespace="left">
      <button v-if="isVisible2" data-cy="button2" @click="isVisible2 = false">Close 2</button>
    </Enqueue>
    <Enqueue namespace="right">
      <button v-if="isVisible3" data-cy="button3" @click="isVisible3 = false">Close 3</button>
    </Enqueue>
  </div>
</template>

<script>
import Enqueue from '../../../vue-enqueue/src/Enqueue'

export default {
  components: {
    Enqueue,
  },
  data: () => ({
    isVisible1: false,
    isVisible2: false,
    isVisible3: false,
  }),
}
</script>
