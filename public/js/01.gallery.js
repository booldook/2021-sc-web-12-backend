/**
 *! 순수 jQuery
$('.thumb').click(function() {
	var src = $(this).find('img').attr('src');
	$('.img-wrap').find('img').attr('src', src);
});

$('.thumb').eq(0).trigger('click');
*/
function Gallery(parent, imgs) {

// '.wrapper', ['../img/gallery/3334.jpg', '../img/gallery/3348.jpg', '../img/gallery/3360.jpg']
	this.$parent = $(parent);
	this.imgs = imgs;
	this.idx = 0;
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
		Gallery.idx = $(this).index();
		console.log(Gallery.idx);
	});

	this.$galleryWrapper.find('.thumb').eq(this.idx).trigger('click');

	Gallery.prototype.onPrev = function() {
		this.idx = this.idx === 0 ? this.imgs.length - 1 : this.idx - 1;
		this.$galleryWrapper.find('.thumb').eq(this.idx).trigger('click');
	}
	
	Gallery.prototype.onNext = function() {
		this.idx = this.idx === this.imgs.length - 1 ? 0 : this.idx + 1;
		this.$galleryWrapper.find('.thumb').eq(this.idx).trigger('click');
	}
	
	return this;
}



var gallery = new Gallery('.wrapper', [
	'../img/gallery/3334.jpg', 
	'../img/gallery/3348.jpg', 
	'../img/gallery/3360.jpg'
]);

$('.gallery1 .bt-prev').click(function(){
	gallery.onPrev();
});

$('.gallery1 .bt-next').click(function(){
	gallery.onNext();
});



// console.log(gallery.$parent);
// console.log(gallery.$galleryWrapper);
// console.log(gallery.imgs);

var gallery2 = new Gallery('.wrapper2', [
	'../img/gallery/3348.jpg', 
	'../img/gallery/3334.jpg', 
	'../img/gallery/3360.jpg',
	'../img/gallery/3360.jpg',
]);

var gallery3 = new Gallery('.wrapper3', [
	'../img/gallery/3360.jpg',
	'../img/gallery/3348.jpg', 
]);