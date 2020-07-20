
<template>
  <div>
    <nav class="navbar navbar-default navbar-dark bg-dark">
  
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="navbar-brand" to="/" tag="li" >Stock Trader</router-link>
        <ul class="nav navbar-nav float-right">
          <li class="nav-item " active-class="active" >
            <router-link class="nav-link" to="/portfolio" tag="li">
              Portfolio
            </router-link>
          </li>
          <li class="nav-item" active-class="active">
            <router-link class="nav-link"  tag="a"  to="/stocks"> Stocks </router-link>
          </li>
        
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>



</style>