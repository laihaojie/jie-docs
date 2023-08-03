<script setup lang="ts">
</script>

<template>
  <div class="washing"></div>
</template>

<style lang='scss' scoped>
.washing {
  width: 120px;
  height: 150px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #ddd), color-stop(51%, #bbb)),
    -webkit-gradient(linear, left top, left bottom, from(#ddd), to(#ddd)), -webkit-gradient(linear, left top, left bottom, from(#ddd), to(#ddd)),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%);
  background-image: linear-gradient(#ddd 50%, #bbb 51%),
    linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%);
  background-position: 0 20px, 45px 0, 8px 6px, 55px 3px, 75px 3px, 95px 3px;
  background-size: 100% 4px, 1px 23px, 30px 8px, 15px 15px, 15px 15px, 15px 15px;
  position: relative;
  border-radius: 6%;
  -webkit-animation: shake 3s ease-in-out infinite;
  animation: shake 3s ease-in-out infinite;
  -webkit-transform-origin: 60px 180px;
  -ms-transform-origin: 60px 180px;
  transform-origin: 60px 180px;
}

.washing:before {
  content: "";
  position: absolute;
  left: 5px;
  top: 100%;
  width: 7px;
  height: 5px;
  background: #aaa;
  border-radius: 0 0 4px 4px;
  -webkit-box-shadow: 102px 0 #aaa;
  box-shadow: 102px 0 #aaa;
}

.washing:after {
  content: "";
  position: absolute;
  width: 95px;
  height: 95px;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 20px;
  background-color: #bbdefb;
  background-image: linear-gradient(to right, #0004 0%, #0004 49%, #0000 50%, #0000 100%),
    linear-gradient(135deg, #64b5f6 50%, #607d8b 51%);
  background-size: 30px 100%, 90px 80px;
  border-radius: 50%;
  background-repeat: repeat, no-repeat;
  background-position: 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 10px solid #DDD;
  -webkit-box-shadow: 0 0 0 4px #999 inset, 0 0 6px 6px #0004 inset;
  box-shadow: 0 0 0 4px #999 inset, 0 0 6px 6px #0004 inset;
  -webkit-animation: spin 3s ease-in-out infinite;
  animation: spin 3s ease-in-out infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }

  75% {
    -webkit-transform: rotate(750deg);
    transform: rotate(750deg)
  }

  100% {
    -webkit-transform: rotate(1800deg);
    transform: rotate(1800deg)
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }

  75% {
    -webkit-transform: rotate(750deg);
    transform: rotate(750deg)
  }

  100% {
    -webkit-transform: rotate(1800deg);
    transform: rotate(1800deg)
  }
}

@-webkit-keyframes shake {

  65%,
  80%,
  88%,
  96% {
    -webkit-transform: rotate(0.5deg);
    transform: rotate(0.5deg)
  }

  50%,
  75%,
  84%,
  92% {
    -webkit-transform: rotate(-0.5deg);
    transform: rotate(-0.5deg)
  }

  0%,
  50%,
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
}

@keyframes shake {

  65%,
  80%,
  88%,
  96% {
    -webkit-transform: rotate(0.5deg);
    transform: rotate(0.5deg)
  }

  50%,
  75%,
  84%,
  92% {
    -webkit-transform: rotate(-0.5deg);
    transform: rotate(-0.5deg)
  }

  0%,
  50%,
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
}
</style>
