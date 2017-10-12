(function(glable,undefined){
	
	var tools = {
		
		setFontSize:function(size){
			
			var oHtml = document.querySelector("html");
			
			var width = oHtml.getBoundingClientRect().width;
			
			oHtml.style.fontSize = width/size + 'px';
			
		}
		
	}
	
	
	
	glable.to = tools;
	
	
	
})(window,undefined);
