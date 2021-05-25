/**
 *! 순수 jQuery
$('.thumb').click(function() {
	var src = $(this).find('img').attr('src');
	$('.img-wrap').find('img').attr('src', src);
});

$('.thumb').eq(0).trigger('click');
*/

// '.wrapper', ['../img/gallery/3334.jpg', '../img/gallery/3348.jpg', '../img/gallery/3360.jpg']
function Gallery(parent, imgs) {
	this.$parent = $(parent);
	this.imgs = imgs;
	var html = '';
	html += '<div class="gallery-wrapper">';
	html += '<div class="img-wrap">';
	html += '<img src="" alt="big" class="w-100">';
	html += '</div>';
	html += '<div class="thumb-wrap">';
	for(var i=0; i<this.imgs.length; i++) {
		html += '<div class="thumb">';
		html += '<img src="'+imgs[i]+'" alt="thumb" class="w-100">';
		html += '</div>';
	}
	html += '</div>';
	html += '</div>';
	this.$galleryWrapper = $(html).appendTo(this.$parent);
	
	this.$galleryWrapper.find('.thumb').click(function() {
		var src = $(this).find('img').attr('src');
		$(this).parent().prev().find('img').attr('src', src);
	});

	this.$galleryWrapper.find('.thumb').eq(0).trigger('click');
	return this;
}



var gallery = new Gallery('.wrapper', [
	'../img/gallery/3334.jpg', 
	'../img/gallery/3348.jpg', 
	'../img/gallery/3360.jpg'
]);

var gallery = new Gallery('.wrapper2', [
	'../img/gallery/3348.jpg', 
	'../img/gallery/3334.jpg', 
	'../img/gallery/3360.jpg',
	'../img/gallery/3360.jpg',
]);

var gallery = new Gallery('.wrapper3', [
	'../img/gallery/3360.jpg',
	'../img/gallery/3348.jpg', 
]);