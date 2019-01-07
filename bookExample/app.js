// To add method we have to call method attribute on Vue Instance

const book = new Vue({
    el: '#book',
    data: {
      title: 'The Sirens of Titan',
      author: 'Kurt Vonnegut',
      summary: 'This is a summary of the Sirens of Titan.',
      showDetail: false
    },
    // methods:{
    // 	sayHello: function(){
    // 		// alert("Hello");
    // 		alert(this.title);
    // 	}
    methods:{
    	toggleDetails: function(){
    		this.showDetail = !this.showDetail

    	}
    }
});