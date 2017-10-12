/**
 * Created by Administrator on 2017/3/27.
 */


var Debug = 0;
if (localStorage.getItem("DEBUG") == "1"){
    Debug = 1;
}
var Host = window.location.origin;
var BASE_URL_ACTION = Host + '/app';
//var file_exp = '.html';
var IsShell = 0;
