<template>
  <section class="welcome container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="cover-heading">
          Send Money with Today's <span class="brand">Middle Rate</span>
        </h1>
        <p class="lead">saver and cheaper</p>
        <p class="lead">
          <router-link
            :to="{ name: 'ExchangeForm', params: {}}"
            class="btn btn-lg btn-default">Get Started!</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      foo: 'foo',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome .brand {
    color: #f27b35;
  }
</style>
