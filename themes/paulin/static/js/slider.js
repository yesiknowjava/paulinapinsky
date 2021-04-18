function handleSliderChange(e,ui)
{var maxScroll=jQuery("#slider-section").attr("scrollWidth")-
jQuery("#slider-section").width();jQuery("#slider-section").animate({scrollLeft:ui.value*(maxScroll/100)},1000);}
function handleSliderSlide(e,ui)
{var maxScroll=jQuery("#slider-section").attr("scrollWidth")-
jQuery("#slider-section").width();jQuery("#slider-section").attr({scrollLeft:ui.value*(maxScroll/100)});}