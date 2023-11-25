<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    [].forEach.call(eyes, (eye) => {
      let mouseX = eye.getBoundingClientRect().right
      if (eye.classList.contains('eye-left'))
        mouseX = eye.getBoundingClientRect().left

      const mouseY = eye.getBoundingClientRect().top
      const radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY)
      const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
      eye.style.transform = `rotate(${rotationDegrees}deg)`
    })
  })
})
</script>

<template>
  <div class="fc">
    <div class="chicken">
      <div class="head">
        <div class="crown">
          <div class="crown-p crown-p-one"></div>
          <div class="crown-p crown-p-two"></div>
          <div class="crown-p crown-p-three"></div>
        </div>
        <div class="eye eye-left">
          <div class="eye-inner"></div>
        </div>
        <div class="eye eye-right">
          <div class="eye-inner"></div>
        </div>
        <div class="nose"></div>
      </div>
      <div class="body">
        <div class="hand hand-left"></div>
        <div class="hand hand-right"></div>
      </div>
      <div class="foot foot-left"></div>
      <div class="foot foot-right"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.chicken {
  position: relative;
  width: 214px;
  height: 275px;
  z-index: 1;
  transform: scale(0.6);

  .head {
    width: 100%;
    height: 202px;
    background: #fdf5ad;
    border-radius: 60% 60% 45% 45% / 80% 80% 35% 35%;
    margin-top: 20px;
    position: absolute;
    border: 3px solid black;
    z-index: 1;

    .crown {
      position: absolute;
      left: 50%;
      top: -22px;
      margin-left: -15.5px;

      &-p {
        width: 20px;
        height: 30px;
        background: #fdf5ad;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #000;

        &:before {
          content: "";
          width: 20px;
          height: 40px;
          background: #fdf5ad;
          position: absolute;
          bottom: -2px;
          border-radius: 50%;
          z-index: 9;
          top: 5px;
          left: -2px;
        }

        &-one {
          left: -15px;
          transform: rotate(-20deg);
          top: 5px;

          &:before {
            top: 1px;
            left: 0px;
          }
        }

        &-two {
          &:before {
            top: 6px;
            left: 0px;
          }
        }

        &-three {
          left: 15px;
          transform: rotate(20deg);
          top: 3px;

          &:before {
            top: 5px;
            left: -7px;
          }
        }
      }
    }

    .eye {
      display: flex;
      width: 48px;
      height: 48px;
      position: absolute;
      bottom: 41px;
      background: #fff;
      border-radius: 50%;

      &-left {
        left: 26px;
      }

      &-right {
        right: 26px;
      }

      &-inner {
        position: relative;
        display: inline-block;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: black;
        border-radius: 50%;
        margin-left: 4px;
        margin-top: 4px;

        &:after {
          position: absolute;
          top: 2px;
          left: 10px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          content: " ";
        }
      }
    }

    .nose {
      width: 38px;
      height: 40px;
      background: #ffb736;
      bottom: 0px;
      position: absolute;
      left: 50%;
      margin-left: -19px;
      bottom: 17px;
      border-radius: 50%;
      border: 3px solid #fd5901;

      &:after {
        content: "";
        width: 38px;
        height: 20px;
        background: #fdf5ad;
        position: absolute;
        bottom: -3px;
        border-top: 3px solid #fd5901;
        left: -3px;
      }
    }
  }

  .body {
    width: 92px;
    height: 50px;
    background: #fdf5ad;
    margin-left: 63px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    border: 3px solid black;
    bottom: 8px;

    .hand {
      width: 15px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 9px;
      border: 3px solid #000;

      opacity: 0.4;

      &-left {
        left: 3px;
        transform: rotate(-20deg);
      }

      &-right {
        right: 3px;
        transform: rotate(20deg);
      }

      &:before {
        content: "";
        width: 15px;
        height: 10px;
        background: #fdf5ad;
        position: absolute;
        border-radius: 50%;
        margin-left: -3px;
        margin-top: -3px;
      }
    }
  }

  .foot {
    background: #ffb736;
    height: 23px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
    border: 3px solid #000;

    &-left {
      bottom: 1px;
      left: 63px;
      -webkit-transform: rotate(-35deg);
      transform: rotate(-35deg);
    }

    &-right {
      width: 16px;
      bottom: 3px;
      right: 64px;
      z-index: -1;
    }
  }
}
</style>
