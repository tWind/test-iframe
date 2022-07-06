<template>
  <div class="test-form">
    <div class="test-form-input">
      <input type="text" @change="changeHandler" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
    <div class="test-form-control">
      <button @click="submitForm()">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestForm',
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    submitForm() {
      console.log(this.$data)
      this.$emit('submitForm', this.$data);
    },
  }
}
</script>

<style lang="scss" scoped>
.test-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 1rem;

  input {
    padding: .5rem .25rem;
    margin: .25rem;
    border-radius: 3px;
    background-color: #fff;
    border: 1px rgb(92, 77, 92) solid;
  }
}

.test-form-control {
  button {
    display: inline-block;
    padding: .25rem;
  }
}
</style>
