var pageination = '<script type="text/x-template" id="pageination">\n' +
	'    <div class="pageination_align">\n' +
	'        <div class="pageination" v-if="pageinationTotal">\n' +
// 	'            <div @click="pageUp(0)" class="pagination_page" :class="startDisabled?\'disabled\':\'\'">首页</div>\n' +
	
	'            <div class="pagination_page" :class="item==pageinationCurrentPage?\'pagination_page_active\':\'\'"\n' +
	'                 v-for="item in pageinationLength" @click="jump(item)">\n' +
	'                {{item}}\n' +
	'            <span style="margin-left:16px">/</span></div>\n' +
	
	'        </div>\n' +
		'            <div @click="pageUp(1)" class="pagination_prev pagination_page" :class="startDisabled?\'disabled\':\'\'">←&nbsp 上一页</div>\n' +
		'            <div @click="pageDown(1)" class="pagination_next pagination_page" :class="endDisabled?\'disabled\':\'\'">下一页&nbsp →</div>\n' +
	// 	'            <div @click="pageDown(0)" class="pagination_page pagination_page_right" :class="endDisabled?\'disabled\':\'\'">\n' +
	// 	'                尾页\n' +
		'            </div>\n' +
	'    </div>\n' +
	'</script>'
var dom = document.querySelector("body");
dom.innerHTML += pageination;
Vue.component('pageination', {
	props: ['total', 'size', 'page', 'changge', 'isUrl'],
	template: '#pageination',
	data: function() {
		return {
			pageinationTotal: this.total,
			pageinationSize: this.size ? this.size : 10,
			pageinationLength: [],
			pageinationCurrentPage: this.page ? this.page : 1,
			pageinationPage: 0,
			startDisabled: true,
			endDisabled: true,
			pageChangge: this.changge,
			pageIsUrl: this.isUrl ? true : false,
			h:0
		}
	},
	methods: {
		jump:function(item) {
			this.pageinationCurrentPage = item;
			this.pagers();
			this.pageChangge(this.pageinationCurrentPage);
			window.scrollTo(0,this.h+60);
		},
		pagers:function() {
			this.pageinationPage = Math.ceil(this.pageinationTotal / this.pageinationSize);
			if (this.pageIsUrl) {
				this.$router.replace({
					path: this.$route.path,
					query: {
						page: this.pageinationCurrentPage,
					}
				});
			}
			this.startDisabled = this.pageinationCurrentPage != 1 ? false : true;
			this.endDisabled = this.pageinationCurrentPage != this.pageinationPage ? false : true;
			if (this.pageinationPage == 0) this.endDisabled = true;
			this.pageinationLength = [];
			let start = this.pageinationCurrentPage - 4 > 1 ? this.pageinationCurrentPage - 4 : 1;
			let interval = this.pageinationCurrentPage - start;
			let end = (9 - interval) < this.pageinationPage ? (9 - interval) : this.pageinationPage;
			if ((end - start) != 8) {
				end = end + (8 - (end - start)) < this.pageinationPage ? end + (8 - (end - start)) : this.pageinationPage;
				if ((end - start) != 8) {
					start = (end - 8) > 1 ? (end - 8) : 1;
				}
			}
			for (let i = start; i <= end; i++) {
				this.pageinationLength.push(i);
			}
		},
		pageUp:function(state) {
			if (this.startDisabled) return;
			if (this.pageinationCurrentPage - 1 != 0 && state == 1) {
				this.jump(this.pageinationCurrentPage - 1);
			} else {
				this.jump(1);
			}
		},
		pageDown:function(state) {
			if (this.endDisabled) return;
			if (this.pageinationCurrentPage + 1 != this.pageinationPage && state == 1) {
				this.jump(this.pageinationCurrentPage + 1);
			} else {
				this.jump(this.pageinationPage);
			}
		},
		pageCurrentChange:function() {
			this.pageChangge(this.pageinationCurrentPage);
			this.pagers();
		}
	},
	created:function() {
		this.pageCurrentChange();
	},
	mounted:function(){
		this.h=document.getElementsByClassName("product-banner")[0].offsetHeight;
		console.log(this.h)
	},
	watch: {
		total: function(val, oldVal) {
			this.pageinationTotal = val;
			this.pagers();
		},
		page: function(val, oldVal) {
			this.pageinationCurrentPage = val;
			this.pagers();
		}
	}
})
