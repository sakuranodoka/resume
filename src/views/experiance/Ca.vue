<template>
    <b-card class="" style="border:0px dashed lightgray;">
        <b-container fluid>
            <b-row>
                <b-col   md="8" class="" style="background: #f8f8fb">
                    <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                        <h4><b-icon class="mr-3" icon="trophy"></b-icon>ICC Innovation Application</h4>
                        <div style="border-top:1px dashed lightgray;" class="pt-2">
                            <p>แอปพลิเคชันที่ใช้จัดประกวดนวัตกรรมภายในปีบริษัท ICC International ที่จะหานวัตกรรมดีเด่นที่สุดจากแต่ละบริษัทในเครือสหพัฒน์ ด้วยการโหวตจากกรรมการภายในเครือสหพัฒน์ ระบบจะบันทึกข้อมูลของแต่ละปี โดยใน 1 ปีจะมีการจัดประกวดนวัตกรรมหลายครั้งด้วยกัน และ Export ข้อมูล เพื่อนำไปใช้ประโยชน์ต่อไป</p>
                            <p><span style=font-weight:bold>หน้าที่ที่ได้รับมอบหมาย</span> : Front-end & Back-end Developer</p>
                            <b-row>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Front-end</span> : Bootstrap (css), Pure JavaScript</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Back-end</span> : Laravel, MySQL</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Server</span> : Centos7</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>ระยะเวลาการใช้งาน</span> : 2560 - ปัจจุบัน (3 ปี)</p>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card>

                    <b-row class="mt-3">
                        <b-col md="6">
                            <b-img class="shadow my-1 left" left :src="require(`@/assets/images/experiance/ca/pic4.png`)" style="width:300px;" />
                            <small left>กรรมการเลือกผลงานที่จะโหวตจาก Device ของตัวเอง</small>

                            <b-img class="shadow my-1 left" left :src="require(`@/assets/images/experiance/ca/pic7.png`)" style="width:300px;" />
                            <small left>แต่ละนวัตกรรมสามารถเลือกรูปแบบการโหวตได้</small>
                        </b-col>
                    
                        <b-col md="6">
                            <b-img class="shadow my-1" right :src="require(`@/assets/images/experiance/ca/pic5.png`)" style="width:300px;" />
                            <small left>เนื่องจากสถานการณ์ Covid-19 ระบบจะรองรับการประกวดนวัตกรรมผ่าน Video ได้</small>
                            
                            <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/ca/pic6.png`)" style="width:100%;" />
                            <small>Administator สามารถดู Report แบบ Realtime ได้</small>

                            <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/ca/pic9.png`)" style="width:100%;" />
                            <!-- <small>Administator สามารถ Tracking รายชื่อกรรมการขณะโหวตได้</small> -->
                        </b-col>
                    </b-row>
                    <!-- <br /> -->
                    <!-- <small>รายชื่องานประกวดนวัตกรรมที่จัดขึ้น</small> -->
                </b-col>
                <b-col md="4" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/ca/pic1.png`)" style="width:100%;" />
                    <small>รายชื่องานประกวดนวัตกรรมที่จัดขึ้น</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/ca/pic2.png`)" style="width:100%;" />
                    <small>Administator สามารถดู Report แบบ Realtime ได้</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/ca/pic3.png`)" style="width:100%;" />
                    <small>Administator สามารถ Config ระบบภายในได้ทั้งหมด</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/ca/pic8.png`)" style="width:100%;" />
                    <small>Administator สามารถ Tracking รายชื่อกรรมการขณะโหวตได้</small>
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