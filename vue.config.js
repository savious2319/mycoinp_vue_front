module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/color.scss";
                    @import "@/assets/scss/include-media.scss";
                    @import "@/assets/scss/function.scss";
                `
            }
        }
    }
};