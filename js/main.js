console.log('loaded main.js');


// =================================================
// Adjust height of Images above links to match width
// made reactive to resize of browser.
function scaleImages() {

    var linkImage = d3.selectAll('.link-image');
    var linkImageWidth = linkImage.property('width');

    console.log(linkImageWidth);

    linkImageHeight = 2.5 * linkImageWidth / 4;

    linkImage.property('height', linkImageHeight);
}

scaleImages()


d3.select(window).on("resize", scaleImages);
// =================================================