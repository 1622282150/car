<template>
  <div>
    <van-nav-bar title="详细配置" left-arrow @click-left="onClickLeft" fixed/>
    <div style="width:100%;height:2rem;"></div>
    <!-- 基本参数 -->

    <div class="hui">
      <div class="huimiddle">
        <span class="spanone">基本参数</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>

    <!-- 内容 -->
    <div class="bai">
      <div class="content">
        <span class="content-left">上市时间</span>
     <span v-if="list.Basic1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">车型级别</span>
      <span v-if="list.Basic2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">车身型式</span>
        <span v-if="list.Basic3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">动力类型</span>
       <span v-if="list.Basic4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">发动机</span>
       <span v-if="list.Basic5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最大功力/最大扭矩</span>
        <span v-if="list.Basic6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">变速箱</span>
        <span v-if="list.Basic7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">混合工况油耗[L/100km]</span>
        <span v-if="list.Basic8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">0-100km/h加速时间</span>
       <span v-if="list.Basic9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic9}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最高车速km/h</span>
       <span v-if="list.Basic10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic10}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">环保标准</span>
        <span v-if="list.Basic11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic11}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">保修政策</span>
        <span v-if="list.Basic12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic12}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">外观颜色</span>
        <span v-if="list.Basic13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Basic13}}</span>
      </div>
    </div>
    <!-- 车身配置 -->

    <div class="hui">
      <div class="huimiddle">
        <span class="spanone">车身配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">长/宽/高</span>
        <span v-if="list.CarBody1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">轴距(mm)</span>
       <span v-if="list.CarBody2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">整备质量(km))</span>
        <span v-if="list.CarBody3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">行李箱容积(L)</span>
         <span v-if="list.CarBody4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">油箱容积(L)</span>
     <span v-if="list.CarBody5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">前轮胎规格</span>
       <span v-if="list.CarBody6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后轮胎规格</span>
         <span v-if="list.CarBody7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">备胎</span>
         <span v-if="list.CarBody8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">最小离地间隙（mm）</span>
         <span v-if="list.CarBody9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.CarBody9}}</span>
      </div>
    </div>
   

    <!-- 动力系统配置 -->
    <div class="hui">
      <div class="huimiddle">
        <span class="spanone">动力系统配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">排量</span>
          <span v-if="list.Engine1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最大功率（kw）</span>
        <span v-if="list.Engine2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最大马力（ps）</span>
        <span v-if="list.Engine3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最大功率转速[rpm]</span>
        <span v-if="list.Engine4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最大扭矩[N.m]</span>
          <span v-if="list.Engine5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">最大扭矩转速[rpm]</span>
         <span v-if="list.Engine6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">供油方式</span>
        <span v-if="list.Engine7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">燃油标号</span>
        <span v-if="list.Engine8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">发动机启停</span>
        <span v-if="list.Engine9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine9}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">变速箱类型</span>
        <span v-if="list.Engine10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine10}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">档位个数</span>
        <span v-if="list.Engine11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.Engine11}}</span>
      </div>
    </div>
  
    <!-- 底盘制动配置 -->
    <div class="hui">
      <div class="huimiddle">
        <span class="spanone">底盘制动配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">驱动方式</span>
        <span v-if="list.ChassisSteering1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">前悬架类型</span>
       <span v-if="list.ChassisSteering2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">后悬架类型</span>
       <span v-if="list.ChassisSteering3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">可调悬架</span>
       <span v-if="list.ChassisSteering4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">前轮制动器类型</span>
       <span v-if="list.ChassisSteering5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">后轮制动器类型</span>
       <span v-if="list.ChassisSteering6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">驻车制动类型</span>
       <span v-if="list.ChassisSteering7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" >
        <span class="content-left">车体结构</span>
       <span v-if="list.ChassisSteering8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">限滑差速器/差速锁</span>
       <span v-if="list.ChassisSteering9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ChassisSteering9}}</span>
      </div>
    </div>

    <!-- 安全配置 -->
    <div class="hui">
      <div class="huimiddle">
        <span class="spanone">安全配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">防抱死制动（ABS）</span>
        <span v-if="list.SafetyEquipment1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">制动力分配（EBD/CBC）</span>
        <span v-if="list.SafetyEquipment2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">牵引力控制（ASR/TCS等）</span>
        <span v-if="list.SafetyEquipment3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">车身稳定控制（ESP/DSC）</span>
        <span v-if="list.SafetyEquipment4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">主驾驶安全气囊</span>
        <span v-if="list.SafetyEquipment5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">副驾驶安全气囊</span>
        <span v-if="list.SafetyEquipment6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">前侧气囊</span>
        <span v-if="list.SafetyEquipment7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后侧气囊</span>
        <span v-if="list.SafetyEquipment8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">侧安全气帘</span>
        <span v-if="list.SafetyEquipment9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment9}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">膝部气囊</span>
        <span v-if="list.SafetyEquipment10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment10}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">安全带气囊</span>
        <span v-if="list.SafetyEquipment11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment11}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后排中央气囊</span>
        <span v-if="list.SafetyEquipment12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment12}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">胎压监测</span>
        <span v-if="list.SafetyEquipment13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment13}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">零胎压续行轮胎</span>
        <span v-if="list.SafetyEquipment14==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment14}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">后排儿童座椅接口</span>
        <span v-if="list.SafetyEquipment15==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SafetyEquipment15}}</span>
      </div>
    </div>
   
    <!-- 车轮制动 6-->
<div class="hui">
      <div class="huimiddle">
        <span class="spanone">驾驶辅助</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">定速巡航</span>
        <span v-if="list.DrivingAssistance1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">车道保持</span>
        <span v-if="list.DrivingAssistance2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">并线辅助</span>
        <span v-if="list.DrivingAssistance3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">碰撞报警/主动刹车</span>
        <span v-if="list.DrivingAssistance4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">疲劳提醒</span>
        <span v-if="list.DrivingAssistance5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">自动泊车</span>
        <span v-if="list.DrivingAssistance6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">遥控泊车</span>
        <span v-if="list.DrivingAssistance7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">自动驾驶辅助</span>
        <span v-if="list.DrivingAssistance8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">自动驻车</span>
        <span v-if="list.DrivingAssistance9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance9}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">上坡辅助</span>
        <span v-if="list.DrivingAssistance10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance10}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">陡坡缓降</span>
        <span v-if="list.DrivingAssistance11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance11}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">可变齿比转向</span>
        <span v-if="list.DrivingAssistance12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance12}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">前倒车雷达</span>
        <span v-if="list.DrivingAssistance13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance13}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后倒车雷达</span>
        <span v-if="list.DrivingAssistance14==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance14}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">倒车影像</span>
        <span v-if="list.DrivingAssistance15==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance15}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">驾驶模式选择</span>
        <span v-if="list.DrivingAssistance16==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.DrivingAssistance16}}</span>
      </div>
    </div>
  

    



<!-- 外部配置-->
 <div class="hui">
      <div class="huimiddle">
        <span class="spanone">外部配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
</div>
    <div class="bai">
      <div class="content">
        <span class="content-left">前大灯</span>
       <span v-if="list.ExternalConfiguration1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration1}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">LED日间行车灯</span>
       <span v-if="list.ExternalConfiguration2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration2}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left"> 自动大灯</span>
       <span v-if="list.ExternalConfiguration3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration3}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">前雾灯</span>
       <span v-if="list.ExternalConfiguration4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration4}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">大灯功能</span>
       <span v-if="list.ExternalConfiguration5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration5}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">天窗类型</span>
       <span v-if="list.ExternalConfiguration6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration6}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left"> 前电动车窗</span>
       <span v-if="list.ExternalConfiguration7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration7}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">后电动车窗</span>
       <span v-if="list.ExternalConfiguration8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration8}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">外后视镜电动调节</span>
       <span v-if="list.ExternalConfiguration9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration9}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">内后视镜自动防眩目</span>
       <span v-if="list.ExternalConfiguration10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration10}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">流媒体后视镜</span>
       <span v-if="list.ExternalConfiguration11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration11}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">外后视镜自动防眩目</span>
       <span v-if="list.ExternalConfiguration12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration12}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">隐私玻璃</span>
       <span v-if="list.ExternalConfiguration13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration13}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">后排侧遮阳帘</span>
       <span v-if="list.ExternalConfiguration14==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration14}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">后遮阳帘</span>
       <span v-if="list.ExternalConfiguration15==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration15}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">前雨刷器</span>
       <span v-if="list.ExternalConfiguration16==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration16}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">后雨刷器</span>
       <span v-if="list.ExternalConfiguration17==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration17}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">电吸门</span>
       <span v-if="list.ExternalConfiguration18==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration18}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left"> 电动侧滑门</span>
       <span v-if="list.ExternalConfiguration19==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration19}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">电动行李厢</span>
       <span v-if="list.ExternalConfiguration20==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration20}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">车顶行李架</span>
       <span v-if="list.ExternalConfiguration21==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration21}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">中控锁</span>
       <span v-if="list.ExternalConfiguration22==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration22}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">智能钥匙</span>
       <span v-if="list.ExternalConfiguration23==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration23}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">远程遥控功能</span>
       <span v-if="list.ExternalConfiguration24==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration24}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content">
        <span class="content-left">尾翼/扰流板</span>
       <span v-if="list.ExternalConfiguration25==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration25}}</span>
      </div>
    </div>
     <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">运动外观套件</span>
       <span v-if="list.ExternalConfiguration26==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.ExternalConfiguration26}}</span>
      </div>
    </div>

<!-- 内部配置 10-->
<div class="hui">
      <div class="huimiddle">
        <span class="spanone">内部配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
<div class="bai">
      <div class="content">
        <span class="content-left">内饰材质</span>
           <span v-if="list.InternalConfiguration1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration1}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">车内氛围灯</span>
           <span v-if="list.InternalConfiguration2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration2}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">遮阳板化妆镜</span>
           <span v-if="list.InternalConfiguration3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration3}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left"> 方向盘材质</span>
           <span v-if="list.InternalConfiguration4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration4}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">多功能方向盘</span>
           <span v-if="list.InternalConfiguration5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration5}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left"> 方向盘调节</span>
           <span v-if="list.InternalConfiguration6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration6}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">方向盘加热</span>
           <span v-if="list.InternalConfiguration7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration7}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">方向盘换挡</span>
           <span v-if="list.InternalConfiguration8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration8}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">前排空调</span>
           <span v-if="list.InternalConfiguration9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration9}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">后排空调</span>
           <span v-if="list.InternalConfiguration10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration10}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">香氛系统</span>
           <span v-if="list.InternalConfiguration11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration11}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">空气净化</span>
           <span v-if="list.InternalConfiguration12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration12}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">车载冰箱</span>
           <span v-if="list.InternalConfiguration13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration13}}</span>
      </div>
  </div>
  <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">主动降噪</span>
           <span v-if="list.InternalConfiguration14==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.InternalConfiguration14}}</span>
      </div>
  </div>
    
    

<!-- 座椅配置 -->
<div class="hui">
      <div class="huimiddle">
        <span class="spanone">座椅配置</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">座椅材质</span>
         <span v-if="list.SeatConfiguration1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">运动风格座椅</span>
         <span v-if="list.SeatConfiguration2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">主座椅电动调节</span>
         <span v-if="list.SeatConfiguration3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">副座椅电动调节</span>
         <span v-if="list.SeatConfiguration4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">主座椅调节方式</span>
         <span v-if="list.SeatConfiguration5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">副座椅调节方式</span>
         <span v-if="list.SeatConfiguration6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">第二排座椅电动调节</span>
         <span v-if="list.SeatConfiguration7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">第二排座椅调节方式</span>
         <span v-if="list.SeatConfiguration8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">前排座椅功能</span>
         <span v-if="list.SeatConfiguration9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration9}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后排座椅功能</span>
         <span v-if="list.SeatConfiguration10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration10}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">前排中央扶手</span>
         <span v-if="list.SeatConfiguration11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration11}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后排中央扶手</span>
         <span v-if="list.SeatConfiguration12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration12}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">第三排座椅</span>
         <span v-if="list.SeatConfiguration13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration13}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">座椅放倒方式</span>
         <span v-if="list.SeatConfiguration14==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration14}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后排杯架</span>
         <span v-if="list.SeatConfiguration15==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration15}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">后排折叠桌板</span>
         <span v-if="list.SeatConfiguration16==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.SeatConfiguration16}}</span>
      </div>
    </div>
     
<!-- 信息娱乐配置 -->
<div class="hui">
      <div class="huimiddle">
        <span class="spanone">信息娱乐</span>
        <span class="spantwo">
          <div class="yuan"></div>
          <span style="margin-left:.2rem;margin-right:.5rem;">标配</span>
          <div class="wu"></div>
          <span>无</span>
        </span>
      </div>
    </div>
  <div class="bai">
      <div class="content">
        <span class="content-left">中控彩色液晶屏</span>
         <span v-if="list.MediaConfiguration1==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration1}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">液晶屏尺寸</span>
         <span v-if="list.MediaConfiguration2==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration2}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">全液晶仪表盘</span>
         <span v-if="list.MediaConfiguration3==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration3}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">行车电脑显示屏</span>
         <span v-if="list.MediaConfiguration4==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration4}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">HUD平视显示</span>
         <span v-if="list.MediaConfiguration5==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration5}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">GPS导航</span>
         <span v-if="list.MediaConfiguration6==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration6}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">智能互联定位</span>
         <span v-if="list.MediaConfiguration7==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration7}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">语音控制</span>
         <span v-if="list.MediaConfiguration8==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration8}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">手机互联</span>
         <span v-if="list.MediaConfiguration9==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration9}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">手机无线充电</span>
         <span v-if="list.MediaConfiguration10==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration10}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">手势控制系统</span>
         <span v-if="list.MediaConfiguration11==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration11}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">CD/DVD</span>
         <span v-if="list.MediaConfiguration12==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration12}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">蓝牙/WIFI连接</span>
         <span v-if="list.MediaConfiguration13==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration13}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">外接接口</span>
         <span v-if="list.MediaConfiguration14==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration14}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">车载行车记录仪</span>
         <span v-if="list.MediaConfiguration15==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration15}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">车载电视</span>
         <span v-if="list.MediaConfiguration16==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration16}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">音响品牌</span>
         <span v-if="list.MediaConfiguration17==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration17}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">扬声器数量[个]</span>
         <span v-if="list.MediaConfiguration18==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration18}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content">
        <span class="content-left">后排液晶屏/娱乐系统</span>
         <span v-if="list.MediaConfiguration19==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration19}}</span>
      </div>
    </div>
    <div class="bai">
      <div class="content" style="border-bottom:none">
        <span class="content-left">车载220V电源</span>
         <span v-if="list.MediaConfiguration20==''"  class="content-right"><span style="position:relative;top:-0.3rem">__</span></span>
        <span v-else class="content-right">{{list.MediaConfiguration20}}</span>
      </div>
    </div>
    
  </div>
</template>
<script>
import request  from '@/utils/request'
export default {
  data() {
    return {
        id:0,
        list:{}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back("-1");
    },
    qingqiu(){
      request.post(this.$api+"/Wechat/GetConfigurationInfolist",{
        id:this.id
      }).then(res=>{
        this.list=res.data.Data.list[0]
        console.log(this.list)
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    console.log(this.$route.query.id)
    this.id=this.$route.query.id
    this.qingqiu()
  }
};
</script>
<style scoped>
.van-nav-bar__left ::before {
  color: black;
}
.hui {
  width: 100%;
  height: 2rem;
  background: #f5f5f5;
  /* background-color: red; */
}
.huimiddle {
  font-size: 14px;
  width: 95%;
  height: 2rem;
  margin: 0 auto;
  display: flex;
}
.spanone {
  display: inline-block;
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  text-align: left;
  /* background-color: red; */
}
.spantwo {
  line-height: 2rem;
  text-align: right;
  display: inline-block;
  width: 50%;
  height: 2rem;
  /* background: blue; */
}
.yuan {
  display: inline-block;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: black;
}
.wu {
  display: inline-block;
  width: 0.5rem;
  height: 1.6px;
  background: black;
  position: relative;
  top: -3px;
}
.bai {
  width: 100%;
  height: 1.7rem;
  background: #ffffff;
}
.content {
  box-sizing: border-box;
  /* z-index: 100000; */
  border-bottom: 1px solid silver;
  width: 95%;
  height: 1.5 rem;
  margin: 0 auto;
  display: flex;
}
.content-left {
  text-align: left;
  display: inline-block;
  height: 1.5rem;
  width: 50%;
  line-height: 1.5rem;
  font-size: 13px;
  color: #666666;
}
.content-right {
  text-align: right;
  display: inline-block;
  height: 1.5rem;
  width: 50%;
  line-height: 1.5rem;
  font-size: 13px;
  color: black;
  overflow: hidden;
}
</style>