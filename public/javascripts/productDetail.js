$(function(){

    var $bigImg = $('#product-imgs .big-img img');
    $('#product-imgs li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $bigImg.attr('src',$(this).children()[0].src);
    });

    var $productPrice = $('.product-price'),
        $productSize = $('#product-size');
    $('#product-form .product-size-list li').on('click',function(){
        $productPrice.html($(this).data('price'));
    });
});