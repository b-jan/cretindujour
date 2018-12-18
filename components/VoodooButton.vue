<template>
  <div class="button-container">
    <span class="button-container__text">{{ buttonText }}</span>
  </div>
</template>

<script>
export default {
  name: 'VoodooButton',
  props: {
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.button-container {
  background-color: $button-primary;
  cursor: pointer;
  padding: 12px 16px 12px;
  border-radius: 5px;

  &:hover {
    background-color: $button-primary-hover;
  }

  &__text {
    font-family: voodoo-text-bold;
    color: $white;
    font-size: 14px;
  }
}
</style>
