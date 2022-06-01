Nova.booting((Vue) => {
    Vue.component('index-nova-image-cropper', require('./components/IndexField').default);
    Vue.component('detail-nova-image-cropper', require('./components/DetailField').default);
    Vue.component('form-nova-image-cropper', require('./components/FormField').default);
})
