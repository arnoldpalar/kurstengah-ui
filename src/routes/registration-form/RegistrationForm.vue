<template>
  <div class="form-main">
    <form method="post">
      <h2 class="text-center">I want to exchange money</h2>
      <div class="form-group has-success has-feedback">
        <input id="ex-form-amount" class="form-control" type="text" name="name"><i class="form-control-feedback glyphicon glyphicon-ok" aria-hidden="true"></i>
        <label for="ex-form-amount">in amount</label>
      </div>
      <div class="form-group has-error has-feedback">
        <input class="form-control" type="email" name="email" placeholder="Email"><i class="form-control-feedback glyphicon glyphicon-remove" aria-hidden="true"></i>
        <label for="ex-form-amount">in amount</label>
      </div>
      <div class="form-group">
        <textarea class="form-control" rows="14" name="message" placeholder="Message"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">send </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        head: 'Send Money with Today\'s Middle-Rate',
        lead: 'saver and cheaper'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
