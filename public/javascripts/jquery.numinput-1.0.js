//;(function($){})(jQuery);  第一个分号jquery是实参 $是形参
//$.fn.extend 是jquery内置函数,用于对jquery拓展的对象 让你的插件可以像jquery自带方法一样使用


;(function($){
    $.fn.extend({
        num: function(options){
            var settings = $.extend({
                min:1,
                max:1000,
                isEdit:true
            },options);
            this.addClass('num-value')
                .val(settings.min)
                .wrap('<div class="num-input"/>')
                .before(' <span class="num-minus" onselectstart="return false;">-</span> ')
                .after(' <span class="num-add" onselectstart="return false;">+</span> ')
                .on('keydown',function(e){
                    if(!(e.which>=48 && e.which<=57||e.which==8)){
                        return false;
                    }
                }).on('keyup',function(){
                    if(parseInt(this.value) > settings.max){
                        this.value = settings.max;
                    }
                });
            var that = this;
            this.prev('.num-minus').on('click',function(){
                var val = parseInt(that.val());
                val--;
                if(val< settings.min){
                 val = settings.min;
                }
                that.val(val);
            });
            this.next('.num-add').on('click',function(){
                var val = parseInt(that.val());
                val++;
                if(val > settings.max){
                    val = settings.max;
                }
                that.val(val);
            });
            return this;
        }
    });
})(jQuery);