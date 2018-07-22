<template>
  <div class="form-main container-fluid">
    <form method="post">
      <h2 class="text-center">
        Exchange money with Today's <span class="brand-highlight">MiddleRate</span>
      </h2>
      <div class="row">
        <div class="col-xs-9 col-md-9">
          <div class="form-group has-feedback">
            <input v-model.number="amount"
                   id="ex-form-amount" class="form-control" type="text" name="amountOrigin"
                   required>
            <i class="form-control-feedback glyphicon" aria-hidden="true"></i>
            <label for="ex-form-amount">jumlah</label>
          </div>
        </div>
        <div class="col-xs-3 col-md-3">
          <div class="form-group">
            <select v-model="originCurrency" class="form-control">
              <option v-for="(config,code) in currencySet"
                      v-bind:key="code" v-bind:value="code">{{ code }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-9 col-md-9">
          <div class="form-group">
            <span class="form-control">{{ currencySet[originCurrency].rate[destCurrency] }}</span>
            <i class="form-control-feedback glyphicon" aria-hidden="true"></i>
            <label>rate tengah hari ini</label>
          </div>
        </div>
        <div class="col-xs-3 col-md-3">
          <div class="form-group">
            <select v-model="destCurrency" class="form-control">
              <option v-for="(rate,code) in currencySet[originCurrency].rate"
                      v-bind:key="code" v-bind:value="code">{{ code }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group ex-result">
            <span class="form-control">
              <div>{{ amount }}</div>
              <div>
                <small class="pull-left">(rate)</small> <small><strong>x</strong></small>
                {{ currencySet[originCurrency].rate[destCurrency] }}
              </div>
              <hr>
              <div>{{ amount * currencySet[originCurrency].rate[destCurrency] }}</div>
              <div>
                <small class="pull-left">(fee)</small> ({{ currencySet[destCurrency].fee }})
              </div>
              <hr>
              <div>
                IDR <strong>
                {{ (currencySet[originCurrency].rate[destCurrency] * amount)
                                              - currencySet[destCurrency].fee }}
              </strong>
              </div>
            </span>
            <i class="form-control-feedback glyphicon" aria-hidden="true"></i>
            <label>jumlah yang didapat dengan rate tengah hari ini</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group action">
            <button class="btn btn-primary" type="submit">start exchange</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ExchangeForm',
  data() {
    return {
      head: 'Send Money with Today\'s Middle-Rate',
      lead: 'saver and cheaper',
      currencySet: {
        IDR: {
          fee: 5000,
          rate: {
            SGD: 103.85 / 1000000,
          },
        },
        SGD: {
          fee: 0.5,
          rate: {
            IDR: 9629.41,
          },
        },
      },
      originCurrency: 'SGD',
      destCurrency: 'IDR',
      amount: 1000,
    };
  },
  created() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div[class^="col-"] {
    padding: 0 2px;
  }

  .form-group.ex-result {
    height: 100%;
  }

  .form-group.ex-result .form-control {
    text-align: right;
    padding-right: 10px;
    padding-bottom: 20px;
  }

  .form-group.action {
    text-align: center;
  }

  .form-control hr {
    margin: 15px 0;
  }

  .form-group select.form-control {
    padding: 0;
  }

  small {
    font-size: 70%;
  }
</style>
