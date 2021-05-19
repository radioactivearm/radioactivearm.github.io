console.log('loaded main.js');

// =================================================
// Adjust height of Images above links to match width
// made reactive to resize of browser.
function scaleImages() {

    var linkImage = d3.selectAll('.link-image');
    var linkImageWidth = linkImage.property('width');

    linkImageHeight = 2.5 * linkImageWidth / 4;

    linkImage.property('height', linkImageHeight);
}

scaleImages()


d3.select(window).on("resize", scaleImages);
// =================================================


// =================
// running insertMD()

insertMD('static/text/bio.md', '.bio');

// ===================

// ===============================
// events

// ------------------------------------
// making buttons work
function graphH() {
    let url = d3.select('#graph').property('href');
    window.open(url, '_blank');
}

function plotH() {
    let url = d3.select('#plot').property('href');
    window.open(url, '_blank');
}

function webH() {
    let url = d3.select('#web').property('href');
    window.open(url, '_blank');
}

function dashH() {
    let url = d3.select('#dash').property('href');
    window.open(url, '_blank');
}
// ------------------------------------------------

// ===================================