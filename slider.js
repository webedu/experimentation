// look here!!
// https://github.com/spatie/vue-tabs-component 

Vue.component('w4u-module', {
  data: function() { return { module: 0} },
  props: { module2: String},
  template: '<div class="w4u-module" ><slot></slot><span>{{countPages}}</span></div>', 
  computed: {
  // countPages: function () { return this.$root.$children.lenght; }
    countPages: function () { 
	$root = this.$root.$children;
	//$allPages = this.$root.$children.find(child => { return child.context.$options._componentTag === "w4u-page"; });
	$xyz = this.$slots.default;
	$pages = $xyz.filter(child => { return child.componentOptions && child.componentOptions.tag === "w4u-page"; });
	$len = $pages.length;
	$abc = this;
	return $len; }
  }	  
})    
  
Vue.component('w4u-page', {
  data: function() { return { page: 0, mk: 0} },
  template: '<div class="w4u-page" v-on:slider-change="this.mk=$event"><slot></slot><span>{{mk}}</span></div>'  
})  
  
Vue.component('w4u-slider', {
  model: { prop: 'value', event: 'change' },
  props: { value: Number},  
  data: function() { return { value: 0} },
  template: '<input type="range" step="any" v-bind:value="value" min="0" max="1" autofocus v-on:change="$emit(\'slider-change\', $event.target.value)">'  
})


