
// Globals

var mLoop = setInterval(mainLoop, 2);

var MargChaseSpeed = 20.00000;
var OpacChaseSpeed = 20.00000;
var ColorChaseSpeed = 40.00000;
var subBarOffset = 10;

var mOverHome = false;
var mOverSci = false;
var mOverPhi = false;
var mOverCas = false;
var mOverUpperPgs = false;
var mOverSubSci = false;
var mOverSubPhi = false;
var mOverSubCas = false;

var cScienceLMarg = 0.00000;
var cPhilosophyLMarg = 0.00000;
var cCaseStudyLMarg = 0.00000;

var tScienceLMarg = 0.00000;
var tPhilosophyLMarg = 0.00000;
var tCaseStudyLMarg = 0.00000;

var ScienceLMargStop = true;
var PhilosophyLMargStop = true;
var CaseStudyLMargStop = true;

var Home = document.getElementById("Home");
var Science = document.getElementById("Science");
var Philosophy = document.getElementById("Philosophy");
var CaseStudy = document.getElementById("CaseStudy");
var UpperPages = document.getElementById("UpperPages");

var ScienceSubBar = document.getElementById("ScienceSubBar");
var PhilosophySubBar = document.getElementById("PhilosophySubBar");
var CaseStudySubBar = document.getElementById("CaseStudySubBar");

var subNavButtons = document.getElementsByClassName("subNavButton");
var NavButtonMains = document.getElementsByClassName("NavButtonMain");

var SciSubBarDisTarget = false;
var PhiSubBarDisTarget = false;
var CasSubBarDisTarget = false;

var BGOpac = 1;
var BGTargetOpac;
var TextColor = 255;
var TargetTextColor;

// Mouse Detects ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Home.onmouseover=function() {mOverHome = true;};
Home.onmouseleave=function() {mOverHome = false;};
Science.onmouseover=function() {mOverSci = true;};
Science.onmouseleave=function() {mOverSci = false;};
Philosophy.onmouseover=function() {mOverPhi = true;};
Philosophy.onmouseleave=function() {mOverPhi = false;};
CaseStudy.onmouseover=function() {mOverCas = true;};
CaseStudy.onmouseleave=function() {mOverCas = false;};
UpperPages.onmouseover=function() {mOverUpperPgs = true;};
UpperPages.onmouseleave=function() {mOverUpperPgs = false;};

ScienceSubBar.onmouseover=function() {mOverSubSci = true;};
ScienceSubBar.onmouseleave=function() {mOverSubSci = false;};
PhilosophySubBar.onmouseover=function() {mOverSubPhi = true;};
PhilosophySubBar.onmouseleave=function() {mOverSubPhi = false;};
CaseStudySubBar.onmouseover=function() {mOverSubCas = true;};
CaseStudySubBar.onmouseleave=function() {mOverSubCas = false;};
//-------------------------------------------------------------------------------------

window.onscroll = function (e) {
    var ScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

    UpperPages.style.backgroundColor = "rgba(0,0,0," + BGOpac + ")";
    if (BGOpac != BGTargetOpac) {
        BGOpac += (BGTargetOpac-BGOpac)/OpacChaseSpeed;
    }

    for (var i = 0; i < subNavButtons.length; i++) {
        subNavButtons[i].style.color = "rgb(" + TextColor + "," + TextColor + "," + TextColor + ")";
    }
    for (var i = 0; i < NavButtonMains.length; i++) {
        NavButtonMains[i].style.color = "rgb(" + TextColor + "," + TextColor + "," + TextColor + ")";
        NavButtonMains[i].style.border = "3px solid rgb(" + TextColor + "," + TextColor + "," + TextColor + ")";
    }
    if (TextColor != TargetTextColor) {
        TextColor += Math.floor((TargetTextColor-TextColor)/ColorChaseSpeed);
    }

    if (BGOpac > BGTargetOpac-.05 && BGOpac < BGTargetOpac) {BGOpac = BGTargetOpac;}
    if (BGOpac < BGTargetOpac+.05 && BGOpac > BGTargetOpac) {BGOpac = BGTargetOpac;}
}


function mainLoop(event) {

    var ScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

    if (ScrollY < 10) {BGTargetOpac = 1;TargetTextColor = 255;}
    else if (ScrollY > 10 && ScrollY < 665) {BGTargetOpac = 0;TargetTextColor = 255;}
    else if (ScrollY < 1130 && ScrollY > 665) {BGTargetOpac = 0;TargetTextColor = 0;}
    else {BGTargetOpac = 0;TargetTextColor = 0;}

    UpperPages.style.backgroundColor = "rgba(0,0,0," + BGOpac + ")";
    if (BGOpac != BGTargetOpac) {
        BGOpac += (BGTargetOpac-BGOpac)/OpacChaseSpeed;
    }

    for (var i = 0; i < subNavButtons.length; i++) {
        subNavButtons[i].style.color = "rgb(" + TextColor + "," + TextColor + "," + TextColor + ")";
    }
    for (var i = 0; i < NavButtonMains.length; i++) {
        NavButtonMains[i].style.color = "rgb(" + TextColor + "," + TextColor + "," + TextColor + ")";
        NavButtonMains[i].style.border = "3px solid rgb(" + TextColor + "," + TextColor + "," + TextColor + ")";
    }
    if (TextColor != TargetTextColor) {
        TextColor += Math.round((TargetTextColor-TextColor)/ColorChaseSpeed);
    }

    if (BGOpac > BGTargetOpac-.05 && BGOpac < BGTargetOpac) {BGOpac = BGTargetOpac;}
    if (BGOpac < BGTargetOpac+.05 && BGOpac > BGTargetOpac) {BGOpac = BGTargetOpac;}

    
    // Science Subbar Expansion
    ScienceSubBar.style.left = (Science.offsetWidth+Science.offsetLeft+subBarOffset) + "px";
    if (mOverSci) {
        tScienceLMarg = 216;
        SciSubBarDisTarget = true;
    }
    else if (mOverPhi || mOverCas || (!mOverUpperPgs && !mOverSubSci)) {
        tScienceLMarg = 0;
        SciSubBarDisTarget = false;
    }
    // Philosophy Subbar Expansion
    PhilosophySubBar.style.left = (Philosophy.offsetWidth+Philosophy.offsetLeft+subBarOffset) + "px";
    if (mOverPhi) {
        tPhilosophyLMarg = 216;
        PhiSubBarDisTarget = true;
    }
    else if (mOverSci || mOverCas || (!mOverUpperPgs && !mOverSubPhi)) {
        tPhilosophyLMarg = 0;
        PhiSubBarDisTarget = false;
    }
    // Case Study Subbar Expansion
    CaseStudySubBar.style.left = (CaseStudy.offsetWidth+CaseStudy.offsetLeft+subBarOffset) + "px";
    if (mOverCas) {
        tCaseStudyLMarg = 216;
        CasSubBarDisTarget = true;
    }
    else if (mOverSci || mOverPhi || (!mOverUpperPgs && !mOverSubCas)) {
        tCaseStudyLMarg = 0;
        CasSubBarDisTarget = false;
    }


    goToMarginTarget(); // Margin Smoother


    // Subbar display settings ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    if (ScienceLMargStop && SciSubBarDisTarget) {ScienceSubBar.style.display = "block";}
    else if (!SciSubBarDisTarget) {ScienceSubBar.style.display = "none";}
    if (PhilosophyLMargStop && PhiSubBarDisTarget) {PhilosophySubBar.style.display = "block";}
    else if (!PhiSubBarDisTarget) {PhilosophySubBar.style.display = "none";}
    if (CaseStudyLMargStop && CasSubBarDisTarget) {CaseStudySubBar.style.display = "block";}
    else if (!CasSubBarDisTarget) {CaseStudySubBar.style.display = "none";}
};

function goToMarginTarget() {
    // Science Subbar Expansion
    if (cScienceLMarg != tScienceLMarg) {
        cScienceLMarg += (tScienceLMarg-cScienceLMarg)/MargChaseSpeed;
        Science.style.margin = "0 " + cScienceLMarg + "px 0 0";
    }
    if (cScienceLMarg > tScienceLMarg-2 && cScienceLMarg < tScienceLMarg) {cScienceLMarg = tScienceLMarg;}
    if (cScienceLMarg < tScienceLMarg+2 && cScienceLMarg > tScienceLMarg) {cScienceLMarg = tScienceLMarg;}
    if (cScienceLMarg == tScienceLMarg) {ScienceLMargStop = true;}
    else {ScienceLMargStop = false;}
    // Philosophy Subbar Expansion
    if (cPhilosophyLMarg != tPhilosophyLMarg) {
        cPhilosophyLMarg += (tPhilosophyLMarg-cPhilosophyLMarg)/MargChaseSpeed;
        Philosophy.style.margin = "0 " + cPhilosophyLMarg + "px 0 0";
    }
    if (cPhilosophyLMarg > tPhilosophyLMarg-2 && cPhilosophyLMarg < tPhilosophyLMarg) {cPhilosophyLMarg = tPhilosophyLMarg;}
    if (cPhilosophyLMarg < tPhilosophyLMarg+2 && cPhilosophyLMarg > tPhilosophyLMarg) {cPhilosophyLMarg = tPhilosophyLMarg;}
    if (cPhilosophyLMarg == tPhilosophyLMarg) {PhilosophyLMargStop = true;}
    else {PhilosophyLMargStop = false;}
    // Case Study Subbar Expansion
    if (cCaseStudyLMarg != tCaseStudyLMarg) {
        cCaseStudyLMarg += (tCaseStudyLMarg-cCaseStudyLMarg)/MargChaseSpeed;
        CaseStudy.style.margin = "0 " + cCaseStudyLMarg + "px 0 0";
    }
    if (cCaseStudyLMarg > tCaseStudyLMarg-2 && cCaseStudyLMarg < tCaseStudyLMarg) {cCaseStudyLMarg = tCaseStudyLMarg;}
    if (cCaseStudyLMarg < tCaseStudyLMarg+2 && cCaseStudyLMarg > tCaseStudyLMarg) {cCaseStudyLMarg = tCaseStudyLMarg;}
    if (cCaseStudyLMarg == tCaseStudyLMarg) {CaseStudyLMargStop = true;}
    else {CaseStudyLMargStop = false;}
}