<template>
    <div class="sidebar text-center">
        <b-img class="pic shadow" v-bind="mainProps" :src="require(`@/assets/images/pic2.png`)" center rounded="circle" alt="Circle image"></b-img>

        <div>
            <b-row>
                <b-col sm="12">
                    <h3 class="text-white"><span style="color:lightgray; font-size:larger;">อ</span>ธิคม <span class="ml-1" style="color:lightgray; font-size:larger;">ส</span>มบัติเจริญ</h3> 
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12">
                    <h5>Atikom Sombutjalearn</h5>
                </b-col>
            </b-row>
        </div>

        <div style="border-top:1px solid #888" class="mt-4 mb-2 "></div>

        <div class="text-left ml-3" style="font-weight:bold; font-size: smaller">
            <dl class="row">
                <dd class="col-sm-12 text-center" style="font-weight:normal; font-size:larger;">
                    <div class="text-center">Personal Info</div>
                </dd>
                <dt class="col-sm-4 justify-content-center justify-content-md-start d-flex">
                    <span>Email</span>
                </dt>
                <dd class="col-sm-8" style="text-align:center !important;">
                    <span class="text-white detailed">atikom.sn@gmail.com</span>
                </dd>

                <dt class="col-sm-4 justify-content-center justify-content-md-start d-flex">Experiance</dt>
                <dd class="col-sm-8" style="text-align:center !important;">
                    <span class="text-white detailed">S&P Syndicate Co., Ltd.</span><br />
                    <span class="text-white detailed" style="font-size:15px;color:#aaa !important">4 เดือน</span>
                        <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                        <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                        <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                    <span class="text-white detailed">Freelancer</span><br />
                    <span class="text-white detailed" style="font-size:15px;color:#aaa !important">1 ปี</span>    
                        <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                        <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                        <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                    <span class="text-white detailed">Thai Wacoal Co., Ltd.</span><br />
                    <span class="text-white detailed" style="font-size:15px;color:#aaa !important">4 ปี</span>
                </dd>

                <dt class="col-sm-6 justify-content-center justify-content-md-start d-flex">
                    <span>Tel</span>
                </dt>
                <dd class="col-sm-6" style="text-align:center !important;">
                    <span class="text-white detailed">061-8786969</span>
                </dd>

                <dt class="col-sm-6 justify-content-center justify-content-md-start d-flex">
                    <span>Date of Birth</span>
                </dt>
                <dd class="col-sm-6" style="text-align:center !important;">
                    <span class="text-white detailed">03/05/1994</span>
                </dd>
            </dl>
        </div>

        <div style="border-top:1px solid #888" class="mt-4 mb-2 "></div>

        <dl class="row">
            <dd class="col-sm-12 text-center">
                <div class="text-center">Interests</div>
            </dd>
            <dd class="col-sm-12" style="text-align:center !important; font-size: small">
                <span class="text-white detailed">Native Cross Platform</span> <br />
                <span class="text-white detailed">• Flutter (Dart)</span> <br />
                <span class="text-white detailed">• React Native</span>
                    <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                    <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                <span class="text-white detailed">Python</span>
                    <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                    <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                <span class="text-white detailed">Internet of Things</span>
                    <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                    <div style="height:15px;width:2px; background:white; margin:0 auto;"></div>
                <span class="text-white detailed">SVG Graphics</span> <br /> <br />
            </dd>
        </dl>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                mainProps: {
                    // fluidGrow: true,
             
                    width: 255, 
                    height: 255, 
                    class: 'my-3' 
                }, 
            }
        }
    }
</script>

<style>
    .sidebar {
        color : #bbb;
        font-size:x-large !important;
    }
    .detailed {
        text-align: left;
        font-weight: normal;
        font-size: large;
    }
    .pic { 
        border: 7px solid #fff;
    }
</style>