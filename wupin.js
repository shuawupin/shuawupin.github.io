
qshuoming=""
var o = document.getElementById("wupinkuang");
var c = document.getElementById("wupinkuang1");
var w = o.offsetWidth;

var tk=''
var url1 = "https://gitee.com/ouyang-vp/ainuo/raw/master/wupin/"
var url2 = "https://gitee.com/ouyang-vp/ainuo/raw/master/shuoming/"
var shuliangzu = '<option>1组</option><option>2组</option><option>3组</option><option>4组</option><option>5组</option><option>6组</option><option>7组</option><option>8组</option><option>9组</option><option>10组</option><option>11组</option><option>12组</option><option>13组</option><option>14组</option><option>15组</option><option>16组</option><option>17组</option><option>18组</option><option>19组</option><option>20组</option><option>21组</option><option>22组</option><option>23组</option><option>24组</option><option>25组</option><option>26组</option><option>27组</option><option>28组</option><option>29组</option><option>30组</option>'
var zhiye = '<option>骑士</option><option>忍者</option><option>魔导</option><option>祭司</option><option>猎人</option><option>狂战</option>'
var zhiye7 = '<option>骑士</option><option>忍者</option><option>盗贼</option><option>魔导</option><option>祭司</option><option>猎人</option><option>狂战</option>'
var zhiyesuiji = '<option>骑士</option><option>忍者</option><option>魔导</option><option>祭司</option><option>猎人</option><option>狂战</option><option>随机</option>'
var wupin = [
    { 'value': '经验增幅卷轴', 'js': '常规数量.js', 'jg': 1, 'sm': '在使用道具后的10分钟内，会获得2倍的战斗经验。结束游戏时，当前效果将会消失。' },
    { 'value': '潜力提升卷轴', 'js': '常规数量.js', 'jg': 1, 'sm': '在使用道具后的3分钟内，角色的攻击力、魔法攻击力、防御力、魔法抵抗和体力增加30%。结束游戏时，当前效果将会消失。' },
    { 'value': '卓越灵药', 'js': '常规数量.js', 'jg': 1, 'sm': '可获得1个技能点。（初始化技能点，额外所增加过的技能点都会丢失。)' },
    { 'value': '混沌骰子', 'js': '常规数量.js', 'jg': 1, 'sm': '可以重置角色的能力。(洗出更好的初始属性)' },
    { 'value': '属性初始化卷', 'js': '常规数量.js', 'jg': 1, 'sm': '初始化角色的能力点。' },
    { 'value': '技能初始化卷', 'js': '常规数量.js', 'jg': 1, 'sm': '初始化角色的技能点。' },
    { 'value': '特级武器强化卷', 'js': '常规数量.js', 'jg': 1, 'sm': '强化武器的攻击力，可以与顶级武器强化卷轴一同使用。强化等级+2的概率增加30%。(消耗耐久度）可通过拖动到要强化的道具上面来进行强化。' },
    { 'value': '特级防具强化卷', 'js': '常规数量.js', 'jg': 1, 'sm': '强化防具的防御力，可以与顶级防具强化卷轴一同使用。强化等级＋2的概率增加30%。（消耗耐久度）可通过拖动到要强化的道具上面来进行强化。' },
    { 'value': '混沌武器强化卷', 'js': '常规数量.js', 'jg': 1, 'sm': '强化已强化过的武器攻击力。（不会消耗耐久度，失败时减少强化数值-1）' },
    { 'value': '混沌防具强化卷', 'js': '常规数量.js', 'jg': 1, 'sm': '强化已强化过的防具防御力。（不会消耗耐久度，失败时减少强化数值-1）' },
    { 'value': '元气恢复药水', 'js': '常规数量.js', 'jg': 1, 'sm': '恢复全部生命值与魔法值。' },
    { 'value': '再生药水', 'js': '常规数量.js', 'jg': 1, 'sm': '在16秒内增加生命恢复2520，魔法恢复27。' },
    { 'value': '被封印的技能书', 'js': '被封印的技能书.js', 'jg': 1, 'sm': '可以随机获得一种a的技能书。' },
    { 'value': '英雄徽章', 'js': '英雄徽章.js', 'jg': 1, 'sm': '使用可获得a的精英佣兵。(有机率开到满技能佣兵)' },
    { 'value': '战神的斗篷', 'js': '战神斗篷.js', 'jg': 1, 'sm': ""},
    { 'value': '装备礼盒', 'js': '装备礼盒.js', 'jg': 1, 'sm': 13 },
    { 'value': '动脉结晶'   , 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '混沌之鳞', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '净化宝石', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '秘银', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '魔法树枝', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '魔力结晶', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '皮革', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '卓越之花', 'js': '常规数量.js', 'jg': 1, 'sm': '合成用材料' },
    { 'value': '背包全开', 'js': '常规.js', 'jg': 2, 'sm': '全部16格大背包' },
    { 'value': '佣兵栏全开', 'js': '常规.js', 'jg': 1, 'sm': '佣兵栏全开(共18格)' },
    { 'value': '刷金币', 'js': '刷金币.js', 'jg': 1, 'sm': '修改金币任意数量 范围[0-9999,99,99]' },
    { 'value': '主角转职', 'js': '主角转职.js', 'jg': 1, 'sm': '改变主角职业(不影响剧情)。<br>会初始化属性点和技能点。<br>在下方选择需要转成的职业。' },
    { 'value': '定制混沌宝石', 'js': '定制宝石.js', 'jg': 1, 'sm': "" },
    { 'value': '定制佣兵', 'js': '定制佣兵.js', 'jg': 1, 'sm': "佣兵技能全开。<br>自定义技能上限等级，自定义佣兵团技能。" },
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


    if (wupin[k].js != undefined) {
        qshuoming = wupin[k].sm;
       var script = document.createElement('script');
        script.id="jiazaixiangqing"
        script.type = "text/javascript";
        script.src = "./wupin/shuoming/"  + wupin[k].js;
       document.body.appendChild(script);
        document.getElementById("jiazai").innerText = '内容加载中····';



       // document.getElementById("jiazaixiangqing").src = "./wupin/shuoming/" + wupin[k].js;


    }



}


function tijiao1() {

    var id = document.getElementById('Iid').innerText;
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    var url = 'https://gitee.com/api/v5/repos/ouyang-vp/UPtext/contents/' + id + '.txt';
    httpRequest.open('GET', url, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            var obj = JSON.parse(json);
            console.log(obj.sha);

            var httpRequest1 = new XMLHttpRequest()

            httpRequest1.open('POST', url, true)

            httpRequest1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");




            if (obj.sha != undefined) {


                var da = { "access_token": "cf8adb924440b35480ff3886a8954c14", "content": "123", "sha": "", "message": "aa" }
                da.sha = obj.sha;
                da.content = "5oiR5piv5LiA5q616ZyA6KaB5aSE55CG55qE5a2X56ym";
                httpRequest1.send(da);

            } else {//新建


                httpRequest.send(da);

            }







        }

    }
}

   function tijiao33() {
            //debugger;
          
            // 发送ajax
            // （1） 获取 XMLHttpRequest对象
            xmlHttp = new XMLHttpRequest();
       var array =   "{'access_token':'cf8adb924440b35480ff3886a8954c14','content':'5oiR5piv5LiA5q616ZyA6KaB5aSE55CG55qE5a2X56ym','message':'aa'}"

             console.log("array ", array)
                  //  (2) 连接服务器
                 //  get
                 //xmlHttp.open("get","/sendAjax/?a=1&b=2");
          
                 //  post
            xmlHttp.open("POST", "https://gitee.com/api/v5/repos/ouyang-vp/UPtext/contents/1221.txt",true);
          
              
              
       xmlHttp.setRequestHeader("Content-Type", "application/json");
       
 

                 //xmlHttp.setRequestHeader("X-CSRFToken",ele_csrf.value);
          
                 // （3） 发送数据
                 console.log("array2", array)
                 xmlHttp.send( array );   // 请求体数据
          
          
                 // （4） 回调函数  success
                 xmlHttp.onreadystatechange = function () {
                     if (this.status == 200) {
                          console.log("responseText", this.responseText)
                
                
                }
               
            };
 

    };

function tijiao() {
    var id = document.getElementById('Iid').innerText;
    var b64 = window.btoa(unescape(encodeURIComponent(document.getElementById('text1').value)));
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    var tk = "cf8adb924440b35480ff3886a8954c14";
    var url = 'https://gitee.com/api/v5/repos/ouyang-vp/UPtext/contents/shua/' + id + '.txt';
    httpRequest.open('GET', url + "?access_token="+tk, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
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
                    alert('提交成功，请把左下ID发给卖家。');

                }


            }




};


  };


};




 















 
 








//onerrorImg"

 // "onloadImg"
