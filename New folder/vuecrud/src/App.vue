<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark"> 
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link to= "/index" class="nav-link">All Items</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave{
  opacity: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>