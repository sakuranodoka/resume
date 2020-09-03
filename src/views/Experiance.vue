<template>
  <div class="home">
    
        <b-card  class="" style="height: 1000px; border:0px dashed lightgray;">
            <b-container fluid>
                <b-row>
                    <b-col md="4" style="background: #2a3042; text-align:left; height:900px;">
                        <Side></Side>
                    </b-col>
                    <b-col class="" style="background: #f8f8fb">
                        <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                            <h4><b-icon class="mr-3" icon="person-fill"></b-icon>ข้อมูลเบื้องต้น</h4>
                            <div style="border-top:1px dashed lightgray;" class="pt-2">
                                <p>Developer ที่ชื่นชอบการพัฒนาซอฟต์แวร์ สนใจเรียนรู้ อยากพัฒนาสิ่งใหม่ๆ ชอบการเจรจากับลูกค้า สามารถพัฒนา Software ได้ทั้ง Web Application และ Native Application (Android Studio)</p><p> ในเวลาว่างจะศึกษาวงจรไฟฟ้า และอุปกรณ์ IOT ไม่ว่าจะเป็นการเขียนโปรแกรมลงบอร์ด Arduino UNO R3 หรือ NodeMCU เนื่องจากในอนาคตมีความสนใจที่จะทำอุปกรณ์ IOT ขึ้นมาเป็นของตัวเอง</p>
                            </div>
                        </b-card>

                        <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                            <h4><b-icon class="mr-3" icon="layers-fill"></b-icon>การศึกษา</h4>
                            <div style="border-top:1px dashed lightgray;" class="pt-2">
                                <p>ปริญญาตรี วิศวกรรมซอฟต์แวร์ มหาวิทยาลัยบูรพา บางแสน</p>
                            </div>
                        </b-card>

                        <b-card class="text-left pt-2 pb-4 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                            <h4><b-icon class="mr-3" icon="laptop"></b-icon>ทักษะ</h4>
                            <div style="border-top:1px dashed lightgray;" class="pt-2">
                                <p style="font-weight:bold;text-decoration:underline;" class="mb-0">Front-end Developer</p>
                                <b-row>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="cursor-fill" class="mr-2" scale="1" variant="info"></b-icon>JavaScript (9/10)</p>
                                        <b-progress variant="info" height="11px" :value="9" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="cursor-fill" class="mr-2" scale="1" variant="info"></b-icon>VueJS Framework (7/10)</p>
                                        <b-progress variant="info" height="11px" :value="7" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="cursor-fill" class="mr-2" scale="1" variant="info"></b-icon>React & ReactNative Cross Platform (5/10)</p>
                                        <b-progress variant="info" height="11px" :value="5" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    
                                </b-row>

                                <br />

                                <p style="font-weight:bold;text-decoration:underline;" class="mb-0">Back-end Developer</p>
                                <b-row>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="server" class="mr-2" scale="1" variant="success"></b-icon>PHP7 + Laravel Framework (9/10)</p>
                                        <b-progress variant="success" height="11px" :value="9" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="server" class="mr-2" scale="1" variant="success"></b-icon>NodeJS (8/10)</p>
                                        <b-progress variant="success" height="11px" :value="8" :max="10" class="b-progress"></b-progress>
                                    </b-col>

                                    <b-col sm="12" class="mt-1">
                                        <hr />
                                    </b-col>

                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="server" class="mr-2" scale="1" variant="success"></b-icon>Centos7 Server (7/10)</p>
                                        <b-progress variant="success" height="11px" :value="7" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="server" class="mr-2" scale="1" variant="success"></b-icon>Ubuntu Server (6/10)</p>
                                        <b-progress variant="success" height="11px" :value="6" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="server" class="mr-2" scale="1" variant="success"></b-icon>Web Application Security (7/10)</p>
                                        <b-progress variant="success" height="11px" :value="7" :max="10" class="b-progress"></b-progress>
                                    </b-col>

                                    
                                </b-row>

                                <br />

                                <p style="font-weight:bold;text-decoration:underline;" class="mb-0">Any Skill</p>
                                <b-row>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="cursor-fill" class="mr-2" scale="1" variant="info"></b-icon>Android Studio with Kotlin (8/10)</p>
                                        <b-progress variant="info" height="11px" :value="8" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    <b-col sm="12" md="6" class="mt-1">
                                        <p class="mb-1"><b-icon icon="cursor-fill" class="mr-2" scale="1" variant="info"></b-icon>Git (7/10)</p>
                                        <b-progress variant="info" height="11px" :value="7" :max="10" class="b-progress"></b-progress>
                                    </b-col>
                                    
                                </b-row>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Side from './Side.vue'

export default {
  name: 'Experiance',
  components: {
    Side
  }
}
</script>

<style scoped>
    .home {
        max-width: 1250px;
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