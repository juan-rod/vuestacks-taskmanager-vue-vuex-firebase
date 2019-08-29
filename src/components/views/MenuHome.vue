<template>
  <div class="menu-home menu">
    <div class="menu-container" size="A4">
      <div class="menu-header">
        <div class="menu-header-top-border"></div>
        <div class="menu-header-details"></div>
      </div>
      <div class="menu-body">
        <div class="menu-item-card">
          <div class="menu-item-header">
            <div class="menu-item-title">
              <p>Ripe Mango Salad</p>
              <p>Bankok, Thailand | 14°5'N 90°5667'W</p>
            </div>
            <div class="menu-item-details">
              <span>13</span>
              <span>From a C cone</span>
              <span>with your H hands</span>
              <span>on a S stick</span>
            </div>
          </div>
          <div class="menu-item-body">
            <p>poached shrimp, shredded coconut, bean sprouts, carrot, red onion, scallion, peanuts, cilantro, basil</p>
          </div>
        </div>
      </div>
      <div class="menu-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuHome'
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
  /* border: 1px solid blue; */
  flex: 1;
}
.menu-item-card {
  border: 2px solid black;
  padding: 6px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
}
.menu-item-card .menu-item-header, .menu-item-body {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.menu-item-card .menu-item-header .menu-item-title {
  font-size: 1.5em;
}
.menu-item-card .menu-item-header .menu-item-title p:nth-of-type(2) {
  border-top: 1px dotted black;
}
.menu-footer {
  border: 1px solid green;
  height: 100px;
}
</style>