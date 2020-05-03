<script>
// Shared queues across all instances
const queues = {}

export default {
  props: {
    namespace: {
      type: String,
      default: 'default',
    },
  },
  data () {
    // Init namespaced queue if needed
    queues[this.namespace] = queues[this.namespace] || []
    return {
      id: this, // Use own reference as reactive id
      queue: queues[this.namespace], // Must bind to component to make it reactive
    }
  },
  created () {
    // Push itself to the queue ASAP if not empty
    if (this.$slots.default) {
      this.queue.push(this.id)
    }
  },
  beforeUpdate () {
    const index = this.queue.indexOf(this.id)
    if (index > -1) {
      // If already in the queue, remove if empty
      if (!this.$slots.default) {
        this.queue.splice(index, 1)
      }
    } else if (this.$slots.default) {
      // Else push to the queue if not empty
      this.queue.push(this.id)
    }
  },
  render (h) {
    // Only render if this component is the first in the queue
    if (this.queue[0] !== this.id) {
      return
    }
    return this.$slots.default
  },
}
</script>
