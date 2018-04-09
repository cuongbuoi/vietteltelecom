$('.click-dropdown').click(function() {
        $(this).parent('.add').toggleClass('hover-active');
	$(this).children('.fa').toggleClass('fa-plus').toggleClass('fa-minus');
    });

