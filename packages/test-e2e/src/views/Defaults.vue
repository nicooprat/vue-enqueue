<template>
  <div>
    <button data-cy="button1" @click="isVisible1 = isVisible2 = true">Open</button>
    <Enqueue>
      <button v-if="isVisible1" data-cy="button2" @click="isVisible1 = false">Close</button>
    </Enqueue>
    <Enqueue>
      <button v-if="isVisible2" data-cy="button3" @click="isVisible2 = false">Close</button>
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
  }),
}
</script>
