<template>
    <b-card class="" style="height: 1000px; border:0px dashed lightgray;">
        <b-container fluid>
            <b-row>
                <b-col md="7" class="" style="background: #f8f8fb">
                    <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                        <h4><b-icon class="mr-3" icon="trophy"></b-icon>PC Order Application</h4>
                        <div style="border-top:1px dashed lightgray;" class="pt-2">
                            <p>ในช่วงสถานการณ์ COVID-19 แพร่ระบาด ส่งผลให้ไม่สามารถขายสินค้าในห้างสรรพสินค้า Workshop และพื้นที่ต่าง ๆ ได้ องค์กรจึงต้องการแอปพลิเคชันที่ใช้สำหรับบันทึกยอดขายสำหรับพนักงานขาย ซึ่งเป็นแอปพลิเคชันที่ใช้ร่วมกันทั้งพนักงานขายบ.ไทยวาโก้ และ พนักงานบัญชีของบ.ICC International ในการหาทางบันทึกยอดขายขององค์กร</p>
                            <p><span style=font-weight:bold>หน้าที่ที่ได้รับมอบหมาย</span> : Front-end Developer</p>
                            <b-row>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Front-end</span> : Bootstrap4 (css), VUE JS Framework (Javascript)</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Back-end</span> : NodeJS</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Server</span> : Centos7</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>ระยะเวลาการใช้งาน</span> : 2563 (2 เดือน)</p>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card>

                    <b-row class="mt-3">
                        <b-col md="12">
                            <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/pcorder/pic2.png`)" style="width:100%;" />
                            <div><small>ระบบสามารถจดจำข้อมูลผู้ขาย/ลูกค้าได้</small></div>

                            <b-img class="shadow my-1 mt-2 left" left :src="require(`@/assets/images/experiance/pcorder/pic3.png`)" style="width:100%;" />
                            <div><small>ระบบเชื่อมต่อ SKU สินค้ากับราคา และรวมราคาค่าจัดส่งให้</small></div>

                            <b-img class="shadow my-1 mt-2 left" left :src="require(`@/assets/images/experiance/pcorder/pic4.png`)" style="width:100%;" />
                            <div><small left>ระบบบันทึกข้อมูลธุรกรรมของลูกค้า รองรับการชำระเงินผ่าน Payment Gateway และมี Web Hook ทางด้าน Backend Server</small></div>
                            <br />


                            <!-- <b-img class="shadow my-1 left" left :src="require(`@/assets/images/experiance/pcorder/pic7.png`)" style="width:300px;" /> -->
                            <!-- <small left>แต่ละนวัตกรรมสามารถเลือกรูปแบบการโหวตได้</small> -->
                        </b-col>
                    
                        <!-- <b-col md="6">
                            <b-img class="shadow my-1" right :src="require(`@/assets/images/experiance/pcorder/pic5.png`)" style="width:300px;" />
                            <small left>เนื่องจากสถานการณ์ Covid-19 ระบบจะรองรับการประกวดนวัตกรรมผ่าน Video ได้</small>
                            
                            <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/pcorder/pic6.png`)" style="width:100%;" />
                            <small>Administator สามารถดู Report แบบ Realtime ได้</small>
                        </b-col> -->
                    </b-row>
                    <!-- <br /> -->
                    <!-- <small>รายชื่องานประกวดนวัตกรรมที่จัดขึ้น</small> -->
                </b-col>
                <b-col md="5" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/pcorder/pic5.png`)" style="width:100%;" />
                    <small>พนักงานบัญชีสามารถดูหลักฐานการชำระเงิน</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/pcorder/pic7.png`)" style="width:100%;" />
                    <small>พนักงานบัญชีสามารถตรวจสอบยอดชำระและอนุมัติชำระเงิน</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/pcorder/pic8.png`)" style="width:100%;" />
                    <small>Admin สามารถดูยอดขายระหว่างวันได้</small>

                    <!-- <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/pcorder/pic8.png`)" style="width:100%;" />
                    <small>Administator สามารถ Tracking รายชื่อกรรมการขณะโหวตได้</small> -->
                </b-col>
            </b-row>
        </b-container>
    </b-card>
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
        max-width: 990px;

        margin-top : 6em;

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