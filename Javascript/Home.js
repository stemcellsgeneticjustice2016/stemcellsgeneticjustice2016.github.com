
var mHomeLoop = setInterval(mainHomeLoop, 2);

var targetBibOffset = -10.00000;
var targetBibOpac = 1;
var bibOffsetChaseSpeed = 8.00000;
var bibOpacChaseSpeed = 15.00000;
var bibHoverColor = "rgb(75,75,75)";

var Alson = document.getElementById("Alson");
var Autumn = document.getElementById("Autumn");
var Cassandra = document.getElementById("Cassandra");
var Jocelyn = document.getElementById("Jocelyn");
var Phillip = document.getElementById("Phillip");
var Spencer = document.getElementById("Spencer");
var Tristan = document.getElementById("Tristan");

var BibBox = document.getElementById("BibBox");

var AlsonInfo = document.getElementById("AlsonInfo");
var AutumnInfo = document.getElementById("AutumnInfo");
var CassandraInfo = document.getElementById("CassandraInfo");
var JocelynInfo = document.getElementById("JocelynInfo");
var PhillipInfo = document.getElementById("PhillipInfo");
var SpencerInfo = document.getElementById("SpencerInfo");
var TristanInfo = document.getElementById("TristanInfo");

var ImageOne = document.getElementById("ImageOne");
var ImageTwo = document.getElementById("ImageTwo");

var CenterBoxOne = document.getElementById("CenterBoxOne");

// Bib Select Offset Variables
var tAlsonOffset = 0.00000;
var tAutumnOffset = 0.00000;
var tCassandraOffset = 0.00000;
var tJocelynOffset = 0.00000;
var tPhillipOffset = 0.00000;
var tSpencerOffset = 0.00000;
var tTristanOffset = 0.00000;

var cAlsonOffset = -20.00000;
var cAutumnOffset = -20.00000;
var cCassandraOffset = -20.00000;
var cJocelynOffset = -20.00000;
var cPhillipOffset = -20.00000;
var cSpencerOffset = -20.00000;
var cTristanOffset = -20.00000;

// Bib Info Ocacity Variables
var tAlsonOpac = 1;
var tAutumnOpac = 0;
var tCassandraOpac = 0;
var tJocelynOpac = 0;
var tPhillipOpac = 0;
var tSpencerOpac = 0;
var tTristanOpac = 0;

var cAlsonOpac = 1;
var cAutumnOpac = 0;
var cCassandraOpac = 0;
var cJocelynOpac = 0;
var cPhillipOpac = 0;
var cSpencerOpac = 0;
var cTristanOpac = 0;

// Mouse Detects ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var mOverAlson = false;
var mOverAutumn = false;
var mOverCassandra = false;
var mOverJocelyn = false;
var mOverPhillip = false;
var mOverSpencer = false;
var mOverTristan = false;
var mOverBibBox = false;

Alson.onmouseover=function() {mOverAlson = true;};
Alson.onmouseleave=function() {mOverAlson = false;};
Autumn.onmouseover=function() {mOverAutumn = true;};
Autumn.onmouseleave=function() {mOverAutumn = false;};
Cassandra.onmouseover=function() {mOverCassandra = true;};
Cassandra.onmouseleave=function() {mOverCassandra = false;};
Jocelyn.onmouseover=function() {mOverJocelyn = true;};
Jocelyn.onmouseleave=function() {mOverJocelyn = false;};
Phillip.onmouseover=function() {mOverPhillip = true;};
Phillip.onmouseleave=function() {mOverPhillip = false;};
Spencer.onmouseover=function() {mOverSpencer = true;};
Spencer.onmouseleave=function() {mOverSpencer = false;};
Tristan.onmouseover=function() {mOverTristan = true;};
Tristan.onmouseleave=function() {mOverTristan = false;};
BibBox.onmouseover=function() {mOverBibBox = true;};
BibBox.onmouseleave=function() {mOverBibBox = false;};
//-------------------------------------------------------------------------------------

window.onscroll = function (e) {  
    var ScrollY = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    if (ScrollY >= 720) {ImageOne.style.display = "none";} else {ImageOne.style.display = "inline-block";};
    ImageOne.style.clip = "rect(0px, 100vw, " + (730-ScrollY) +"px, 0px)";
    ImageTwo.style.clip = "rect(" + (1050-ScrollY) + "px, 100vw, 1200px, 0px)";
} 

function mainHomeLoop() {
    if (mOverAlson) {
        Alson.style.color = bibHoverColor;
        tAlsonOffset = targetBibOffset;
        tAlsonOpac = targetBibOpac;
    }
    else if (mOverAutumn || mOverCassandra || mOverJocelyn || mOverPhillip || mOverSpencer || mOverTristan) {
        Alson.style.color = "black";
        tAlsonOffset = 0;
        tAlsonOpac = 0;
    }

    if (mOverAutumn) {
        Autumn.style.color = bibHoverColor;
        tAutumnOffset = targetBibOffset;
        tAutumnOpac = targetBibOpac;
    }
    else if (mOverAlson || mOverCassandra || mOverJocelyn || mOverPhillip || mOverSpencer || mOverTristan) {
        Autumn.style.color = "black";
        tAutumnOffset = 0;
        tAutumnOpac = 0;
    }

    if (mOverCassandra) {
        Cassandra.style.color = bibHoverColor;
        tCassandraOffset = targetBibOffset;
        tCassandraOpac = targetBibOpac;
    }
    else if (mOverAlson || mOverAutumn || mOverJocelyn || mOverPhillip || mOverSpencer || mOverTristan) {
        Cassandra.style.color = "black";
        tCassandraOffset = 0;
        tCassandraOpac = 0;
    }

    if (mOverJocelyn) {
        Jocelyn.style.color = bibHoverColor;
        tJocelynOffset = targetBibOffset;
        tJocelynOpac = targetBibOpac;
    }
    else if (mOverAlson || mOverAutumn || mOverCassandra || mOverPhillip || mOverSpencer || mOverTristan) {
        Jocelyn.style.color = "black";
        tJocelynOffset = 0;
        tJocelynOpac = 0;
    }

    if (mOverPhillip) {
        Phillip.style.color = bibHoverColor;
        tPhillipOffset = targetBibOffset;
        tPhillipOpac = targetBibOpac;
    }
    else if (mOverAlson || mOverAutumn || mOverCassandra || mOverJocelyn || mOverSpencer || mOverTristan) {
        Phillip.style.color = "black";
        tPhillipOffset = 0;
        tPhillipOpac = 0;
    }

    if (mOverSpencer) {
        Spencer.style.color = bibHoverColor;
        tSpencerOffset = targetBibOffset;
        tSpencerOpac = targetBibOpac;
    }
    else if (mOverAlson || mOverAutumn || mOverCassandra || mOverJocelyn || mOverPhillip || mOverTristan) {
        Spencer.style.color = "black";
        tSpencerOffset = 0;
        tSpencerOpac = 0;
    }

    if (mOverTristan) {
        Tristan.style.color = bibHoverColor;
        tTristanOffset = targetBibOffset;
        tTristanOpac = targetBibOpac;
    }
    else if (mOverAlson || mOverAutumn || mOverCassandra || mOverJocelyn || mOverPhillip || mOverSpencer) {
        Tristan.style.color = "black";
        tTristanOffset = 0;
        tTristanOpac = 0;
    }

    goToBibOffset();
    goToBibInfoOpac();
}


function goToBibOffset() {
    //Alson Go To Target
    if (cAlsonOffset != tAlsonOffset) {
        cAlsonOffset += (tAlsonOffset-cAlsonOffset)/bibOffsetChaseSpeed;
    }
    if (cAlsonOffset > tAlsonOffset-1 && cAlsonOffset < tAlsonOffset) {cAlsonOffset = tAlsonOffset;};
    if (cAlsonOffset < tAlsonOffset+1 && cAlsonOffset > tAlsonOffset) {cAlsonOffset = tAlsonOffset;};
    Alson.style.top = cAlsonOffset + "px";

    //Autumn Go To Target
    if (cAutumnOffset != tAutumnOffset) {
        cAutumnOffset += (tAutumnOffset-cAutumnOffset)/bibOffsetChaseSpeed;
    }
    if (cAutumnOffset > tAutumnOffset-1 && cAutumnOffset < tAutumnOffset) {cAutumnOffset = tAutumnOffset;};
    if (cAutumnOffset < tAutumnOffset+1 && cAutumnOffset > tAutumnOffset) {cAutumnOffset = tAutumnOffset;};
    Autumn.style.top = cAutumnOffset + "px";

    //Cassandra Go To Target
    if (cCassandraOffset != tCassandraOffset) {
        cCassandraOffset += (tCassandraOffset-cCassandraOffset)/bibOffsetChaseSpeed;
    }
    if (cCassandraOffset > tCassandraOffset-1 && cCassandraOffset < tCassandraOffset) {cCassandraOffset = tCassandraOffset;};
    if (cCassandraOffset < tCassandraOffset+1 && cCassandraOffset > tCassandraOffset) {cCassandraOffset = tCassandraOffset;};
    Cassandra.style.top = cCassandraOffset + "px";

    //Jocelyn Go To Target
    if (cJocelynOffset != tJocelynOffset) {
        cJocelynOffset += (tJocelynOffset-cJocelynOffset)/bibOffsetChaseSpeed;
    }
    if (cJocelynOffset > tJocelynOffset-1 && cJocelynOffset < tJocelynOffset) {cJocelynOffset = tJocelynOffset;};
    if (cJocelynOffset < tJocelynOffset+1 && cJocelynOffset > tJocelynOffset) {cJocelynOffset = tJocelynOffset;};
    Jocelyn.style.top = cJocelynOffset + "px";

    //Phillip Go To Target
    if (cPhillipOffset != tPhillipOffset) {
        cPhillipOffset += (tPhillipOffset-cPhillipOffset)/bibOffsetChaseSpeed;
    }
    if (cPhillipOffset > tPhillipOffset-1 && cPhillipOffset < tPhillipOffset) {cPhillipOffset = tPhillipOffset;};
    if (cPhillipOffset < tPhillipOffset+1 && cPhillipOffset > tPhillipOffset) {cPhillipOffset = tPhillipOffset;};
    Phillip.style.top = cPhillipOffset + "px";

    //Spencer Go To Target
    if (cSpencerOffset != tSpencerOffset) {
        cSpencerOffset += (tSpencerOffset-cSpencerOffset)/bibOffsetChaseSpeed;
    }
    if (cSpencerOffset > tSpencerOffset-1 && cSpencerOffset < tSpencerOffset) {cSpencerOffset = tSpencerOffset;};
    if (cSpencerOffset < tSpencerOffset+1 && cSpencerOffset > tSpencerOffset) {cSpencerOffset = tSpencerOffset;};
    Spencer.style.top = cSpencerOffset + "px";

    //Tristan Go To Target
    if (cTristanOffset != tTristanOffset) {
        cTristanOffset += (tTristanOffset-cTristanOffset)/bibOffsetChaseSpeed;
    }
    if (cTristanOffset > tTristanOffset-1 && cTristanOffset < tTristanOffset) {cTristanOffset = tTristanOffset;};
    if (cTristanOffset < tTristanOffset+1 && cTristanOffset > tTristanOffset) {cTristanOffset = tTristanOffset;};
    Tristan.style.top = cTristanOffset + "px";
}

function goToBibInfoOpac() {
    // Alson Ocacity to Target
    if (cAlsonOpac != tAlsonOpac) {
        cAlsonOpac += ((tAlsonOpac-cAlsonOpac)/bibOpacChaseSpeed);
    }
    if (cAlsonOpac > tAlsonOpac-.05 && cAlsonOpac < tAlsonOpac) {cAlsonOpac = tAlsonOpac;};
    if (cAlsonOpac < tAlsonOpac+.05 && cAlsonOpac > tAlsonOpac) {cAlsonOpac = tAlsonOpac;};
    if (cAlsonOpac == 0) {AlsonInfo.style.display = "none";}
    else {
        AlsonInfo.style.display = "inline-block";
        AlsonInfo.style.opacity = cAlsonOpac;
    }

    // Autumn Ocacity to Target
    if (cAutumnOpac != tAutumnOpac) {
        cAutumnOpac += ((tAutumnOpac-cAutumnOpac)/bibOpacChaseSpeed);
    }
    if (cAutumnOpac > tAutumnOpac-.05 && cAutumnOpac < tAutumnOpac) {cAutumnOpac = tAutumnOpac;};
    if (cAutumnOpac < tAutumnOpac+.05 && cAutumnOpac > tAutumnOpac) {cAutumnOpac = tAutumnOpac;};
    if (cAutumnOpac == 0) {AutumnInfo.style.display = "none";}
    else {
        AutumnInfo.style.display = "inline-block";
        AutumnInfo.style.opacity = cAutumnOpac;
    }
    
    // Cassandra Ocacity to Target
    if (cCassandraOpac != tCassandraOpac) {
        cCassandraOpac += ((tCassandraOpac-cCassandraOpac)/bibOpacChaseSpeed);
    }
    if (cCassandraOpac > tCassandraOpac-.05 && cCassandraOpac < tCassandraOpac) {cCassandraOpac = tCassandraOpac;};
    if (cCassandraOpac < tCassandraOpac+.05 && cCassandraOpac > tCassandraOpac) {cCassandraOpac = tCassandraOpac;};
    if (cCassandraOpac == 0) {CassandraInfo.style.display = "none";}
    else {
        CassandraInfo.style.display = "inline-block";
        CassandraInfo.style.opacity = cCassandraOpac;
    }
    
    // Jocelyn Ocacity to Target
    if (cJocelynOpac != tJocelynOpac) {
        cJocelynOpac += ((tJocelynOpac-cJocelynOpac)/bibOpacChaseSpeed);
    }
    if (cJocelynOpac > tJocelynOpac-.05 && cJocelynOpac < tJocelynOpac) {cJocelynOpac = tJocelynOpac;};
    if (cJocelynOpac < tJocelynOpac+.05 && cJocelynOpac > tJocelynOpac) {cJocelynOpac = tJocelynOpac;};
    if (cJocelynOpac == 0) {JocelynInfo.style.display = "none";}
    else {
        JocelynInfo.style.display = "inline-block";
        JocelynInfo.style.opacity = cJocelynOpac;
    }
    
    // Phillip Ocacity to Target
    if (cPhillipOpac != tPhillipOpac) {
        cPhillipOpac += ((tPhillipOpac-cPhillipOpac)/bibOpacChaseSpeed);
    }
    if (cPhillipOpac > tPhillipOpac-.05 && cPhillipOpac < tPhillipOpac) {cPhillipOpac = tPhillipOpac;};
    if (cPhillipOpac < tPhillipOpac+.05 && cPhillipOpac > tPhillipOpac) {cPhillipOpac = tPhillipOpac;};
    if (cPhillipOpac == 0) {PhillipInfo.style.display = "none";}
    else {
        PhillipInfo.style.display = "inline-block";
        PhillipInfo.style.opacity = cPhillipOpac;
    }
    
    // Spencer Ocacity to Target
    if (cSpencerOpac != tSpencerOpac) {
        cSpencerOpac += ((tSpencerOpac-cSpencerOpac)/bibOpacChaseSpeed);
    }
    if (cSpencerOpac > tSpencerOpac-.05 && cSpencerOpac < tSpencerOpac) {cSpencerOpac = tSpencerOpac;};
    if (cSpencerOpac < tSpencerOpac+.05 && cSpencerOpac > tSpencerOpac) {cSpencerOpac = tSpencerOpac;};
    if (cSpencerOpac == 0) {SpencerInfo.style.display = "none";}
    else {
        SpencerInfo.style.display = "inline-block";
        SpencerInfo.style.opacity = cSpencerOpac;
    }
    
    // Tristan Ocacity to Target
    if (cTristanOpac != tTristanOpac) {
        cTristanOpac += ((tTristanOpac-cTristanOpac)/bibOpacChaseSpeed);
    }
    if (cTristanOpac > tTristanOpac-.05 && cTristanOpac < tTristanOpac) {cTristanOpac = tTristanOpac;};
    if (cTristanOpac < tTristanOpac+.05 && cTristanOpac > tTristanOpac) {cTristanOpac = tTristanOpac;};
    if (cTristanOpac == 0) {TristanInfo.style.display = "none";}
    else {
        TristanInfo.style.display = "inline-block";
        TristanInfo.style.opacity = cTristanOpac;
    }
}