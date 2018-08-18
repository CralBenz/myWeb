function include(aa){
				$.ajax({
					type:"get",
					url:aa,
					async:false,//全局刷新
					dataType:"text",
					success:function(data){
						document.write(data)
					}
				});
			}