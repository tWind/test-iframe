<template>
  <test-form @submit-form="updateFrame" />
  <iframe :src="frameUrl" name="testFrame" />
</template>

<script>
import constants from '@/constants.js';

import TestForm from '@/components/TestForm';

export default {
  name: 'App',
  data() {
    return {
      frameUrl: constants.IFRAME_URL,
    }
  },
  components: {
    TestForm,
  },
  methods: {
    updateFrame(data) {
      const testFrame = window.frames.testFrame;
      const message = JSON.stringify(data);
      testFrame.postMessage(`${message}`, '*');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
