<template>
  <div class="banner-box"></div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style scoped>
/*Logo image style*/
.banner-box {
  text-align: center;
  background-image: url("../../assets/images/Banner.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  margin: auto;
}

/*Match the banner style when accessing from the computer*/
@media (min-width: 768px) {
  .banner-box {
    width: 550px;
    height: 130px;
  }
}

/*Match the style of the banner when accessing from the mobile terminal*/
@media (max-width: 768px) {
  .banner-box {
    width: 420px;
    height: 110px
  }
}
@media (max-width: 550px) {
  .banner-box {
    width: 72%;
    height: 90px;
  }
}
@media (max-width: 460px) {
  .banner-box {
    width: 72%;
    height: 73px;
  }
}
/*end*/

</style>