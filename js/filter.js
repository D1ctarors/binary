var fActive = '';

function filterColor(items) {
	// if (fActive != items) {
	// 	$('.all').filter('.' + items).slideDown();
	// 	$('.all').filter(':not(.' + items + ')').slideUp();
	// 	fActive = items;
	// }
}


$('.web').click(function () {
	filterColor('filter_web');
});
$('.apps').click(function () {
	filterColor('filter_apps');
});
$('.other').click(function () {
	filterColor('filter_other');
});

$('.all').click(function () {
	$('.portfolio__card').slideDown();
	fActive = 'all';
});

filterColor();