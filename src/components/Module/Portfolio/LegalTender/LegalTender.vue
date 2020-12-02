<template>
    <section>
        <div class="left" v-if="$screen.width > 641">
            <span style="color:#fff">left</span>
        </div>
        <div class="right" v-if="$screen.width > 641">
            <span style="color:#fff">right</span>

        </div>
    </section>
</template>

<script lang="ts">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "LegalTender.scss";
</style>
