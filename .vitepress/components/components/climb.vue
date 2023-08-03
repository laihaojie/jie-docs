<script setup lang="ts">
</script>

<template>
  <div class="loader"></div>
</template>

<style lang='scss' scoped>
.loader {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 0 auto;
}

.loader:before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #2a9d8f;
  -webkit-animation: loading-bounce 0.5s ease-in-out infinite alternate;
  animation: loading-bounce 0.5s ease-in-out infinite alternate;
}

.loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 7px;
  width: 45px;
  border-radius: 4px;
  -webkit-box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
  box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
  -webkit-animation: loading-step 1s ease-in-out infinite;
  animation: loading-step 1s ease-in-out infinite;
}

@-webkit-keyframes loading-bounce {
  0% {
    -webkit-transform: scale(1, 0.7);
    transform: scale(1, 0.7);
  }

  40% {
    -webkit-transform: scale(0.8, 1.2);
    transform: scale(0.8, 1.2);
  }

  60% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  100% {
    bottom: 140px;
  }
}

@keyframes loading-bounce {
  0% {
    -webkit-transform: scale(1, 0.7);
    transform: scale(1, 0.7);
  }

  40% {
    -webkit-transform: scale(0.8, 1.2);
    transform: scale(0.8, 1.2);
  }

  60% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  100% {
    bottom: 140px;
  }
}

@-webkit-keyframes loading-step {
  0% {
    -webkit-box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
      0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2;
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
      0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2;
  }

  100% {
    -webkit-box-shadow: 0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2,
      -70px 90px 0 rgba(0, 0, 0, 0);
    box-shadow: 0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2,
      -70px 90px 0 rgba(0, 0, 0, 0);
  }
}

@keyframes loading-step {
  0% {
    -webkit-box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
      0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2;
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
      0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2;
  }

  100% {
    -webkit-box-shadow: 0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2,
      -70px 90px 0 rgba(0, 0, 0, 0);
    box-shadow: 0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 90px 0 #f2f2f2,
      -70px 90px 0 rgba(0, 0, 0, 0);
  }
}
</style>
