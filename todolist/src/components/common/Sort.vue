<template>
  <div style="height: 50px;line-height: 50px;width: 100%;border-bottom: #8c8c8c 1px solid;position:relative;">
    <div class="radius"></div>
    <span style="position:absolute;left: 90px;">{{course.cname}}</span>
  </div>
</template>

<script>
export default {
  name: "Sort",
  props:['course'],
}
</script>

<style scoped>
.radius {
  position: absolute;
  left: 30px;
  bottom: 10px;
  border-radius: 30px;
  background-color: #409EFF;
  height: 30px;
  width: 30px;
}
</style>