var bespokeBase={mdlRight:[],mdlLeft:[],stContextPath:"",handleInit:function(){var option={url:bespokeBase.stContextPath+"xhr/bespoke/handleFridgeGrp",dataType:"json",type:"POST",async:false,success:function(result){bespokeBase.mdlRight=result.mdlRight;bespokeBase.mdlLeft=result.mdlLeft;console.log("handleInit_mdlRight [ "+result.mdlRight+" ]");console.log("handleInit_mdlLeft [ "+result.mdlLeft+" ]");console.log("handleInit_ERR_CNT [ "+result.errCnt+" ]")}};$.ajax(option)},getHandle:function(mdlCode){var result=
"";if(mdlCode!==null&&mdlCode!==undefined)if(0<bespokeBase.mdlRight.length&&0<=bespokeBase.mdlRight.indexOf(mdlCode))result="handle_right_active";else if(0<bespokeBase.mdlLeft.length&&0<=bespokeBase.mdlLeft.indexOf(mdlCode))result="handle_left_active";return result}};$(document).ready(function(){bespokeBase.stContextPath=$("#viewStContextPath").val();bespokeBase.handleInit()});