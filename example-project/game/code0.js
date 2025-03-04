gdjs._1043_1088_1072Code = {};
gdjs._1043_1088_1072Code.localVariables = [];
gdjs._1043_1088_1072Code.GDStarryBackgroundStars2Objects1= [];
gdjs._1043_1088_1072Code.GDStarryBackgroundStars2Objects2= [];
gdjs._1043_1088_1072Code.GDBlackSpaceObjects1= [];
gdjs._1043_1088_1072Code.GDBlackSpaceObjects2= [];
gdjs._1043_1088_1072Code.GDCthulhuObjects1= [];
gdjs._1043_1088_1072Code.GDCthulhuObjects2= [];
gdjs._1043_1088_1072Code.GDAsteroid1Objects1= [];
gdjs._1043_1088_1072Code.GDAsteroid1Objects2= [];
gdjs._1043_1088_1072Code.GDAsteroid2Objects1= [];
gdjs._1043_1088_1072Code.GDAsteroid2Objects2= [];
gdjs._1043_1088_1072Code.GDAsteroid3Objects1= [];
gdjs._1043_1088_1072Code.GDAsteroid3Objects2= [];
gdjs._1043_1088_1072Code.GDScoreTextObjects1= [];
gdjs._1043_1088_1072Code.GDScoreTextObjects2= [];
gdjs._1043_1088_1072Code.GDLifesTextObjects1= [];
gdjs._1043_1088_1072Code.GDLifesTextObjects2= [];


gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid1Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid2Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid3Objects1Objects = Hashtable.newFrom({"Asteroid1": gdjs._1043_1088_1072Code.GDAsteroid1Objects1, "Asteroid2": gdjs._1043_1088_1072Code.GDAsteroid2Objects1, "Asteroid3": gdjs._1043_1088_1072Code.GDAsteroid3Objects1});
gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDCthulhuObjects1Objects = Hashtable.newFrom({"Cthulhu": gdjs._1043_1088_1072Code.GDCthulhuObjects1});
gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid1Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid2Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid3Objects1Objects = Hashtable.newFrom({"Asteroid1": gdjs._1043_1088_1072Code.GDAsteroid1Objects1, "Asteroid2": gdjs._1043_1088_1072Code.GDAsteroid2Objects1, "Asteroid3": gdjs._1043_1088_1072Code.GDAsteroid3Objects1});
gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDCthulhuObjects1Objects = Hashtable.newFrom({"Cthulhu": gdjs._1043_1088_1072Code.GDCthulhuObjects1});
gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid1Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid2Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid3Objects1Objects = Hashtable.newFrom({"Asteroid1": gdjs._1043_1088_1072Code.GDAsteroid1Objects1, "Asteroid2": gdjs._1043_1088_1072Code.GDAsteroid2Objects1, "Asteroid3": gdjs._1043_1088_1072Code.GDAsteroid3Objects1});
gdjs._1043_1088_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cthulhu"), gdjs._1043_1088_1072Code.GDCthulhuObjects1);
{for(var i = 0, len = gdjs._1043_1088_1072Code.GDCthulhuObjects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDCthulhuObjects1[i].addForce(150, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cthulhu"), gdjs._1043_1088_1072Code.GDCthulhuObjects1);
{for(var i = 0, len = gdjs._1043_1088_1072Code.GDCthulhuObjects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDCthulhuObjects1[i].addForce(-(150), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cthulhu"), gdjs._1043_1088_1072Code.GDCthulhuObjects1);
{for(var i = 0, len = gdjs._1043_1088_1072Code.GDCthulhuObjects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDCthulhuObjects1[i].addForce(0, -(150), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cthulhu"), gdjs._1043_1088_1072Code.GDCthulhuObjects1);
{for(var i = 0, len = gdjs._1043_1088_1072Code.GDCthulhuObjects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDCthulhuObjects1[i].addForce(0, 150, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Asteroids");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Asteroids") >= 2;
if (isConditionTrue_0) {
gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length = 0;

gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length = 0;

gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Asteroids");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid1Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid2Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid3Objects1Objects, "Asteroid" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid1Objects1[i].addPolarForce(90, 200, 1);
}
for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid2Objects1[i].addPolarForce(90, 200, 1);
}
for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid3Objects1[i].addPolarForce(90, 200, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid1"), gdjs._1043_1088_1072Code.GDAsteroid1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroid2"), gdjs._1043_1088_1072Code.GDAsteroid2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroid3"), gdjs._1043_1088_1072Code.GDAsteroid3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cthulhu"), gdjs._1043_1088_1072Code.GDCthulhuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDCthulhuObjects1Objects, gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid1Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid2Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid1"), gdjs._1043_1088_1072Code.GDAsteroid1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroid2"), gdjs._1043_1088_1072Code.GDAsteroid2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroid3"), gdjs._1043_1088_1072Code.GDAsteroid3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cthulhu"), gdjs._1043_1088_1072Code.GDCthulhuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDCthulhuObjects1Objects, gdjs._1043_1088_1072Code.mapOfGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid1Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid2Objects1ObjectsGDgdjs_9546_95951043_95951088_95951072Code_9546GDAsteroid3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1043_1088_1072Code.GDAsteroid1Objects1 */
/* Reuse gdjs._1043_1088_1072Code.GDAsteroid2Objects1 */
/* Reuse gdjs._1043_1088_1072Code.GDAsteroid3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("LifesText"), gdjs._1043_1088_1072Code.GDLifesTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs._1043_1088_1072Code.GDLifesTextObjects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDLifesTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid1"), gdjs._1043_1088_1072Code.GDAsteroid1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroid2"), gdjs._1043_1088_1072Code.GDAsteroid2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroid3"), gdjs._1043_1088_1072Code.GDAsteroid3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length;i<l;++i) {
    if ( gdjs._1043_1088_1072Code.GDAsteroid1Objects1[i].getAABBTop() >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs._1043_1088_1072Code.GDAsteroid1Objects1[k] = gdjs._1043_1088_1072Code.GDAsteroid1Objects1[i];
        ++k;
    }
}
gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length;i<l;++i) {
    if ( gdjs._1043_1088_1072Code.GDAsteroid2Objects1[i].getAABBTop() >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs._1043_1088_1072Code.GDAsteroid2Objects1[k] = gdjs._1043_1088_1072Code.GDAsteroid2Objects1[i];
        ++k;
    }
}
gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length;i<l;++i) {
    if ( gdjs._1043_1088_1072Code.GDAsteroid3Objects1[i].getAABBTop() >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs._1043_1088_1072Code.GDAsteroid3Objects1[k] = gdjs._1043_1088_1072Code.GDAsteroid3Objects1[i];
        ++k;
    }
}
gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1043_1088_1072Code.GDAsteroid1Objects1 */
/* Reuse gdjs._1043_1088_1072Code.GDAsteroid2Objects1 */
/* Reuse gdjs._1043_1088_1072Code.GDAsteroid3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs._1043_1088_1072Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDAsteroid3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs._1043_1088_1072Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs._1043_1088_1072Code.GDScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs._1043_1088_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1043_1088_1072Code.GDStarryBackgroundStars2Objects1.length = 0;
gdjs._1043_1088_1072Code.GDStarryBackgroundStars2Objects2.length = 0;
gdjs._1043_1088_1072Code.GDBlackSpaceObjects1.length = 0;
gdjs._1043_1088_1072Code.GDBlackSpaceObjects2.length = 0;
gdjs._1043_1088_1072Code.GDCthulhuObjects1.length = 0;
gdjs._1043_1088_1072Code.GDCthulhuObjects2.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid1Objects2.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid2Objects2.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid3Objects2.length = 0;
gdjs._1043_1088_1072Code.GDScoreTextObjects1.length = 0;
gdjs._1043_1088_1072Code.GDScoreTextObjects2.length = 0;
gdjs._1043_1088_1072Code.GDLifesTextObjects1.length = 0;
gdjs._1043_1088_1072Code.GDLifesTextObjects2.length = 0;

gdjs._1043_1088_1072Code.eventsList0(runtimeScene);
gdjs._1043_1088_1072Code.GDStarryBackgroundStars2Objects1.length = 0;
gdjs._1043_1088_1072Code.GDStarryBackgroundStars2Objects2.length = 0;
gdjs._1043_1088_1072Code.GDBlackSpaceObjects1.length = 0;
gdjs._1043_1088_1072Code.GDBlackSpaceObjects2.length = 0;
gdjs._1043_1088_1072Code.GDCthulhuObjects1.length = 0;
gdjs._1043_1088_1072Code.GDCthulhuObjects2.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid1Objects1.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid1Objects2.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid2Objects1.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid2Objects2.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid3Objects1.length = 0;
gdjs._1043_1088_1072Code.GDAsteroid3Objects2.length = 0;
gdjs._1043_1088_1072Code.GDScoreTextObjects1.length = 0;
gdjs._1043_1088_1072Code.GDScoreTextObjects2.length = 0;
gdjs._1043_1088_1072Code.GDLifesTextObjects1.length = 0;
gdjs._1043_1088_1072Code.GDLifesTextObjects2.length = 0;


return;

}

gdjs['_1043_1088_1072Code'] = gdjs._1043_1088_1072Code;
