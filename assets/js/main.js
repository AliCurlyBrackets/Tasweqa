jQuery(document).ready(function(){
    if(jQuery('.Analysis_Data').length) {
        var a = 0;
        jQuery(window).scroll(function() {
            var $top = jQuery('.Counter').offset().top - window.innerHeight;
            if (a == 0 && jQuery(window).scrollTop() > $top) {
                jQuery('.Counter').each(function () {
                    var $this = jQuery(this),
                        countTo =$this.attr('data-number');
                    jQuery({countNum: $this.text()}).animate({countNum: countTo},
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text("+" + Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text("+" + this.countNum);
                            }
                        });
                });
                a = 1;
            }
 });
}
});