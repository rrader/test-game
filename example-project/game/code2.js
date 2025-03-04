gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewSprite2Objects1= [];
gdjs.StartCode.GDNewSprite2Objects2= [];
gdjs.StartCode.GDNewSprite3Objects1= [];
gdjs.StartCode.GDNewSprite3Objects2= [];
gdjs.StartCode.GDNewSprite4Objects1= [];
gdjs.StartCode.GDNewSprite4Objects2= [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.StartCode.GDNewSprite3Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.StartCode.GDNewSprite4Objects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.StartCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Info panel");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.StartCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Info panel");
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDNewSprite4Objects1.length = 0;
gdjs.StartCode.GDNewSprite4Objects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDNewSprite4Objects1.length = 0;
gdjs.StartCode.GDNewSprite4Objects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
