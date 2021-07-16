<template>
  <div :class="{'wrapper': true, 'dark': lightFlag}">
    <!-- <div class="k1"></div> -->
    <div class="main">
      <div class="center"></div>
      <div class="right"></div>
      <p>北国风光，千里冰封，万里雪飘。
        望长城内外，惟余莽莽；大河上下，顿失滔滔。
        山舞银蛇，原驰蜡象，欲与天公试比高。
        须晴日，看红装素裹，分外妖娆。
        江山如此多娇，引无数英雄竞折腰。
        惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
        一代天骄，成吉思汗，只识弯弓射大雕。
        俱往矣，数风流人物，还看今朝。北国风光，千里冰封，万里雪飘。
        望长城内外，惟余莽莽；大河上下，顿失滔滔。
        山舞银蛇，原驰蜡象，欲与天公试比高。
        须晴日，看红装素裹，分外妖娆。
        江山如此多娇，引无数英雄竞折腰。
        惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
        一代天骄，成吉思汗，只识弯弓射大雕。
        俱往矣，数风流人物，还看今朝。北国风光，千里冰封，万里雪飘。
        望长城内外，惟余莽莽；大河上下，顿失滔滔。
        山舞银蛇，原驰蜡象，欲与天公试比高。
        须晴日，看红装素裹，分外妖娆。
        江山如此多娇，引无数英雄竞折腰。
        惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
        一代天骄，成吉思汗，只识弯弓射大雕。
        俱往矣，数风流人物，还看今朝。北国风光，千里冰封，万里雪飘。
        望长城内外，惟余莽莽；大河上下，顿失滔滔。
        山舞银蛇，原驰蜡象，欲与天公试比高。
        须晴日，看红装素裹，分外妖娆。
        江山如此多娇，引无数英雄竞折腰。
        惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
        一代天骄，成吉思汗，只识弯弓射大雕。
        俱往矣，数风流人物，还看今朝。
      </p>
    </div>
    <input type="text" class="input" size="100">
    <div class="container">
      <div class="sticky-box">内容1</div>
      <div class="sticky-box">内容2</div>
      <div class="sticky-box">内容3</div>
      <div class="sticky-box">内容4</div>
    </div>
    <div class="wh">ssss</div>
    <!-- 水波纹 -->
    <div class="water">
      <div class="water-box">
        <div class="water-item water-one"></div>
        <div class="water-item water-two"></div>
        <div class="water-item water-three"></div>
      </div>
    </div>
    <ul class="list">
      <li :class="{'all': flag}">1</li>
      <li :class="{'all': flag}">2</li>
      <li :class="{'all': flag}">3</li>
      <li :class="{'all': flag}">4</li>
      <li :class="{'all': flag}">5</li>
    </ul>
    <el-button 
      type="primary" 
      @click="flag = !flag"
    >切换模式</el-button>
    <div class="zIndex">
      <div class="one">
        9
        <div class="oneChild">99</div>
      </div>
      <div class="two">
        11
        <div class="twoChild">2</div>
      </div>
    </div>
    <!-- 移动边框 -->
    <!-- <div class="moveOrder">content</div> -->
    <!-- <div class="saomiao"></div> -->
    <!-- 月食 -->
    <div :class="{'moon': true, 'yueshi': moonFlag}"></div>
    <el-button type="primary" @click="lightFlag = !lightFlag" >
      {{ lightFlag ? '开灯' : '关灯'}}
    </el-button>
    <el-button type="primary" @click="moonFlag = !moonFlag" >
      {{ moonFlag ? '月牙' : '月食'}}
    </el-button>
    <!-- 滚动的球 -->
    <div class="qiu"></div>
    <!-- 沿着椭圆旋转 -->
    <main class="rotateBox">
      <div>
        <p></p>	
      </div>
    </main>
    <div>测试fit-content</div>

    <!-- 摆动许愿牌 -->
    <div class="bai1"></div>
    <!-- 摆动许愿牌 升级版本 -->

    <div class="animate-4">
      <!--运动模块1 整体动画-->
      <div class="s-1">
        <div class="item-1"></div>
        <!--运动模块2 第二部分动画 -->
        <div class="s-2">
          <div class="item-2"></div>
          <!--运动模块3 第三部分动画-->
          <div class="s-3">
              <div class="item-3"></div>
          </div>
        </div>
      </div>
    </div>


  </div>


</template>
<script>
export default {
  data () {
    return {
      flag: false,
      lightFlag:false,
      moonFlag: false, 
    }
  },
  mounted(){

    new Promise((resolve) => {
      console.log("log: 外部promise");
      resolve();
    })
    .then(() => {
      console.log("log: 外部第一个then");
      new Promise((resolve) => {
        console.log("log: 内部promise");
        resolve();
      })
        .then(() => {
          console.log("log: 内部第一个then");
        })
        .then(() => {
          console.log("log: 内部第二个then");
        });
    })
    .then(() => {
      console.log("log: 外部第二个then");
    });
    //外部promise  外部第一个then  内部promise
  },
}
</script>
<style scoped lang='scss'>
  .wrapper{
    padding-bottom: 1000px;
    padding-left: 100px;
    &.dark{
      background: #000;
    }
  }
  .k1{
    width: 200px; 
    height: 200px;
    background: #000;
    animation: k1 2s ease;
  }
  @keyframes k1 {
    0%{
    transform: rotate(0deg);
    }
    100%{
    transform: rotate(360deg);
    }
  }

  .main {
    width: 500px;
    div{
      border: 1px solid red;
      background: pink;
    }
    .center{
      width: 300px;
      height: 300px;
      shape-outside: circle();
      float: left;
    }
    .right{
      width: 300px;
      height: 300px;
      shape-outside: polygon(100% 0, 100% 100%, 0 100%);
      float: right;
    }
    p {
      text-align: center;
    }
  }
  .input{
    display: block;
  }
  .container {
    background: #eee;
    width: 600px;
    height: 200px;
    margin: 0 auto;
    overflow: auto;
    .sticky-box {
      position: -webkit-sticky;
      position: sticky;
      height: 60px;
      margin-bottom: 30px;
      background: #ff7300;
      top: 0px;
      margin-bottom: 100px;
    }

    div {
      font-size: 30px;
      text-align: center;
      color: #fff;
      line-height: 60px;
    }
  }
  .wh{
    width: 200px;
    background: pink;
    display: flex;
    float: right;
    transform: translateX(-100px) rotate(10deg);
    &:hover{
      // transform: scale(2);
    }
    &::after{
      content: '';
      padding-top: 100%;
    }
  }
  .water{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border:1px solid pink;
    .water-box{
      position: absolute;
      width: 200%;
      display: flex;
      bottom: -128px;
      animation: up 10s linear infinite;
      @keyframes up {
        to{
           bottom: 0px;
        }
      }
      &::after{
        content: '';
        padding-top: 100%;
      }
      .water-item{
        position: absolute;
        width: 100%;
        background: rgb(145, 196, 238);
        animation: gun linear infinite;
        display: flex;
        &::after{
          content: '';
          padding-top: 100%;
        }
        &.water-one{
          top: 40%;
          left: -25%;
          border-radius: 40%;
          animation-duration: 5s;
          opacity: 0.5;
        }
        &.water-two{
          top: 45%;
          left: -35%;
          border-radius: 30%;
          animation-duration: 7s;
          opacity: 0.4;
        }
        &.water-three{
          top: 50%;
          left: -35%;
          border-radius: 33px;
          animation-duration: 11s;
          opacity: 0.7;
        }
      }
      @keyframes gun {
        0%{
          transform: rotate(0deg);
        }
        100%{
          transform: rotate(360deg);
        }
      }
    }
  }
  .list{
    margin-top: 300px;
    margin-left: 200px;
    width: 200px;
    list-style: none;
    li{
      height: 30px;
      border:10px solid papayawhip;
      margin-top: -10px;
      &:hover{
        outline: 10px solid yellowgreen;
        outline-offset:-10px;
        // border: 10px solid yellowgreen;
      }
      &.all:hover{
        outline: 10000px solid rgba(0,0,0,0.5);
        outline-offset:0;
        position: relative;
        z-index: 999;
      }
    }
  }
  .zIndex{
    .one{
      width: 200px;
      height: 200px;
      background: red;
      position: relative;
      z-index: 9;
      .oneChild{
        width: 100px;
        height: 100px;
        background: yellowgreen;
        z-index: 99;
      }
    }
    .two{
      width: 200px;
      height: 200px;
      background: rgb(177, 144, 38);
      position: relative;
      top: -125px;
      left: 50px;
      z-index: 11;
      .twoChild{
        width: 100px;
        height: 100px;
        background: rgb(21, 170, 113);
        z-index: 2;

      }
    }
  }
  .moveOrder{
    width: 190px;
    height: 190px;
    background: aqua;
    position: relative;
    left: 40px;
    &:before,&:after{
      position: absolute;
      content: "";
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
    }
    &:before{
      border: 5px solid #ff00ff88;
      animation: move 5s linear infinite;
    }
    &:after{
      border-color: #ff000088;
      animation: move2 5s linear infinite;
    }
  }

  @keyframes move{
    0%,100%{
      clip: rect(0,200px,5px,0);
    }
    25%{
      clip: rect(0,200px,200px,195px);
    }
    50%{
      clip: rect(195px,200px,200px,0);
    }
    75%{
      clip: rect(0,5px,200px,0px);
    }
  }
  @keyframes move2{
    0%,100%{
      clip: rect(0,200px,5px,0);
    }
    25%{
      clip: rect(0,5px,200px,0px);
    }
    50%{
      clip: rect(195px,200px,200px,0);
    }
    75%{
      clip: rect(0,200px,200px,195px);
    }
  }


  .saomiao{
    width: 200px;
    height: 200px;
    background: 
      linear-gradient(#03A9F4,#03A9F4), 
      linear-gradient(90deg, #ffffff33 1px,transparent 0,transparent 19px),
      linear-gradient(#ffffff33 1px,transparent 0,transparent 19px),
      linear-gradient(transparent, #2196f387);
    background-size:100% 1.5%, 10% 100%,100% 10%, 100% 100%;
    background-repeat: no-repeat,repeat,repeat,no-repeat;
    background-position: 0 0,0 0, 0 0, 0 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 1.5%, 0% 1.5%);
    animation: move 2s infinite linear;
  }
  @keyframes move{
    to{
      background-position: 0 100%,0 0, 0 0, 0 0;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }  

  .moon{
    margin: 50px;
    font-size: 20px;
    width: 100px;
    height: 100px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 20px 0 0 rgb(209, 209, 30);
    &.yueshi{
      animation: yuemove 10s linear infinite alternate-reverse;
      // animation: yuemove 10s linear infinite alternate;
    }
  }
  @keyframes yuemove{
    from{
      box-shadow: 100px 0 0 rgb(209, 209, 30);
      transform: translate(0,0);
    }
    to{
      box-shadow: -100px 0 0 rgb(209, 209, 30);
      transform: translate(100px,0);
    }
  }

  .rotateBox{
    width: 150px;
    height: 100px;
    border: 1px solid aqua;
    border-radius: 50%;
    position: relative;
    margin: 20px;
    div{
      position: absolute;
      left: 50%;
      top: 50%;
      animation: move 3s linear infinite;
    }
    @keyframes move{
      0%,100%{
        transform: translate(25px, 0);
      }
      25%, 75%{
        transform: translate(0, 0);
      }
      50%{
        transform: translate(-25px, 0);
      }
    }
    p{
      position: absolute;
      left: 50%;
      top: 50%;
      margin: 0;
      width: 20px;
      height: 20px;
      margin: -10px;
      border-radius: 50%;
      background: aqua;
      animation: rotate 3s linear infinite;
      // animation: rotate2 9s linear infinite;
      // animation: rotate3 9s linear infinite;
    }
    @keyframes rotate{
      0%{
        transform:rotate(0deg) translate(50px, 0) ;
      }
      100%{
        transform:rotate(360deg) translate(50px, 0) ;
      }
    }
    @keyframes rotate2{
      0%{
        transform:rotate(0deg) translate(75px, 0) ;
      }
      25%{
        transform:rotate(90deg) translate(50px, 0) ;
      }
      50%{
        transform:rotate(180deg) translate(75px, 0) ;
      }
      75%{
        transform:rotate(270deg) translate(50px, 0) ;
      }
      100%{
        transform:rotate(360deg) translate(75px, 0) ;
      }
    }


  }

  .qiu{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: url(../assets/1.jpeg);
    background-size: 100% 100%;
    animation: qiu 4s infinite alternate ;
    @keyframes qiu {
      to{
        transform: translateX(400px) rotate(1turn);
      }
    }
  }


  // 
  .bai1{
    width: 200px;
    height: 400px;
    background: url(../assets/13.png) no-repeat;
    background-size: 100%;
    animation: bai1 5s ease-in-out infinite;
    transform: rotate(-5deg);
    transform-origin: top center;
    @keyframes bai1 {
      0% { transform: rotate(-5deg); }
      50% { transform: rotate(5deg);}
      100% { transform: rotate(-5deg);}
    }
  }

  .animate-4 {
    width: fit-content;
    transform: scale(.5);
    .s-1 {
      animation: swing4-1 5s ease-in-out infinite;
      transform: rotate(-2deg);
      transform-origin: top center;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 3;
      .item-1{
        width: 117px;
        height: 296px;
        background: url(../assets/14.png) no-repeat;
        background-position: -98px -189px;
        z-index: 9;
      }
    }
    .s-2 {
      animation: swing4-2 8s ease-in-out infinite;
      transform: rotate3d(0, 1, 0, 20deg);
      transform-origin: top center;
      z-index: 2;
      margin-top: -97px;
      .item-2{
        width: 478px;
        height: 693px;
        background: url(../assets/14.png) no-repeat;
        background-position: -402px -24px;
      }
    }
    .s-3 {
      animation: swing4-3 8s ease-in-out infinite;
      transform: rotate(3deg);
      transform-origin: top center;
      display: inline-block;
      margin-top: -44px;
      z-index: 1;
      .item-3{
        width: 106px;
        height: 237px;
        background: url(../assets/14.png) no-repeat;
        background-position: -1040px -415px;
      }
    }
    @keyframes swing4-1 {
        0% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg);}
        100% { transform: rotate(-2deg);}
    }
    @keyframes swing4-2 {
        0% { transform: rotate3d(0, 1, 0, 20deg); }
        50% { transform: rotate3d(0, 1, 0, -20deg);}
        100% { transform: rotate3d(0, 1, 0, 20deg);}
    }
    @keyframes swing4-3 {
        0% { transform: rotate(3deg); }
        50% { transform: rotate(-3deg);}
        100% { transform: rotate(3deg);}
    }
  }



</style>

