<template>
  <div class="home">
    
        <b-card  class="" style="height: 1000px; border:0px dashed lightgray;">
            <b-container fluid>
                <b-row>
        
                    <b-col md="12" class="" style="background: #f8f8fb">
                        <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                            <h4><b-icon class="mr-3" icon="trophy"></b-icon>Image Management Information (IMI)</h4>
                            <div style="border-top:1px dashed lightgray;" class="pt-2">
                                <p><span class="ml-4"></span>ซอฟต์แวร์สำหรับจัดคิวถ่ายภาพสินค้าภายในของแต่ละแผนก ทั้งหมดภายในบริษัท เพื่อลดปัญหาเรื่องการ จัดหา-นำส่ง-คืน สินค้าทดลองสำหรับถ่ายภาพ</p>
                                <p><span class="ml-4"></span>ระบบจะเชื่อมต่อกับระบบจัดเก็บคลังรูปภาพภายในองค์กร เพื่อให้พนักงานภายในองค์กรสามารถนำภาพสินค้าไปใช้งานต่อได้</p>
                                <p><span style=font-weight:bold>หน้าที่ที่ได้รับมอบหมาย</span> : Front-end Developer</p>
                                <b-row>
                                    <b-col md="6">
                                        <p><span style=font-weight:bold>Front-end</span> : Bootstrap4 (css), VUE Js Framework (Javascript)</p>
                                    </b-col>
                                    <b-col md="6">
                                        <p><span style=font-weight:bold>Back-end</span> : NodeJS</p>
                                    </b-col>
                                    <b-col md="6">
                                        <p><span style=font-weight:bold>Server</span> : Centos7</p>
                                    </b-col>
                                    <b-col md="6">
                                        <p><span style=font-weight:bold>ระยะเวลาการใช้งาน</span> : 2562 - ปัจจุบัน (1 ปี)</p>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-card>

                        <b-row class="mt-3">
                            <b-col md="6">
                                <b-img class="shadow my-1 left" left :src="require(`@/assets/images/experiance/imi/pic1.png`)" style="width:100%;" />
                                <small left>Administator สามารถ Tracking สินค้าได้จากหน้า Dashboard ได้</small>

                                <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/imi/pic3.png`)" style="width:100%;" />
                                <small>ทีมงานช่างภาพ สามารถติดตามสถานะสินค้าที่จะนำมาถ่ายภาพได้</small>
                            </b-col>
                        
                            <b-col md="6">
                                <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/imi/pic4.png`)" style="width:100%;" />
                                <small style="width:100%;">ผู้ใช้ Supervisor หรือทีมธุรกิจ สามารถสั่งถ่ายรูปภาพสินค้าได้</small><br />

                                <b-img class="shadow my-1" right :src="require(`@/assets/images/experiance/imi/pic22.png`)" style="width:100%;" />
                                <small>ระบบแจ้งเตือนทีมงานธุรกิจประจำสินค้าให้เตรียมสินค้าถ่ายภาพ</small>
                                <!-- <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/imi/pic6.png`)" style="width:100%;" /> -->
                                <!-- <small>Administator สามารถดู Report แบบ Realtime ได้</small> -->
                            </b-col>
                        </b-row>
                        <!-- <br /> -->
                        <!-- <small>รายชื่องานประกวดนวัตกรรมที่จัดขึ้น</small> -->
                    </b-col>
                    <!-- <b-col md="4" class="" style="background: #f8f8fb">
                        <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/imi/pic1.png`)" style="width:100%;" />
                        <small>รายชื่องานประกวดนวัตกรรมที่จัดขึ้น</small>

                        <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/imi/pic2.png`)" style="width:100%;" />
                        <small>Administator สามารถดู Report แบบ Realtime ได้</small>

                        <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/imi/pic3.png`)" style="width:100%;" />
                        <small>Administator สามารถ Config ระบบภายในได้ทั้งหมด</small>
                    </b-col> -->
                </b-row>
            </b-container>
        </b-card>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Side from './Side.vue'

export default {
  name: 'Experiance',
  components: {
    // Side
  }
}
</script>

<style scoped>
    .home {
        max-width: 1050px;
        margin: 0 auto;

        /* font-family: "EkkamaiNewRegular" !important; */
    }

    .card-body {
        padding : 0 !important;
    }

    .b-progress { 
        border:1px solid steelblue; 
        border-radius:0;
    }
</style>