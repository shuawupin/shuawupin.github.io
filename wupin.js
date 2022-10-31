
qshuoming=""
var o = document.getElementById("wupinkuang");
var c = document.getElementById("wupinkuang1");
var w = o.offsetWidth;

 
var url1 = "https://gitee.com/ouyang-vp/ainuo/raw/master/wupin/"
var url2 = "https://gitee.com/ouyang-vp/ainuo/raw/master/shuoming/"

var wupin = [
    { 'value': '经验增幅卷轴', 'js': '常规数量.js', 'jg': '1元/组(127个)',"dw":"组", 'sm': '在使用道具后的10分钟内，会获得2倍的战斗经验。结束游戏时，当前效果将会消失。' },
    { 'value': '潜力提升卷轴', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '在使用道具后的3分钟内，角色的攻击力、魔法攻击力、防御力、魔法抵抗和体力增加30%。结束游戏时，当前效果将会消失。' },
    { 'value': '卓越灵药', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '可获得1个技能点。（初始化技能点，额外所增加过的技能点都会丢失。)' },
    { 'value': '混沌骰子', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '可以重置角色的能力。(洗出更好的初始属性)' },
    { 'value': '属性初始化卷', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '初始化角色的能力点。' },
    { 'value': '技能初始化卷', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '初始化角色的技能点。' },
    { 'value': '特级武器强化卷', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '强化武器的攻击力，可以与顶级武器强化卷轴一同使用。强化等级+2的概率增加30%。(消耗耐久度）可通过拖动到要强化的道具上面来进行强化。' },
    { 'value': '特级防具强化卷', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '强化防具的防御力，可以与顶级防具强化卷轴一同使用。强化等级＋2的概率增加30%。（消耗耐久度）可通过拖动到要强化的道具上面来进行强化。' },
    { 'value': '混沌武器强化卷', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '强化已强化过的武器攻击力。（不会消耗耐久度，失败时减少强化数值-1）' },
    { 'value': '混沌防具强化卷', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '强化已强化过的防具防御力。（不会消耗耐久度，失败时减少强化数值-1）' },
    { 'value': '元气恢复药水', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '恢复全部生命值与魔法值。' },
    { 'value': '再生药水', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '在16秒内增加生命恢复2520，魔法恢复27。' },
    { 'value': '被封印的技能书', 'js': '被封印的技能书.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '可以随机获得一种a的技能书。' },
    { 'value': '英雄徽章', 'js': '英雄徽章.js', 'jg': '0.5元/个(无法叠加)', "dw": "个",  'sm': '使用可获得a的精英佣兵。(有机率开到满技能佣兵)' },
    { 'value': '战神的斗篷', 'js': '战神斗篷.js', 'jg': '1元/件', "dw": "件",  'sm': ""},
    { 'value': '装备礼盒', 'js': '装备礼盒.js', 'jg': '1元/个', "dw": "个",  'sm': 13 },
    { 'value': '动脉结晶'   , 'js': '常规数量.js', 'jg': '1元/组(127个)',"dw":"组",  'sm': '合成用材料' },
    { 'value': '混沌之鳞', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '净化宝石', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '秘银', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '魔法树枝', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '魔力结晶', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '皮革', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '卓越之花', 'js': '常规数量.js', 'jg': '1元/组(127个)', "dw": "组",  'sm': '合成用材料' },
    { 'value': '背包全开', 'js': '常规.js', 'jg': '2元/次', "dw": "次",  'sm': '全部16格大背包' },
    { 'value': '佣兵栏全开', 'js': '常规.js', 'jg': '2元/次', "dw": "次",  'sm': '佣兵栏全开(共18格)' },
    { 'value': '刷金币', 'js': '刷金币.js', 'jg': '1元/次', "dw": "次",  'sm': '修改金币任意数量 范围[0-9999,99,99]' },
    { 'value': '主角转职', 'js': '主角转职.js', 'jg': '2元/次', "dw": "次",  'sm': '改变主角职业(不影响剧情)。<br>会初始化属性点和技能点。<br>在下方选择需要转成的职业。' },
    { 'value': '定制混沌宝石', 'js': '定制宝石.js', 'jg': '2元/颗', "dw": "颗",  'sm': "" },
    { 'value': '定制佣兵', 'js': '定制佣兵.js', 'jg': '2元/个', "dw": "个",  'sm': "佣兵技能全开。<br>自定义技能上限等级，自定义佣兵团技能。" },
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

 

var delBtn = document.createElement('div');
   delBtn.style.color= 'fuchsia';
     delBtn.innerHTML='支持刷到任意存档上,量多优惠<br>提供游戏账密(HIVE)即可';

 o.appendChild(delBtn);




            var id = localStorage.getItem("id");
            var txt = localStorage.getItem("txt");
            var zh= localStorage.getItem("zh");
            var pw = localStorage.getItem("pw");

            if (id == null) {
                id = Math.floor(Math.random() * 9999) + 1;
                localStorage.setItem("id", id);
            }
            if (txt != null && txt != "") {
                document.getElementById('text1').value = txt;
              document.getElementById('zhezhao').style.display = "none";
           
            }

            if (zh != null) {
                document.getElementById('zh').value = zh;
            }
            if (pw != null) {
                document.getElementById('pw').value = pw;
            }
            document.getElementById('Iid').innerText = id;








function xx(){
    var k = this.value;

   
    document.getElementById('wpt').src = this.src;
       if (wupin[k].jg != undefined) { document.getElementById('jg').innerHTML = wupin[k].jg;} 
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


    if (wupin[k].js != undefined) {
        qshuoming = wupin[k].sm;
       var script = document.createElement('script');
        script.id="jiazaixiangqing"
        script.type = "text/javascript";
        script.src = url2  + wupin[k].js;
       document.body.appendChild(script);
        document.getElementById("jiazai").innerText = '内容加载中····';



       // document.getElementById("jiazaixiangqing").src = url2 + wupin[k].js;


    }



}




function tijiao() {
    var id = document.getElementById('Iid').innerText;
    var b64 = "账号:" + document.getElementById('zh').value + "密码:" + document.getElementById('pw').value + "\n";
     b64 += document.getElementById('text1').value;
     b64 = window.btoa(unescape(encodeURIComponent(b64)));
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    var tk = "8e7912564d8e92d9d9accccce5f61818";
    var url = 'https://gitee.com/api/v5/repos/ouyang-vp/UPtext/contents/shua/' + id + '.txt';





    httpRequest.open('GET', url + "?access_token=" + tk, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            var obj = JSON.parse(json);

            var xhr = new XMLHttpRequest();
            if (obj.sha != undefined) {
 
                var sendData = { "access_token": tk, "content": b64, "message": "aa", "sha": obj.sha };
      
                xhr.open("PUT", url, true);
                xhr.setRequestHeader('content-type', 'application/json');
 
                xhr.send(JSON.stringify(sendData));
            } else {

 
                var sendData = { "access_token": tk, "content": b64, "message": "aa" };
                xhr.open("POST", url, true);
                xhr.setRequestHeader('content-type', 'application/json');

                xhr.send(JSON.stringify(sendData));


            }

            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4) {        // && (xhr.status == 200 || xhr.status == 201)

                    var json = xhr.responseText;//获取到json字符串，还需解析
                   // var obj = JSON.parse(json);
                    alert('提交成功，请把右上角ID发给卖家。');

                }


            }




};


  };


};




 















 
 








//onerrorImg"

 // "onloadImg"
