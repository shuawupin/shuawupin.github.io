

var o = document.getElementById("wupinkuang")
var w = o.offsetWidth;


var url1 = "https://gitee.com/ouyang-vp/ainuo/raw/master/wupin/"
var url2 = "https://gitee.com/ouyang-vp/ainuo/raw/master/shuoming/"
var shuliangge ='<option>1个</option><option>2个</option><option>3个</option><option>4个</option><option>5个</option><option>6个</option><option>7个</option><option>8个</option><option>9个</option><option>10个</option><option>11个</option><option>12个</option><option>13个</option><option>14个</option><option>15个</option><option>16个</option><option>17个</option><option>18个</option><option>19个</option><option>20个</option><option>21个</option><option>22个</option><option>23个</option><option>24个</option><option>25个</option><option>26个</option><option>27个</option><option>28个</option><option>29个</option><option>30个</option>'
var shuliangzu = '<option>1组</option><option>2组</option><option>3组</option><option>4组</option><option>5组</option><option>6组</option><option>7组</option><option>8组</option><option>9组</option><option>10组</option><option>11组</option><option>12组</option><option>13组</option><option>14组</option><option>15组</option><option>16组</option><option>17组</option><option>18组</option><option>19组</option><option>20组</option><option>21组</option><option>22组</option><option>23组</option><option>24组</option><option>25组</option><option>26组</option><option>27组</option><option>28组</option><option>29组</option><option>30组</option>'
var zhiye = '<option>骑士</option><option>忍者</option><option>魔导</option><option>祭司</option><option>猎人</option><option>狂战</option>'
var zhiye7 = '<option>骑士</option><option>忍者</option><option>盗贼</option><option>魔导</option><option>祭司</option><option>猎人</option><option>狂战</option>'
var zhiyesuiji = '<option>骑士</option><option>忍者</option><option>魔导</option><option>祭司</option><option>猎人</option><option>狂战</option><option>随机</option>'
var shuxing = '<option>力量</option><option>敏捷</option><option>体力</option><option>智力</option><option>精力</option><option>暴击率</option><option>命中率</option><option>暴伤抵抗率</option><option>魔法抵抗率</option><option>回避率</option><option>盾牌格挡率</option><option>武器格挡率</option><option>MP增加</option><option>MP恢复</option><option>暴击抵抗率</option><option>暴伤增加率</option><option>HP吸收率</option><option>火率</option><option>风率</option><option>寒气率</option><option>神圣率</option><option>黑暗率</option><option>毒 率</option><option>重力摆率</option><option>冰霜率</option><option>治愈气息率</option><option>狂战率</option><option>瞬间恢复</option><option>魔力专家率</option><option>减少敌意率</option><option>晕眩抗性</option><option>睡眠抗性</option><option>失眠抗性</option><option>恐惧抗性</option><option>减速抗性</option><option>沉默抗性</option>'
var wupin = [
    { 'value': '经验增幅卷轴', 'img': '经验增幅卷轴.png', 'jg': 1, 'xz': 1},
    { 'value': '潜力提升卷轴', 'img': '潜力提升卷轴.png', 'jg': 1, 'xz': 1},
    { 'value': '卓越灵药', 'img': '卓越灵药.png', 'jg': 1, 'xz': 1 },
    { 'value': '混沌骰子', 'img': '混沌骰子.png', 'jg': 1, 'xz': 1},
    { 'value': '属性初始化卷', 'img': '属性初始化卷.png', 'jg': 1, 'xz': 1 },
    { 'value': '技能初始化卷', 'img': '技能初始化卷.png', 'jg': 1, 'xz': 1 },
    { 'value': '特级武器强化卷', 'img': '特级武器强化卷.png', 'jg': 1, 'xz': 1},
    { 'value': '特级防具强化卷', 'img': '特级防具强化卷.png', 'jg': 1, 'xz': 1},
    { 'value': '混沌武器强化卷', 'img': '混沌武器强化卷.png', 'jg': 1, 'xz': 1},
    { 'value': '混沌防具强化卷', 'img': '混沌防具强化卷.png', 'jg': 1, 'xz': 1},
    { 'value': '元气恢复药水', 'img': '元气恢复药水.png', 'jg': 1, 'xz': 1},
    { 'value': '再生药水', 'img': '再生药水.png', 'jg': 1, 'xz': 1 },
    { 'value': '被封印的技能书', 'img': '1', 'jg': 1, 'xz': 4 },
    { 'value': '英雄徽章', 'img': '1', 'jg': 1, 'xz': 5},
    { 'value': '战神斗篷', 'img': '战神斗篷.png','jg': 1, 'xz': 2 },
    { 'value': '装备礼盒', 'img': '1', 'jg': 1, 'xz': 6 },
    { 'value': '动脉结晶', 'img': '材料.png', 'jg': 1, 'xz': 1},
    { 'value': '混沌之鳞', 'img': '材料.png', 'jg': 1, 'xz': 1 },
    { 'value': '净化宝石', 'img': '材料.png', 'jg': 1, 'xz': 1},
    { 'value': '秘银', 'img': '材料.png', 'jg': 1, 'xz': 1 },
    { 'value': '魔法树枝', 'img': '材料.png', 'jg': 1, 'xz': 1},
    { 'value': '魔力结晶', 'img': '材料.png', 'jg': 1, 'xz': 1},
    { 'value': '皮革', 'img': '材料.png','jg': 1, 'xz': 1},
    { 'value': '卓越之花', 'img': '材料.png', 'jg': 1, 'xz': 1},
    { 'value': '背包全开', 'txt': '全部背包改16格大背包', 'jg': 2, 'xz': 0 },
    { 'value': '佣兵栏全开', 'txt': '佣兵栏全开（共18格）', 'jg': 1, 'xz': 0 },
    { 'value': '刷金币', 'txt': '范围 [1-99999999] 任意金币 (满金币99999999)', 'jg': 1, 'xz': 0 },
    { 'value': '主角转职', 'txt': '改变主角职业(不影响剧情)。<br>会初始化属性点和技能点。<br>在下方选择需要转成的职业。', 'jg': 1, 'xz': 10 },
    { 'value': '定制混沌宝石', 'jg': 1, 'xz': 11 },
];


var wupinz = [
    { 'value': '背包全开', 'jg': 1, 'xz': 1 },
    { 'value': '佣兵栏全开', 'jg': 1, 'xz': 1 },
    { 'value': '刷金币 (指定数量)', 'jg': 1, 'xz': 1 },
    { 'value': '装备开宝石孔 (1-15 可选)', 'jg': 1, 'xz': 1 },
    { 'value': '主角转职业', 'jg': 1, 'xz': 1 },
    { 'value': '完美佣兵 (技能全开 上限8级)', 'jg': 1, 'xz': 1 },
    { 'value': '定制混沌宝石', 'jg': 1, 'xz': 1 },

    { 'value': '背包全开', 'jg': 1, 'xz': 1 },
    { 'value': '佣兵栏全开', 'jg': 1, 'xz': 1 },
    { 'value': '刷金币 (指定数量)', 'jg': 1, 'xz': 1 },
    { 'value': '装备开宝石孔 (1-15 可选)', 'jg': 1, 'xz': 1 },
    { 'value': '主角转职业', 'jg': 1, 'xz': 1 },
    { 'value': '完美佣兵 (技能全开 上限8级)', 'jg': 1, 'xz': 1 },
    { 'value': '定制混沌宝石', 'jg': 1, 'xz': 1 },
    { 'value': '背包全开', 'jg': 1, 'xz': 1 },
    { 'value': '佣兵栏全开', 'jg': 1, 'xz': 1 },
    { 'value': '刷金币 (指定数量)', 'jg': 1, 'xz': 1 },
    { 'value': '装备开宝石孔 (1-15 可选)', 'jg': 1, 'xz': 1 },
    { 'value': '主角转职业', 'jg': 1, 'xz': 1 },
    { 'value': '完美佣兵 (技能全开 上限8级)', 'jg': 1, 'xz': 1 },
    { 'value': '定制混沌宝石', 'jg': 1, 'xz': 1 },
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
    var k = this.value;
    var c = document.getElementById("wupinkuang1");
   
    document.getElementById('wpt').src = this.src;
  //  document.getElementById('wpsmt').src = "";
    document.getElementById('wpm').innerHTML = wupin[k].value;
    document.getElementById('zhezhao1').style.display = "";

    if (wupin[k].img != undefined) {

        var p = document.getElementById("wupinkuang1")
    
         

        document.getElementById("jiazai").innerText = '图片加载中····';

        var delBtn = document.createElement('img');
 
        delBtn.id = 'wpsmt';
        delBtn.style.width = "80%";
        
        if (wupin[k].img == 1) {

        } else {
            delBtn.src = url2 + wupin[k].img;

        }
      c.appendChild(delBtn);

    }


    if (wupin[k].txt != undefined) {

        var delBtn = document.createElement('div');

        delBtn.id = 'wpsm1';
        delBtn.innerHTML = wupin[k].txt;

        c.appendChild(delBtn);


    }








    document.getElementById('queren').onclick = tianjia;

    switch (wupin[k].xz) {
        case 0:

            break;
        case 1:

            document.getElementById('shuliang').style.display = "";
            document.getElementById('shuliang1').innerHTML = shuliangzu;
            break;
        case 2:

            document.getElementById('shuliang').style.display = "";
            document.getElementById('shuliang1').innerHTML = shuliangge;
            break;



        case 4://书
            document.getElementById('zhiye').style.display = "";
            document.getElementById('zhiye1').innerHTML = zhiye;

            document.getElementById('shuliang').style.display = "";
            document.getElementById('shuliang1').innerHTML = shuliangzu;
            gaibian();

            break;


        case 5: //徽章
            document.getElementById('zhiye').style.display = "";
            document.getElementById('zhiye1').innerHTML = zhiyesuiji;
            document.getElementById('shuliang').style.display = "";
            document.getElementById('shuliang1').innerHTML = shuliangge;
            gaibian();
          
            break;
        case 6://套装

          
            document.getElementById('zhiye1').innerHTML = zhiye7;
             document.getElementById('zhiye').style.display = "";
            document.getElementById('dengji').style.display = "";
            document.getElementById('shuliang').style.display = "";
            document.getElementById('shuliang1').innerHTML = shuliangge;
            gaibian();
            break;
 
        case 10: //转职

            document.getElementById('zhiye1').innerHTML = zhiye;
            document.getElementById('zhiye').style.display = "";

           
            break;
        case 11: //宝石

            document.getElementById('queren').onclick = tianjiabaoshi;
            document.getElementById('shuliang').style.display = "";
            document.getElementById('shuliang1').innerHTML = shuliangge;

            var delBtn = document.createElement('div');
   
            delBtn.style.backgroundColor = "black";
            delBtn.style.paddingLeft = "5px";
            delBtn.style.paddingBottom = "10px";
            delBtn.style.width = "80%";
            delBtn.innerHTML = '<div style="font-size: 22px; color: #ffffff;">混沌宝石</div><div id="baoshishuxing" style="font-size: 16px; color: red;">力量:100</div> <div  style="font-size: 14px;color: deepskyblue;">为道具增加属性。<br>可通过拖动到要镶嵌的装备上面来进行<br>镶嵌，宝石的镶嵌数量取决于装备的宝<br>石孔数。</div>';
            c.appendChild(delBtn);






            var Ddiv = document.createElement('div');
            Ddiv.style.marginTop = '5px';
            var delBtn = document.createElement('a');
            delBtn.innerHTML = "选属性";
            delBtn.style.fontSize = "14px";
            Ddiv.appendChild(delBtn);

            var delBtn = document.createElement('select');
            delBtn.id = 'sxa'
            delBtn.onchange = xx2;
            delBtn.innerHTML =shuxing;
            delBtn.style.fontSize = "14px";
            Ddiv.appendChild(delBtn);

            var delBtn = document.createElement('input');
            delBtn.id = 'sxb'
            delBtn.onchange = xx2;
            delBtn.style.fontSize = "16px";
            delBtn.style.marginLeft = "2px";
            delBtn.value = 100;
            delBtn.style.width = "42px";
            Ddiv.appendChild(delBtn);

            var delBtn = document.createElement('a');
            delBtn.id = 'sxfw'
            delBtn.innerHTML = " [1-2000]";
            delBtn.style.fontSize = "14px";
            delBtn.style.color = "#ff0000";
            Ddiv.appendChild(delBtn);
            c.appendChild(Ddiv);

            break;

    }


}




function xx1() {
    var k = this.value;

    document.getElementById('wpm').innerHTML = wupinz[k].value;


    document.getElementById('zhezhao1').style.display = "";

}

function xx2() {
    var k1 = document.getElementById('sxa').value;
    var k2 = document.getElementById('sxb').value;
    var k3 = "";
    var s1 = Number(k2);


 console.log(s1)


    if (isNaN(s1)) {

        document.getElementById('sxb').style.color = "red";
        k2 = "请输入纯数字!";



    } else {

    if (k1.indexOf("率") != -1) {
        document.getElementById('sxfw').innerHTML = "<a style='color: black;'>%</a> [0.1%-200%]";
        s1=s1.toFixed(1)
        if (s1 < 0.1 || s1 > 200) {
            document.getElementById('sxb').style.color = "red";
            k2 = "超出范围!";
        } else {
            k2 =s1
            k3 = "%";
            document.getElementById('sxb').style.color = "black";
        }
    } else {
        document.getElementById('sxfw').innerHTML = " [1-2000]";
        s1 = s1.toFixed(0)
        if (s1 < 1 || s1 > 2000) {
            document.getElementById('sxb').style.color = "red";
            k2 = "超出范围!";
        } else {        
            k2 = s1
            document.getElementById('sxb').style.color = "black";
    }

    }
    }




    document.getElementById('baoshishuxing').innerHTML = k1 +":"+k2+k3;


    

}















function tianjia() {

    var t2 = "";

    if (document.getElementById('zhiye').style.display != "none") { t2 = document.getElementById('zhiye1').value; }
    if (document.getElementById('dengji').style.display != "none") { t2 = t2 + "-" + document.getElementById('dengji1').value + "级"; }
    if (t2 != "") { t2 = "[" + t2 + "]"; };

    if (document.getElementById('shuliang').style.display != "none") { t2 = t2 + " ☓" + document.getElementById('shuliang1').value; };
    t2 = document.getElementById('wpm').innerText + t2;
    document.getElementById('text1').value = document.getElementById('text1').value + t2 + "\r";
    alert(t2 + " 已添加");
}
function tianjiabaoshi() {

    var t2 = "[" + document.getElementById('baoshishuxing').innerText + "]";



    if (t2.indexOf("!") != -1) {

        alert("添加失败,请输入正确属性值！");

    } else {

        t2 = t2 + " ☓" + document.getElementById('shuliang1').value;
        t2 = document.getElementById('wpm').innerText + t2;
       document.getElementById('text1').value = document.getElementById('text1').value + t2 + "\r";
        alert(t2 + " 已添加");

    }

}



//onerrorImg"

 // "onloadImg"
