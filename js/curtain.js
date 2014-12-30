$(function(){
		
		var curtainComponent = (function(){
			var init = function (){
					$('<div>',{id:"curtain"})
						.on('mouseleave',function(evt){
							curtainComponent.bindEvents.call(this,evt,{callback:mouseOutCallBack});
						})
						.appendTo('body');
				},
				mouseOutCallBack = function(){
					$(this).addClass('curtain-remove').removeClass('curtain');
				};
			return {
				init : init,
				flag : false,
				bindEvents : function(evtObj,config){
					config.callback.call(this);
				}
			};
		})();
		
		curtainComponent.init();
		$('#templateContainer').on('mouseenter','.templateAnchors',function(evt){
				evt.stopPropagation();
				var $this = $(this).children('div.templates'),
				heightWidth = {height:$this.outerHeight() + 'px',
								width:$this.outerWidth() + 'px'},
				offset = $this.offset(),
				cords = {x:offset.left,y:offset.top};
			
				$('#curtain').css({'top':cords.y,
								'left':cords.x,
								'height':heightWidth.height,
								'width':heightWidth.width})
							.addClass('curtain').removeClass('curtain-remove');
		})/*.on('mouseleave',function(){
			$('#curtain').addClass('curtain-remove').removeClass('curtain');
		})*/;
		/*$('body').off().on('mouseleave','#curtain',function(){
			$('#curtain').addClass('curtain-remove').removeClass('curtain');
		});*/
	});