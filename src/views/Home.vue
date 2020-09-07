<template>
  <div class="home">
    
        <b-card style="height: 100%; border:0px dashed lightgray;">
            <b-container fluid>
                <b-row style="background:#f8f8f8;">
                    <b-col md="4" style="background: #2a3042; text-align:left; height:1800px;" >
                        <Side style="margin-top:100px;"></Side>
                    </b-col>
                    <b-col class="" style="margin-top:2em;background: #f8f8fb">
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

                        <b-card class="text-left pt-2 pb-2 pl-3 pr-3 mt-3 shadow-sm" style="border:none;">
                            <h4><b-icon class="mr-3" icon="music-note"></b-icon>งานอดิเรก</h4>
                            <div style="border-top:1px dashed lightgray;" class="pt-2">
                                <p>1. ในเวลาว่างๆ ชอบอ่านฟิสิกส์ และดาราศาสตร์ มีความสนใจในศาสตร์เกี่ยวกับเอกภพ เวลา ธาตุกัมมันตรังสี และไฟฟ้า</p>
                                <p>2. เรียนรู้และพัฒนา IOT ในเวลาว่าง ศึกษาวงจรไฟฟ้า ซึ่งในอนาคตมีแผนที่จะพัฒนาอุปกรณ์ IOT ขึ้นมา</p>

                                <b-img class="shadow mt-2" left :src="require(`@/assets/images/hobbit/pic1.jpg`)" style="width:200px;" />

                                <b-img class="shadow mt-2 ml-3" top left :src="require(`@/assets/images/hobbit/pic2.jpg`)" style="width:356px;" />

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
import HelloWorld from '@/components/HelloWorld.vue'
import Side from './Side.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, 
    Side
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