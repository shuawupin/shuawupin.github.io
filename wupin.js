

var o = document.getElementById("wupinkuang")
var w = o.offsetWidth;
var url1 = "https://gitee.com/ouyang-vp/catmove/raw/master/wupin/"
var url2 = "https://gitee.com/ouyang-vp/ainuo/raw/master/shuoming/"
 

var wupin = [
    { 'value': '经验增幅卷轴', 'jg': 1, 'xz': 1},
    { 'value': '潜力提升卷轴', 'jg': 1, 'xz': 1},
    { 'value': '卓越灵药', 'jg': 1, 'xz': 1 },
    { 'value': '混沌骰子', 'jg': 1, 'xz': 1},
    { 'value': '属性初始化卷', 'jg': 1, 'xz': 1 },
    { 'value': '技能初始化卷', 'jg': 1, 'xz': 1 },
    { 'value': '特级武器强化卷', 'jg': 1, 'xz': 1},
    { 'value': '特级防具强化卷', 'jg': 1, 'xz': 1},
    { 'value': '混沌武器强化卷', 'jg': 1, 'xz': 1},
    { 'value': '混沌防具强化卷', 'jg': 1, 'xz': 1},
    { 'value': '元气恢复药水', 'jg': 1, 'xz': 1},
    { 'value': '再生药水', 'jg': 1, 'xz': 1 },
    { 'value': '被封印的技能书', 'jg': 1, 'xz': 2 },
    { 'value': '英雄徽章', 'jg': 1, 'xz': 2},
    { 'value': '战神斗篷', 'jg': 1, 'xz': 1 },
    { 'value': '装备礼盒', 'jg': 1, 'xz': 3 },
    { 'value': '动脉结晶', 'jg': 1, 'xz': 6},
    { 'value': '混沌之鳞', 'jg': 1, 'xz': 6 },
    { 'value': '净化宝石', 'jg': 1, 'xz': 6},
    { 'value': '秘银', 'jg': 1, 'xz': 6 },
    { 'value': '魔法树枝', 'jg': 1, 'xz': 6},
    { 'value': '魔力结晶', 'jg': 1, 'xz': 6},
    { 'value': '皮革', 'jg': 1, 'xz': 6},
    { 'value': '卓越之花', 'jg': 1, 'xz': 6},

];









 


 

if (w>378){
var k=parseInt(w/63)+1;
var w1=w/k;
}else{
    var w1 = w / 6;
    
}
console.log(w1)







 




 for (var i = 0 ;i<wupin.length;i++){  
 
     var delBtn = document.createElement('img');
     delBtn.style = "vertical-align:sub;";
     delBtn.height = w1;
     delBtn.width = w1;
     delBtn.onclick = xx;


    delBtn.src = url1 + wupin[i].value + ".png";


   // delBtn.src = "wupin/" + wupin[i].value  + ".png";
  
    delBtn.value =i;

 o.appendChild(delBtn);
 }

 


function xx(){
    var k = this.value

    document.getElementById('wpt').src = this.src;
    document.getElementById('wpsmt').src = "";
    document.getElementById('wpm').innerHTML = wupin[k].value;
    document.getElementById('zhezhao1').style.display = "";
    document.getElementById('zhiye1').length = 6
    document.getElementById('shuliang1').selectedIndex = 0;
    document.getElementById('zhiye1').selectedIndex = 0;
    document.getElementById('dengji1').selectedIndex = 0;

    switch (wupin[k].xz) {
        case 0:
            document.getElementById('zhiye').style.display = "none";
            document.getElementById('dengji').style.display = "none";
            document.getElementById('shuliang').style.display = "none";
         
            break;
        case 1:
            document.getElementById('zhiye').style.display = "none";
            document.getElementById('dengji').style.display = "none";
       
            document.getElementById('shuliang').style.display = "";
            document.getElementById('wpsmt').src = url2 + wupin[k].value + ".png";

            break;
        case 2:
            document.getElementById('zhiye').style.display = "";
          
            document.getElementById('dengji').style.display = "none";
            document.getElementById('shuliang').style.display = "";
            gaibian();
          
            break;
        case 3:
            document.getElementById('zhiye1').length = 7;
            document.getElementById('zhiye1').options[6].text = "盗贼";
             document.getElementById('zhiye').style.display = "";
            document.getElementById('dengji').style.display = "";
            document.getElementById('shuliang').style.display = "";
            gaibian();
            break;
        case 6:
            document.getElementById('zhiye').style.display = "none";
            document.getElementById('dengji').style.display = "none";
            document.getElementById('shuliang').style.display = "";
            document.getElementById('wpsmt').src = url2 + "材料.png";

            break;


    }


}




function importScript(scriptUrl) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    document.body.appendChild(script);
}
