$(function() {

// BICEPS
$('.biceps').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-biceps').show();
	$('#b').css('opacity', '1')
	$('#i').css('opacity', '.7')
})
$('.biceps').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-biceps').hide();
	$('.biceps').css('opacity', '0')
})

// DELTOIDS
$('.delts').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-delts').show();
	$('#d').css('opacity', '1')
	$('#j').css('opacity', '.5')
})
$('.delts').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-delts').hide();
	$('.delts').css('opacity', '0')
})

// PECTORALS
$('#c').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-pecs').show();
})
$('#c').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-pecs').hide();
})

// OBLIQUES
$('#f').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-obliques').show();
})
$('#f').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-obliques').hide();
})

// ABDOMINALS
$('#e').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-abs').show();
})
$('#e').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-abs').hide();
})

// TRAP
$('#g').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-traps').show();
})
$('#g').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-traps').hide();
})




})