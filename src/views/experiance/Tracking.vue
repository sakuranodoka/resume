<template>
    <b-card class="" style="height: 1000px; border:0px dashed lightgray;">
        <b-container fluid style="background: #f8f8fb" class="mb-2">
            <b-row >
                <b-col md="12" class="" >
                    <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                        <h4><b-icon class="mr-3" icon="trophy"></b-icon>Tracking Application</h4>
                        <div style="border-top:1px dashed lightgray;" class="pt-2">
                            <p>แอปพลิเคชันสำหรับ Tracking สินค้าของหน้าร้าน โดยใช้เปรียบเทียบระหว่างจำนวนสินค้าที่ขนส่งนำไปถึงหน้าร้าน กับจำนวนสินค้าที่เครื่อง SORTER Generate ขึ้นมา โดยใช้ Barcode ขนประจำกล่องบรรจุ และหมายเลขนำส่งเป็นดัชนีชี้วัด</p>
                            <p><span style=font-weight:bold>หน้าที่ที่ได้รับมอบหมาย</span> : Front-end & Back-end Developer</p>
                            <b-row>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Front-end</span> : Android Studio</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Back-end</span> : PHP, MySQL</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>Server</span> : Centos7</p>
                                </b-col>
                                <b-col md="6">
                                    <p><span style=font-weight:bold>ระยะเวลาการใช้งาน</span> : ทดลองใช้ในปี 2563</p>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card>

                </b-col>
                <b-col md="4" class="">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/tracking/pic1.jpg`)" style="width:100%;" />
                    <!-- <small>รายชื่องานประกวดนวัตกรรมที่จัดขึ้น</small> -->

                </b-col>
                <b-col md="4" class="">
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/tracking/pic3.jpg`)" style="width:100%;" />
                    <!-- <small>Administator สามารถดู Report แบบ Realtime ได้</small> -->
                </b-col>
                <b-col md="4" class="">
                    <!-- <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/tracking/pic2.jpg`)" style="width:100%;" /> -->
                    <b-img class="shadow mt-3" :src="require(`@/assets/images/experiance/tracking/pic6.jpg`)"  style="width:100%;" />
                </b-col>

                <b-col md="8" class="mt-2">
                    <b-img class="shadow my-1 left" :src="require(`@/assets/images/experiance/tracking/pic4.jpg`)"  style="width:100%;" />

                    

                </b-col>

                <b-col md="4" class="mt-2">
                    <b-img class="shadow my-1 left" :src="require(`@/assets/images/experiance/tracking/pic5.jpg`)"  style="width:100%;" />
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Experiance',
  components: {
  }
}
</script>

<style scoped>
    .home {
        max-width: 600px;

        margin-top : 6em;
    }

    .card-body {
        padding : 0 !important;
    }

    .b-progress { 
        border:1px solid steelblue; 
        border-radius:0;
    }
</style>