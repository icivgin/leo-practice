$(function() {

// BICEPS
$('#b').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-biceps').show();
})
$('#b').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-biceps').hide();
})

// DELTOIDS
$('#d').on('mouseenter', function (e) {
	e.preventDefault();

	$('#quick-view-delts').show();
})
$('#d').on('mouseleave', function (e) {
	e.preventDefault();

	$('#quick-view-delts').hide();
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




})