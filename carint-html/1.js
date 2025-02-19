// Write Javascript code!
var isInitialized = false;
var cropper = '';
var file = '';
var _URL = window.URL || window.webkitURL;
// Initialize Slider

$(document).ready(function () {
    $("#cropperfile")
        .change(function (e) {
            if (file = this.files[0]) {
                var oFReader = new FileReader();
                oFReader.readAsDataURL(file);
                oFReader.onload = function () {
                    // Destroy the old cropper instance
                    $("#cropper-img").attr('src', this.result);
                    $('#cropper-img').addClass('ready');
                    if (isInitialized == true) {
                        $('#zoom-slider').val(0);
                        cropper.destroy();
                    }
                    initCropper();
                }
            }
        });

    // $("#zoom-slider").slider({
    //     orientation: "horizontal",
    //     range: "min",
    //     max: 1,
    //     min: 0,
    //     value: 0,
    //     step: 0.0001,
    //     slide: function () {
    //         if (isInitialized == true) {
    //             if (cropper.canvasData.naturalWidth < 600 || cropper.canvasData.naturalHeight < 400) {
    //                 event.preventDefault();
    //             } else {
    //                 var currentValue = $("#zoom-slider").slider("value");
    //                 var zoomValue = parseFloat(currentValue);
    //                 cropper.zoomTo(zoomValue.toFixed(4));
    //             }
    //         }
    //     }
    // });
});

function initCropper() {
    var vEl = document.getElementById('cropper-img');
    cropper = new Cropper(vEl, {
        viewMode: 1,
        dragMode: 'move',
        aspectRatio: 1.5,
        checkOrientation: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        zoomOnTouch: false,
        zoomOnWheel: false,
        guides: false,
        highlight: false,
        ready: function (e) {
            var cropper = this.cropper;
            cropper.zoomTo(0);

            var imageData = cropper.getImageData();
            console.log("imageData ", imageData);
            var minSliderZoom = imageData.width / imageData.naturalWidth;

            $('#min-zoom-val').html(minSliderZoom.toFixed(4));

            $(".cr-slider-wrap").show();
            // $("#zoom-slider").slider("option", "max", 1);
            // $("#zoom-slider").slider("option", "min", minSliderZoom);
            // $("#zoom-slider").slider("value", minSliderZoom);
        }
    });
    isInitialized = true;
}