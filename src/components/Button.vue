<template>
  <button
  @click="onClick"
  :disabled="disabled"
  class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    disabled: {
      default: true,
    }
  }
}
</script>

