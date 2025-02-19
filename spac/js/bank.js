var app = new Vue({
	          el: '#app',
	          data:function() {
	              return {
					cases:'',
					swiperShow:false,
					expandList:[],
					slides:'',
					// 商品
	                total:{
						halls:{
							lists:[
							{
								banUrl:'img/halls/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/halls/one/2.jpg"},
									{src:"img/halls/one/3.jpg"},
									{src:"img/halls/one/4.jpg"},
									{src:"img/halls/one/5.jpg"},
									{src:"img/halls/one/6.jpg"},
								],
								proList:[
									{src:"img/list/Thunderball.jpg",name:"Thunderball",url:"details/product_details.html?type=Thunderball"},
									{src:"img/list/A750.jpg",name:"A750",url:"details/product_details.html?type=A750"},
									{src:"img/list/TST.jpg",name:"TST",url:"details/product_details.html?type=TST"},								
								]
							},
						],
						},
						dining:{
							lists:[
							{
								banUrl:'img/dining/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/dining/one/2.jpg"},
									{src:"img/dining/one/3.jpg"},
									{src:"img/dining/one/4.jpg"},
									{src:"img/dining/one/5.jpg"},
									{src:"img/dining/one/6.jpg"},
								],
								proList:[
									{src:"img/list/Loungescape.jpg",name:"Loungescape",url:"details/product_details.html?type=Loungescape"},
									{src:"img/list/Slingerlamp.jpg",name:"Slingerlamp",url:"details/product_details.html?type=Slingerlamp"},
									{src:"img/list/Result.jpg",name:"Result",url:"details/product_details.html?type=Result"},
								]
							},
						],
						},
						focus:{
							lists:[
							{
								banUrl:'img/focus/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/focus/one/2.jpg"},
									{src:"img/focus/one/3.jpg"},
									{src:"img/focus/one/4.jpg"},
									{src:"img/focus/one/5.jpg"},
								],
								proList:[
									{src:"img/list/CC.jpg",name:"CC",url:"details/product_details.html?type=CC"}
								]
							},
						],
						},
						call:{
							lists:[
							{
								banUrl:'img/call/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/call/one/2.jpg"},
									{src:"img/call/one/3.jpg"},
									{src:"img/call/one/4.jpg"},
									{src:"img/call/one/5.jpg"},
									{src:"img/call/one/6.jpg"},
									{src:"img/call/one/7.jpg"},
								],
								proList:null
							},
						],
						},
						office:{
							lists:[
							{
								banUrl:'img/office/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/office/one/2.jpg"},
									{src:"img/office/one/3.jpg"},
									{src:"img/office/one/4.jpg"},
								],
								proList:[
									{src:"img/list/A1200.jpg",name:"A1200",url:"details/product_details.html?type=A1200"},
									{src:"img/list/Outline.jpg",name:"Outline",url:"details/product_details.html?type=Outline"},
									{src:"img/list/SETT.jpg",name:"SETT",url:"details/product_details.html?type=SETT"}
								]
							},
						],
						},
						training:{
							lists:[
							{
								banUrl:'img/training/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/training/one/2.jpg"},
									{src:"img/training/one/3.jpg"},
									{src:"img/training/one/4.jpg"},
								],
								proList:[
									{src:"img/list/A22.jpg",name:"A22",url:"details/product_details.html?type=A22"}
								]
							},
						],
						},
						vip:{
							lists:[
							{
								banUrl:'img/vip/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/vip/one/2.jpg"},
									{src:"img/vip/one/3.jpg"},
									{src:"img/vip/one/4.jpg"},
								],
								proList:null
							},
						],
						},
						healthy:{
							lists:[
							{
								banUrl:'img/healthy/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/healthy/one/2.jpg"},
									{src:"img/healthy/one/3.jpg"},
									{src:"img/healthy/one/4.jpg"},
								],
								proList:null
							},
						],
						},
						edu:{
							lists:[
							{
								banUrl:'img/edu/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/edu/one/2.jpg"},
									{src:"img/edu/one/3.jpg"},
									{src:"img/edu/one/4.jpg"},
								],
								proList:[
									{src:"img/list/A450.jpg",name:"A450",url:"details/product_details.html?type=A450"},
								]
							},
						],
						},
						meeting:{
							lists:[
							{
								banUrl:'img/meeting/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/meeting/one/2.jpg"},
									{src:"img/meeting/one/3.jpg"},
									{src:"img/meeting/one/4.jpg"},
									{src:"img/meeting/one/5.jpg"},
									{src:"img/meeting/one/6.jpg"},
								],
								proList:[
									{src:"img/list/Aero.jpg",name:"Aero",url:"details/product_details.html?type=Aero"},
									{src:"img/list/Dukdalf.jpg",name:"Dukdalf",url:"details/product_details.html?type=Dukdalf"},
									{src:"img/list/A22.jpg",name:"A22",url:"details/product_details.html?type=A22"}
								]
							},
							{
								banUrl:'img/meeting/two/1.jpg',
								mark:"",
								picList:[
									{src:"img/meeting/two/2.jpg"},
									{src:"img/meeting/two/3.jpg"},
									{src:"img/meeting/two/4.jpg"},
								],
								proList:[
									{src:"img/list/Hesta.jpg",name:"Hesta",url:"details/product_details.html?type=Hesta"},
									{src:"img/list/IC.jpg",name:"IC",url:"details/product_details.html?type=IC"},
									{src:"img/list/Mehes.jpg",name:"Mehes",url:"details/product_details.html?type=Mehes"}
								]
							},
							{
								banUrl:'img/meeting/three/1.jpg',
								mark:"",
								picList:[
									{src:"img/meeting/three/2.jpg"},
									{src:"img/meeting/three/3.jpg"},
									{src:"img/meeting/three/4.jpg"},
								],
								proList:[
									{src:"img/list/WELL.jpg",name:"WELL",url:"details/product_details.html?type=WELL"},
								]
							},
						],
						},
						open:{
							lists:[
							{
								banUrl:'img/open/one/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/one/2.jpg"},
									{src:"img/open/one/3.jpg"},
									{src:"img/open/one/4.jpg"},
								],
								proList:[
									{src:"img/list/A750.jpg",name:"A750",url:"details/product_details.html?type=A750"},
									{src:"img/list/A1200.jpg",name:"A1200",url:"details/product_details.html?type=A1200"},
									{src:"img/list/A2020.jpg",name:"A2020",url:"details/product_details.html?type=A2020"},
								]
							},
							{
								banUrl:'img/open/two/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/two/2.jpg"},
									{src:"img/open/two/3.jpg"},
									{src:"img/open/two/4.jpg"},
								],
								proList:[
									{src:"img/list/Aero.jpg",name:"Aero",url:"details/product_details.html?type=Aero"},
									{src:"img/list/Bor.jpg",name:"Bor",url:"details/product_details.html?type=Bor"},
									{src:"img/list/Balance.jpg",name:"Balance",url:"details/product_details.html?type=Balance"},
								]
							},
							{
								banUrl:'img/open/three/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/three/2.jpg"},
									{src:"img/open/three/3.jpg"},
									{src:"img/open/three/4.jpg"},
									{src:"img/open/three/5.jpg"},
								],
								proList:[
									{src:"img/list/Dukdalf.jpg",name:"Dukdalf",url:"details/product_details.html?type=Dukdalf"},
									{src:"img/list/Hesta.jpg",name:"Hesta",url:"details/product_details.html?type=Hesta"},
									{src:"img/list/Ellen lounge.jpg",name:"Ellen lounge",url:"details/product_details.html?type=EllenLounge"},
								]
							},
							{
								banUrl:'img/open/four/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/four/2.jpg"},
									{src:"img/open/four/3.jpg"},
									{src:"img/open/four/4.jpg"},
								],
								proList:[
									{src:"img/list/IC.jpg",name:"IC",url:"details/product_details.html?type=IC"},
									{src:"img/list/Kaigan.jpg",name:"Kaigan",url:"details/product_details.html?type=Kaigan"},
									{src:"img/list/Layers.jpg",name:"Layers",url:"details/product_details.html?type=Layers"},
								]
							},
							{
								banUrl:'img/open/five/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/five/2.jpg"},
									{src:"img/open/five/3.jpg"},
									{src:"img/open/five/4.jpg"},
								],
								proList:[
									{src:"img/list/Loungescape.jpg",name:"Loungescape",url:"details/product_details.html?type=Loungescape"},
									{src:"img/list/Mehes.jpg",name:"Mehes",url:"details/product_details.html?type=Mehes"},
									{src:"img/list/Museum.jpg",name:"Museum",url:"details/product_details.html?type=Museum"},
								]
							},
							{
								banUrl:'img/open/six/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/six/2.jpg"},
									{src:"img/open/six/3.jpg"},
									{src:"img/open/six/4.jpg"},
								],
								proList:[
									{src:"img/list/Pyramid.jpg",name:"Pyramid",url:"details/product_details.html?type=Pyramid"},
									{src:"img/list/SETT.jpg",name:"SETT",url:"details/product_details.html?type=SETT"},
									{src:"img/list/SDK.jpg",name:"SDK",url:"details/product_details.html?type=SDK"},
								]
							},
							{
								banUrl:'img/open/seven/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/seven/2.jpg"},
									{src:"img/open/seven/3.jpg"},
									{src:"img/open/seven/4.jpg"},
								],
								proList:[
									{src:"img/list/UNIT.jpg",name:"UNIT",url:"details/product_details.html?type=UNIT"},
									{src:"img/list/TST.jpg",name:"TST",url:"details/product_details.html?type=TST"},
									{src:"img/list/Slingerlamp.jpg",name:"Slingerlamp",url:"details/product_details.html?type=Slingerlamp"},
								]
							},
							{
								banUrl:'img/open/eight/1.jpg',
								mark:"",
								picList:[
									{src:"img/open/eight/2.jpg"},
									{src:"img/open/eight/3.jpg"},
									{src:"img/open/eight/4.jpg"},
								],
								proList:[
									{src:"img/list/WELL.jpg",name:"WELL",url:"details/product_details.html?type=WELL"},
									{src:"img/list/ZINN.jpg",name:"ZINN",url:"details/product_details.html?type=ZINN"},
								]
							},
						],
						},
					} 
	              }
	          },
			  created:function(){
				  var url = location.search;   //获取url中"?"符后的字串
				  var theRequest = new Object();  
				  if (url.indexOf("?") != -1){
				  	var str = url.substr(1);
				  	strs = str.split("&");
					 for (let i = 0; i < strs.length; i++) {  
						theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);  
					} 
				  	var num=theRequest.type;
					console.log(num)
				  }
				  this.cases = this.total[num].lists
			  },
			  mounted:function(){
				  
			  },
			  methods:{
				  expand:function(item,index){
					  this.swiperShow = true
					 this.slides = index
					 this.expandList = item.picList
					 var mySwiper7 = new Swiper('.swiper-container7',{
					 		initialSlide :this.slides,
					 		observer:true, 
					 		observeParents:true,
					 		navigation: {
					 		  	nextEl: '.swiper-button-next',
					 		  	prevEl: '.swiper-button-prev',
					 		},
					 })
					  console.log(item.picList)
				  },
				  hide:function(e){
					  this.swiperShow = false
				  }
			  }
	      })