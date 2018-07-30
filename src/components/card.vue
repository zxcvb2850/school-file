<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="less">
  @import "~assets/style/index";

  .card {
    -webkit-border-radius: @height20;
    -moz-border-radius: @height20;
    border-radius: @height20;
    width: auto;
    background-color: @mainIconColor;
    /*-webkit-box-shadow: @height10 @height10 @height5 blur #000;
    -moz-box-shadow: @height10 @height10 @height5 blur #000;*/
    box-shadow: @height10 @height8 @height10 #ccc;
    overflow: hidden;
  }
</style>
