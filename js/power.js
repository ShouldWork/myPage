//Re-learning events in jQuery

//Document ready event 
// first example 
// $(document).ready(function(){
// 	....
// })
//Shorthand jQuery on ready 

$(function(){
	console.log('The page is ready!');
	$('li').css('cursor','pointer').addClass('list_item');
	$('#list_features li')
	.css({width: '50%', height:"100px", margin: 'auto'})
	.addClass('list_item')
	.each(function(index, item){
		var $item = $(item);
		$item.text($item.text() + ' ' + $item.attr('data-feature-id'));
	});
});


$(function(){
	$('li').on('click', function(){
		$('li').removeClass('highlightedList');
		$(this).addClass('highlightedList');
		console.log(this);
	});
});

$(function(){
	$('input').blur(function(){
		$(this).removeClass('highlightedList');
		console.log('Blurry');
	})
})

//creates an on Click event for all buttons. Once the button is clicked it turns off the event listener. 
$(function(){
	$('.btn').on('click',function(){
		var btnClicked = this; 
		$('#list_features li')
		.toggleClass('highlightedList')
		.each(function(index, item){
			var $item = $(item);
			// console.log($item.text());
			$item.text($item.text());
		});
	})
});



//Only deal with event the first time it happens
$('.btn').one('click',function(){
	console.log('This will only work once')
});


