
var mBibLoop = setInterval(MainBibLoop, 2);

var BibOpacityChaseSpeed = 35.0000;
var BibHeightChaseSpeed = 20.0000;

var BibItemBoxes = document.getElementsByClassName("BibItemBox");
// var BibItemBoxContents = document.getElementsByClassName("BibItemBoxContent");
var contents = [2];

var mOverBibBox = [BibItemBoxes.length];
for (var i = 0; i < BibItemBoxes.length; i++) {mOverBibBox[i] = false;}

// Mouse Detects +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Expand as nessisary
BibItemBoxes[0].onmouseover = function() {mOverBibBox[0] = true;}
BibItemBoxes[0].onmouseleave = function() {mOverBibBox[0] = false;}

BibItemBoxes[1].onmouseover = function() {mOverBibBox[1] = true;}
BibItemBoxes[1].onmouseleave = function() {mOverBibBox[1] = false;}

BibItemBoxes[2].onmouseover = function() {mOverBibBox[2] = true;}
BibItemBoxes[2].onmouseleave = function() {mOverBibBox[2] = false;}
// -------------------------------------------------------------------------------

// Animation Variables
var tBibContOpacity = [BibItemBoxes.length];
for (var i = 0; i < BibItemBoxes.length; i++) {tBibContOpacity[i] = 0.00000;}
var cBibContOpacity = [BibItemBoxes.length];
for (var i = 0; i < BibItemBoxes.length; i++) {cBibContOpacity[i] = 0.00000;}
var tBibBoxOffsetHeight = [BibItemBoxes.length];
for (var i = 0; i < BibItemBoxes.length; i++) {tBibBoxOffsetHeight[i] = 0.00000;}
var cBibBoxOffsetHeight = [BibItemBoxes.length];
for (var i = 0; i < BibItemBoxes.length; i++) {cBibBoxOffsetHeight[i] = 15.00000;}

function MainBibLoop() {
    for (var i = 0; i < BibItemBoxes.length; i++) {
        if (mOverBibBox[i]) {
            tBibContOpacity[i] = 1.00000;
        }
        if (!mOverBibBox[i]) {
            tBibContOpacity[i] = 0.00000;
        }
        boxToTarget(i);
    }
}

function boxToTarget(i) {
    if (cBibContOpacity[i] != tBibContOpacity[i]) {
        cBibContOpacity[i] += (tBibContOpacity[i]-cBibContOpacity[i])/BibOpacityChaseSpeed;
    }
    contents = BibItemBoxes[i].getElementsByClassName("BibItemBoxContent");
    if (cBibContOpacity[i] > tBibContOpacity[i]-.1 && cBibContOpacity[i] < tBibContOpacity[i]) {cBibContOpacity[i] = tBibContOpacity[i];}
    else if (cBibContOpacity[i] < tBibContOpacity[i]+.1 && cBibContOpacity[i] > tBibContOpacity[i]) {cBibContOpacity[i] = tBibContOpacity[i];}
    for (var c = 0; c < contents.length; c++) {
        if (cBibContOpacity[i] == 0) {contents[c].style.display = "none";}
        else {contents[c].style.display = "block";}
        contents[c].style.opacity = cBibContOpacity[i];
    }

    if (cBibContOpacity[i] == 0) {
        tBibBoxOffsetHeight[i] = (BibItemBoxes[i].getElementsByTagName("h1")[0].offsetHeight);
    }
    else if (cBibContOpacity[i] != 1) {
        tBibBoxOffsetHeight[i] = (BibItemBoxes[i].getElementsByTagName("h1")[0].offsetHeight + 21 + BibItemBoxes[i].getElementsByTagName("h2")[0].offsetHeight + BibItemBoxes[i].getElementsByTagName("p")[0].offsetHeight);
    }
    if (cBibBoxOffsetHeight[i] != tBibBoxOffsetHeight[i]) {
        cBibBoxOffsetHeight[i] += (tBibBoxOffsetHeight[i]-cBibBoxOffsetHeight[i])/BibHeightChaseSpeed;
    }
    if (cBibBoxOffsetHeight[i] > tBibBoxOffsetHeight[i]-2 && cBibBoxOffsetHeight[i] < tBibBoxOffsetHeight[i]) {cBibBoxOffsetHeight[i]=tBibBoxOffsetHeight[i];}
    if (cBibBoxOffsetHeight[i] < tBibBoxOffsetHeight[i]+2 && cBibBoxOffsetHeight[i] > tBibBoxOffsetHeight[i]) {cBibBoxOffsetHeight[i]=tBibBoxOffsetHeight[i];}
    BibItemBoxes[i].style.height = cBibBoxOffsetHeight[i] + "px";
}