<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './layout/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

