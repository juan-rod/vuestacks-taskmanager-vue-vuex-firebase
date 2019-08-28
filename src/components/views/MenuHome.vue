<template>
  <div class="menu-home menu">
    <div class="menu-container" size="A4">
      <div class="menu-header">
        <div class="menu-header-top-border"></div>
      </div>
      <div class="menu-body"></div>
      <div class="menu-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style scoped>
.menu {
  border: 1px solid red;
  height: 100%;
  width: 100%;
}
.menu-home {
  padding: 10em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* .menu-container {
  height: 500px;
  width: 300px;
  background: #eee;
} */
.menu-container {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(220, 220, 220);
  box-shadow: 6px 8px 5px 0px rgba(121, 120, 120, 0.2);
  padding: 20px;
}
.menu-container[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}
.menu-header {
  border: 1px solid red;
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.menu-header-top-border {}
.menu-body {
  border: 1px solid blue;
  flex: 1;
}
.menu-footer {
  border: 1px solid green;
  height: 100px;
}
</style>