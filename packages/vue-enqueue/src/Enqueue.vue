<script>
// Shared queues across all instances
const queue = {}

export default {
  props: {
    namespace: {
      type: String,
      default: 'default',
    },
  },
  data () {
    return {
      id: this, // Use own reference as reactive id
      queue, // Must bind to component to make it reactive
    }
  },
  computed: {
    getQueue () {
      return this.queue[this.namespace]
    },
  },
  created () {
    // Init queue if needed
    this.queue[this.namespace] = this.queue[this.namespace] || []
    // Push itself to the queue ASAP if not empty
    if (this.$slots.default) {
      this.getQueue.push(this.id)
    }
  },
  beforeUpdate () {
    const index = this.getQueue.indexOf(this.id)
    if (index > -1) {
      // If already in the queue, remove if empty
      if (!this.$slots.default) {
        this.getQueue.splice(index, 1)
      }
    } else if (this.$slots.default) {
      // Else push to the queue if not empty
      this.getQueue.push(this.id)
    }
  },
  render (h) {
    // Only render if this component is the first in the queue
    if (this.getQueue[0] !== this.id) {
      return
    }
    return this.$slots.default
  },
}
</script>
