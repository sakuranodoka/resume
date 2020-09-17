<template>
    <b-card class="inside" style=" border:0px dashed lightgray;">
        <b-container fluid>
            <b-row>
                <b-col md="12" class="" style="background: #f8f8fb">
                    <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                        <h4><b-icon class="mr-3" icon="trophy"></b-icon>Optimum Area</h4>
                        <div style="border-top:1px dashed lightgray;" class="pt-2">
                            <p>Application สำหรับบันทึกพื้นที่หน้าร้าน (จำลอง) ทั้งหมดขององค์กร และบันทึก SKU ที่วางอยู่ตาม Shelf (จำลอง) เพื่อนำข้อมูลไปบันทึกและ เข้าสู่กระบวนการทำ Optimum Area เพื่อคำนวนระบบเติมเต็มสินค้า กับทาง Stock ขององค์กร</p>
                            <p><span style=font-weight:bold>หน้าที่ที่ได้รับมอบหมาย</span> : Front-end and Back-end Developer</p>
                            <b-row>
                                <b-col md="12">
                                    <p><span style=font-weight:bold>Front-end</span> : Materialize Design (css), Pure Canvas for Mobile, Pure JavaScript (js)</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Back-end</span> : PHP + Shell Script</p>
                                </b-col>
                                
                                <b-col md="6">
                                    <p><span style=font-weight:bold>ระยะเวลาการใช้งาน</span> : 2560 - ปัจจุบัน (3 ปี)</p>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card>

                </b-col>

                <b-col md="12" class="text-center my-2">
                    <h4 class="mb-0 font-weight-bold" style="background:none">ส่วนของการบันทึกข้อมูลหน้าร้าน (Phone or Tablet)</h4>
                </b-col>

                <b-col md="4" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic1.jpg`)" style="width:100%;" />
                    <small>พนักงานเลือกร้านค้าทั้งหมดภายในบริษัท</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic3.jpg`)" style="width:100%;" />
                    <small>เมนูทั้งหมดของระบบ</small>

                </b-col>

                <b-col md="4" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic2.jpg`)" style="width:100%;" />
                    <small>พนักงานสามารถดู Report ประจำร้านได้</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic5.jpg`)" style="width:100%;" />
                    <small>พนักงานสามารถสร้าง Shelf ใหม่ได้</small>

                    <!-- <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic7.jpg`)" style="width:100%;" />
                    <div class="mb-3"><small>ระบบวิเคราะห์ และแสดงอุปกรณ์หลักประจำ Shelf</small></div> -->
                </b-col>

                <b-col md="4" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic8.jpg`)" style="width:100%;" />
                    <small>Shelf ทั้งหมดประจำหน้าร้าน</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/spic6.jpg`)" style="width:100%;" />
                    <small>พนักงานสามารถระบุสินค้าประจำ Shelf ได้ ด้วยการยิง Barcode ที่เตรียมมา</small>

                </b-col>
            </b-row>
        </b-container>

        <br />

        <b-container fluid>
            <b-row>
                <!-- <b-col md="12" class="" style="background: #f8f8fb">
                    <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                        <h4><b-icon class="mr-3" icon="trophy"></b-icon>Optimum Area (Continue)</h4>
                    </b-card>
                </b-col> -->

                <b-col md="12" class="text-center my-2">
                    <h4 class="mb-0 font-weight-bold" style="background:none">รายละเอียดข้อมูลประจำร้าน (Desktop or Tablet)</h4>
                </b-col>

                <b-col md="6" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/dpic1.jpg`)" style="width:100%;" />
                    <small>ข้อมูลร้านค้าอย่างละเอียด</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/dpic3.jpg`)" style="width:100%;" />
                    <small>ระบบแสดงข้อมูล SKU ในแต่ Shelf</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/dpic5.jpg`)" style="width:100%;" />
                    <div class="mb-3"><small>สามารถตกแต่งสีประจำ Shelf ได้</small></div>

                </b-col>

                <b-col md="6" class="" style="background: #f8f8fb">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/dpic2.jpg`)" style="width:100%;" />
                    <small>SKU Report ทั้งหมดของระบบ</small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/dpic4.jpg`)" style="width:100%;" />
                    <small></small>

                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/optimumarea/dpic6.jpg`)" style="width:100%;" />
                    <div class="mb-3"><small>สามารถบันทึกพื้นที่ร้านค้าใหม่ได้</small></div>
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
    .inside {
        max-width: 1050px !important;
    }

    .card-body {
        padding : 0 !important;
    }

    .b-progress { 
        border:1px solid steelblue; 
        border-radius:0;
    }
</style>