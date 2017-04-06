/**
 * Created by liuti on 2017/3/22.
 */
function init() {
    var count=0,step=4, sita=30*Math.PI/180;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    var StartPoint=40;
    // renderer.setClearColorHex();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, 887);
    renderer.shadowMapEnabled=true;

    var stats=initStats();
    // var axes=new THREE.AxisHelper(60);
    // scene.add(axes);


    // var bacGeo=new THREE.PlaneGeometry(window.innerWidth,window.innerHeight);
    // var texture=new THREE.TextureLoader().load("images/alex.png");
    // var bacMater=new THREE.MeshLambertMaterial({map:texture,side:THREE.DoubleSide});
    // var bac=new THREE.Mesh(bacGeo,bacMater);
    // bac.receiveShadow=true;
    // bac.position.set(-45,0,0);
    // scene.add(bac);
    var planeGeometry = new THREE.PlaneGeometry(100, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow=true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);


    //add spotlight
    var spotLight=new THREE.SpotLight(0xffffff);
    spotLight.position.set(-60,60,-10);
    spotLight.castShadow=true;
    scene.add(spotLight);


    //开始画机器人
    // create a sphere
    var sphereGeometry = new THREE.SphereGeometry(0.5, 10, 10);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    var RightFoot= new THREE.Mesh(sphereGeometry, sphereMaterial);
        RightFoot.receiveShadow=true;
    // position the sphere
    RightFoot.position.x = StartPoint;
    RightFoot.position.y = 0.5;
    RightFoot.position.z = 0;

    // add the sphere to the scene
    // scene.add(RightFoot);

    var LeftFoot=new THREE.Mesh(sphereGeometry, sphereMaterial);
    LeftFoot.receiveShadow=true;
    // position the sphere
    LeftFoot.position.x = StartPoint;
    LeftFoot.position.y = 0.5;
    LeftFoot.position.z = 2;
    // scene.add(LeftFoot);

    var cubeGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    var SmallLegL=new THREE.Mesh(cubeGeometry,cubeMaterial);
     SmallLegL.receiveShadow=true;
    SmallLegL.position.x=StartPoint;
    SmallLegL.position.y=1.5;
    SmallLegL.position.z=2;
    scene.add(SmallLegL);

    var SmallLegR=new THREE.Mesh(cubeGeometry,cubeMaterial);
    SmallLegR.receiveShadow=true;
    SmallLegR.position.x=StartPoint;
    SmallLegR.position.y=1.5;
    SmallLegR.position.z=0;
    scene.add(SmallLegR);

    //膝盖
    var KneeL=new THREE.Mesh(sphereGeometry,sphereMaterial);
    KneeL.receiveShadow=true;
    KneeL.position.x=StartPoint;
    KneeL.position.y=3;
    KneeL.position.z=2;
    scene.add(KneeL);

    var KneeR=new THREE.Mesh(sphereGeometry,sphereMaterial);
    KneeR.receiveShadow=true;
    KneeR.position.x=StartPoint;
    KneeR.position.y=3.25;
    KneeR.position.z=0;
    scene.add(KneeR);

    //大腿
    var ThighL=new THREE.Mesh(cubeGeometry,cubeMaterial);
    ThighL.receiveShadow=true;
    ThighL.position.x=StartPoint;
    ThighL.position.y=4.5;
    ThighL.position.z=2;
    scene.add(ThighL);

    var ThighR=new THREE.Mesh(cubeGeometry,cubeMaterial);
    ThighR.receiveShadow=true;
    ThighR.position.x=StartPoint;
    ThighR.position.y=4.5;
    ThighR.position.z=0;
    scene.add(ThighR);

    //腰肚子
    var WaistGeometry = new THREE.BoxGeometry(1.5,4.5,3);
    var WaistMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    var Waist=new THREE.Mesh(WaistGeometry,WaistMaterial);
    Waist.receiveShadow=true;
    Waist.position.x=StartPoint;
    Waist.position.y=7.5;
    Waist.position.z=1;
    scene.add(Waist);

    //手臂
    var Arm1L=new THREE.Mesh(cubeGeometry,cubeMaterial);
    Arm1L.receiveShadow=true;
    Arm1L.position.x=StartPoint;
    Arm1L.position.y=8.5;
    Arm1L.position.z=-0.8;
    scene.add(Arm1L);

    var Arm1R=new THREE.Mesh(cubeGeometry,cubeMaterial);
    Arm1R.receiveShadow=true;
    Arm1R.position.x=StartPoint;
    Arm1R.position.y=8.5;
    Arm1R.position.z=3.0;
    scene.add(Arm1R);

    var ElbowL=new THREE.Mesh(sphereGeometry,sphereMaterial);
    ElbowL.receiveShadow=true;
    ElbowL.position.x=StartPoint;
    ElbowL.position.y=7;
    ElbowL.position.z=-0.8;
    scene.add(ElbowL);

    var ElbowR=new THREE.Mesh(sphereGeometry,sphereMaterial);
    ElbowR.receiveShadow=true;
    ElbowR.position.x=StartPoint;
    ElbowR.position.y=7;
    ElbowR.position.z=3.0;
    scene.add(ElbowR);

    var Arm2L=new THREE.Mesh(cubeGeometry,cubeMaterial);
    Arm2L.receiveShadow=true;
    Arm2L.position.x=StartPoint;
    Arm2L.position.y=6;
    Arm2L.position.z=-0.8;
    scene.add(Arm2L);

    var Arm2R=new THREE.Mesh(cubeGeometry,cubeMaterial);
    Arm2R.receiveShadow=true;
    Arm2R.position.x=StartPoint;
    Arm2R.position.y=6;
    Arm2R.position.z=3.0;
    scene.add(Arm2R);

    var HandL=new THREE.Mesh(sphereGeometry,sphereMaterial);
    HandL.receiveShadow=true;
    HandL.position.x=StartPoint;
    HandL.position.y=4.5;
    HandL.position.z=-0.8;
    scene.add(HandL);

    var HandR=new THREE.Mesh(sphereGeometry,sphereMaterial);
    HandR.receiveShadow=true;
    HandR.position.x=StartPoint;
    HandR.position.y=4.5;
    HandR.position.z=3.0;
    scene.add(HandR);

    var neck=new THREE.Mesh(sphereGeometry,sphereMaterial);
    neck.receiveShadow=true;
    neck.position.x=StartPoint;
    neck.position.y=10;
    neck.position.z=1.1;
    scene.add(neck);

    var HeadGeometry=new THREE.BoxGeometry(1.5,1.5,1.5);
    var HeadMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    var Head=new THREE.Mesh(HeadGeometry,HeadMaterial);
    Head.receiveShadow=true;
    Head.position.x=StartPoint;
    Head.position.y=11;
    Head.position.z=1.1;
    scene.add(Head);


    step=2*(2+0.5)*Math.sin(30*Math.PI/180);
    function HeadBodyGo() {
        var Head_tween=new TWEEN.Tween(Head.position);
        Head_tween.to({x:StartPoint-step},1000);
        var neck_tween=new TWEEN.Tween(neck.position);
        neck_tween.to({x:StartPoint-step},1000);
        var Body_tween=new TWEEN.Tween(Waist.position);
        Body_tween.to({x:StartPoint-step},1000);
        Head_tween.start();
        neck_tween.start();
        Body_tween.start();

    }
    //左脚右手
    var Arm1R_tween_po=new TWEEN.Tween(Arm1R.position);
    var Arm1R_tween_ro=new TWEEN.Tween(Arm1R.rotation);
    var Arm1R_tween_poR=new TWEEN.Tween(Arm1R.position);
    var Arm1R_tween_roR=new TWEEN.Tween(Arm1R.rotation);
    var Arm1L_tween_po=new TWEEN.Tween(Arm1L.position);
    var Arm1L_tween_ro=new TWEEN.Tween(Arm1L.rotation);
    var Arm1L_tween_poR=new TWEEN.Tween(Arm1L.position);
    var Arm1L_tween_roR=new TWEEN.Tween(Arm1L.rotation);
    var ElbowR_tween_po=new TWEEN.Tween(ElbowR.position);
    var ElbowL_tween_po=new TWEEN.Tween(ElbowL.position);
    var ElbowR_tween_poR=new TWEEN.Tween(ElbowR.position);
    var ElbowL_tween_poR=new TWEEN.Tween(ElbowL.position);
    var Arm2R_tween_po=new TWEEN.Tween(Arm2R.position);
    var Arm2R_tween_ro=new TWEEN.Tween(Arm2R.rotation);
    var Arm2R_tween_poR=new TWEEN.Tween(Arm2R.position);
    var Arm2R_tween_roR=new TWEEN.Tween(Arm2R.rotation);
    var Arm2L_tween_po=new TWEEN.Tween(Arm2L.position);
    var Arm2L_tween_ro=new TWEEN.Tween(Arm2L.rotation);
    var Arm2L_tween_poR=new TWEEN.Tween(Arm2L.position);
    var Arm2L_tween_roR=new TWEEN.Tween(Arm2L.rotation);
    var HandR_tween_po=new TWEEN.Tween(HandR.position);
    var HandL_tween_po=new TWEEN.Tween(HandL.position);
    var HandR_tween_poR=new TWEEN.Tween(HandR.position);
    var HandL_tween_poR=new TWEEN.Tween(HandL.position);
    var ThighR_tween_po=new TWEEN.Tween(ThighR.position);
    var ThighR_tween_ro=new TWEEN.Tween(ThighR.rotation);
    var ThighR_tween_poR=new TWEEN.Tween(ThighR.position);
    var ThighR_tween_roR=new TWEEN.Tween(ThighR.rotation);
    var ThighL_tween_po=new TWEEN.Tween(ThighL.position);
    var ThighL_tween_ro=new TWEEN.Tween(ThighL.rotation);
    var ThighL_tween_poR=new TWEEN.Tween(ThighL.position);
    var ThighL_tween_roR=new TWEEN.Tween(ThighL.rotation);
    var KneeR_tween_po=new TWEEN.Tween(KneeR.position);
    var KneeL_tween_po=new TWEEN.Tween(KneeL.position);
    var KneeR_tween_poR=new TWEEN.Tween(KneeR.position);
    var KneeL_tween_poR=new TWEEN.Tween(KneeL.position);
    var SmallLegR_tween_po=new TWEEN.Tween(SmallLegR.position);
    var SmallLegR_tween_ro=new TWEEN.Tween(SmallLegR.rotation);
    var SmallLegR_tween_poR=new TWEEN.Tween(SmallLegR.position);
    var SmallLegR_tween_roR=new TWEEN.Tween(SmallLegR.rotation);
    var SmallLegL_tween_po=new TWEEN.Tween(SmallLegL.position);
    var SmallLegL_tween_ro=new  TWEEN.Tween(SmallLegL.rotation);
    var SmallLegL_tween_poR=new TWEEN.Tween(SmallLegL.position);
    var SmallLegL_tween_roR=new TWEEN.Tween(SmallLegL.rotation);
    var FootR_tween_po= new TWEEN.Tween(RightFoot.position);
    var FootL_tween_po= new TWEEN.Tween(LeftFoot.position);
    var FootR_tween_poR=new TWEEN.Tween(RightFoot.position);
    var FootL_tween_poR=new TWEEN.Tween(LeftFoot.position);
    var Arm1_temp=Arm1R.position.y;
    var Elbow_temp=ElbowR.position.y;
    var Arm2_temp=Arm2R.position.y;
    var Hand_temp=HandR.position.y;
    var Thigh_temp=ThighR.position.y;
    var Knee_temp=KneeR.position.y;
    var SmallLeg_temp=SmallLegR.position.y;
    var Foot_temp=RightFoot.position.y;

    function LeftGo() {

        HeadBodyGo();
        if(count==0)
        {
            Arm1R_tween_po.to({x:StartPoint-Math.cos(-sita)-step,y:Arm1_temp-Math.sin(-sita)},1000);
            Arm1R_tween_ro.to({z:-sita},1000);
            ElbowR_tween_po.to({x:StartPoint-2.5*Math.cos(-sita)-step,y:Elbow_temp-2.25*Math.sin(-sita)},1000);
            Arm1L_tween_po.to({x:StartPoint+Math.cos(-sita)-step,y:Arm1_temp+Math.sin(-sita)},1000);
            Arm1L_tween_ro.to({z:sita},1000);
            ElbowL_tween_po.to({x:StartPoint+2.5*Math.cos(-sita)-step,y:Elbow_temp+2.25*Math.sin(-sita)},1000);
            Arm2R_tween_po.to({x:StartPoint-4*Math.cos(-sita)-step,y:Arm2_temp-3*Math.sin(-sita)},1000);
            Arm2R_tween_ro.to({z:-sita-10*Math.PI/180},1000);
            HandR_tween_po.to({x:StartPoint-3.75*Math.cos(-sita)-step,y:Hand_temp-3.75*Math.sin(-sita)},1000);
            Arm2L_tween_po.to({x:StartPoint+4*Math.cos(-sita)-step,y:Arm2_temp+3*Math.sin(-sita)},1000);
            Arm2L_tween_ro.to({z:sita-10*Math.PI/180},1000);
            HandL_tween_po.to({x:StartPoint+3.75*Math.cos(-sita)-step,y:Hand_temp+3.75*Math.sin(-sita)},1000);


            //下半身
            ThighL_tween_po.to({x:StartPoint-Math.cos(-sita)-step,y:Thigh_temp-Math.sin(-sita)},1000);
            ThighL_tween_ro.to({z:-sita},1000);
            KneeL_tween_po.to({x:StartPoint-0.9*Math.cos(-sita)-step,y:Knee_temp+0.9*Math.sin(-sita)},1000);
            ThighR_tween_po.to({x:StartPoint+Math.cos(-sita)-step,y:Thigh_temp+Math.sin(-sita)},1000);
            ThighR_tween_ro.to({z:sita},1000);
            KneeR_tween_po.to({x:StartPoint+0.9*Math.cos(-sita)-step,y:Knee_temp+0.9*Math.sin(-sita)},1000);
            SmallLegL_tween_po.to({x:StartPoint-3.5*Math.cos(-sita)-step,y:SmallLeg_temp-3.5*Math.sin(-sita)},1000);
            SmallLegL_tween_ro.to({z:-sita},1000);
            FootL_tween_po.to({x:StartPoint-3.75*Math.cos(-sita)-step,y:Foot_temp-3.75*Math.sin(-sita)},1000);
            SmallLegR_tween_po.to({x:StartPoint+4*Math.cos(-sita)-step,y:SmallLeg_temp+3*Math.sin(-sita)},1000);
            SmallLegR_tween_ro.to({z:sita},1000);
            FootR_tween_po.to({x:StartPoint+3.75*Math.cos(-sita)-step,y:Foot_temp+3.75*Math.sin(-sita)},1000);
        }
       else{
            Arm1R_tween_po.to({x:StartPoint-2*Math.cos(-sita)-step,y:Arm1_temp-Math.sin(-sita)},1000);
            Arm1R_tween_ro.to({z:-2*sita},1000);
            Arm1L_tween_po.to({x:StartPoint+2*Math.cos(-sita)-step,y:Arm1_temp+Math.sin(-sita)},1000);
            Arm1L_tween_ro.to({z:2*sita},1000);
            ElbowR_tween_po.to({x:StartPoint-5*Math.cos(-sita)-step,y:Elbow_temp-2.25*Math.sin(-sita)},1000);
            ElbowL_tween_po.to({x:StartPoint+5*Math.cos(-sita)-step,y:Elbow_temp+2.25*Math.sin(-sita)},1000);
            Arm2R_tween_po.to({x:StartPoint-7.5*Math.cos(-sita)-step,y:Arm2_temp-3*Math.sin(-sita)},1000);
            Arm2R_tween_ro.to({z:-2*sita},1000);

            Arm2L_tween_po.to({x:StartPoint+7.5*Math.cos(-sita)-step,y:Arm2_temp+3*Math.sin(-sita)},1000);
            Arm2L_tween_ro.to({z:2*sita},1000);
            HandR_tween_po.to({x:StartPoint-7.5*Math.cos(-sita)-step,y:Hand_temp-3.75*Math.sin(-sita)},1000);
            HandL_tween_po.to({x:StartPoint+7.5*Math.cos(-sita)-step,y:Hand_temp+3.75*Math.sin(-sita)},1000);


            ThighL_tween_po.to({x:StartPoint-2*Math.cos(-sita)-step,y:Thigh_temp-Math.sin(-sita)},1000);
            ThighL_tween_ro.to({z:-2*sita},1000);
            KneeL_tween_po.to({x:StartPoint-0.9*Math.cos(-sita)-step,y:Knee_temp+0.9*Math.sin(-sita)},1000);
            ThighR_tween_po.to({x:StartPoint+Math.cos(-sita)-step,y:Thigh_temp+Math.sin(-sita)},1000);
            ThighR_tween_ro.to({z:2*sita},1000);
            KneeR_tween_po.to({x:StartPoint+0.9*Math.cos(-sita)-step,y:Knee_temp+0.9*Math.sin(-sita)},1000);
            SmallLegL_tween_po.to({x:StartPoint-4*Math.cos(-sita)-step,y:SmallLeg_temp-3*Math.sin(-sita)},1000);
            SmallLegL_tween_ro.to({z:-2*sita},1000);
            FootL_tween_po.to({x:StartPoint-3.75*Math.cos(-sita)-step,y:Foot_temp-3.75*Math.sin(-sita)},1000);
            SmallLegR_tween_po.to({x:StartPoint+4*Math.cos(-sita)-step,y:SmallLeg_temp+3*Math.sin(-sita)},1000);
            SmallLegR_tween_ro.to({z:2*sita},1000);
            FootR_tween_po.to({x:StartPoint+3.75*Math.cos(-sita)-step,y:Foot_temp+3.75*Math.sin(-sita)},1000);

        }

        Arm1R_tween_po.start();
        Arm1R_tween_ro.start();
        Arm1L_tween_po.start();
        Arm1L_tween_ro.start();
        ElbowL_tween_po.start();
        ElbowR_tween_po.start();
        Arm2R_tween_po.start();
        Arm2R_tween_ro.start();
        Arm2L_tween_po.start();
        Arm2L_tween_ro.start();
        HandL_tween_po.start();
        HandR_tween_po.start();

        ThighR_tween_po.start();
        ThighR_tween_ro.start();
        ThighL_tween_po.start();
        ThighL_tween_ro.start();
        KneeR_tween_po.start();
        KneeL_tween_po.start();
        SmallLegR_tween_po.start();
        SmallLegR_tween_ro.start();
        SmallLegL_tween_po.start();
        SmallLegL_tween_ro.start();
        FootR_tween_po.start();
        FootL_tween_po.start();
        StartPoint=Waist.position.x;
    }
    function RightGo() {

        HeadBodyGo();
        Arm1R_tween_poR.to({x:StartPoint+2*Math.cos(-sita)-step,y:Arm1_temp+Math.sin(-sita)},1000);
        Arm1R_tween_roR.to({z:2*sita},1000);
        Arm1L_tween_poR.to({x:StartPoint-2*Math.cos(-sita)-step,y:Arm1_temp-Math.sin(-sita)},1000);
        Arm1L_tween_roR.to({z:-2*sita},1000);
        ElbowR_tween_poR.to({x:StartPoint+5*Math.cos(-sita)-step,y:Elbow_temp+2.25*Math.sin(-sita)},1000);
        ElbowL_tween_poR.to({x:StartPoint-5*Math.cos(-sita)-step,y:Elbow_temp-2.25*Math.sin(-sita)},1000);
        Arm2R_tween_poR.to({x:StartPoint+7.5*Math.cos(-sita)-step,y:Arm2_temp+3*Math.sin(-sita)},1000);
        Arm2R_tween_roR.to({z:2*sita},1000);
        Arm2L_tween_poR.to({x:StartPoint-7.5*Math.cos(-sita)-step,y:Arm2_temp-3*Math.sin(-sita)},1000);
        Arm2L_tween_roR.to({z:-2*sita},1000);
        HandR_tween_poR.to({x:StartPoint+7.5*Math.cos(-sita)-step,y:Hand_temp+3.75*Math.sin(-sita)},1000);
        HandL_tween_poR.to({x:StartPoint-7.5*Math.cos(-sita)-step,y:Hand_temp-3.75*Math.sin(-sita)},1000);



        ThighR_tween_poR.to({x:StartPoint-Math.cos(-sita)-step,y:Thigh_temp-Math.sin(-sita)},1000);
        ThighR_tween_roR.to({z:-2*sita},1000);
        KneeR_tween_poR.to({x:StartPoint-0.9*Math.cos(-sita)-step,y:Knee_temp+0.9*Math.sin(-sita)},1000);
        ThighL_tween_poR.to({x:StartPoint+Math.cos(-sita)-step,y:Thigh_temp+Math.sin(-sita)},1000);
        ThighL_tween_roR.to({z:2*sita},1000);
        KneeL_tween_poR.to({x:StartPoint+0.9*Math.cos(-sita)-step,y:Knee_temp+0.9*Math.sin(-sita)},1000);
        SmallLegR_tween_poR.to({x:StartPoint-4*Math.cos(-sita)-step,y:SmallLeg_temp-3*Math.sin(-sita)},1000);
        SmallLegR_tween_roR.to({z:-2*sita},1000);
        FootR_tween_poR.to({x:StartPoint-3.75*Math.cos(-sita)-step,y:Foot_temp-3.75*Math.sin(-sita)},1000);
        SmallLegL_tween_poR.to({x:StartPoint+4*Math.cos(-sita)-step,y:SmallLeg_temp+3*Math.sin(-sita)},1000);
        SmallLegL_tween_roR.to({z:2*sita},1000);
        FootL_tween_poR.to({x:StartPoint+3.75*Math.cos(-sita)-step,y:Foot_temp+3.75*Math.sin(-sita)},1000);

        Arm1R_tween_poR.start();
        Arm1R_tween_roR.start();
        Arm1L_tween_poR.start();
        Arm1L_tween_roR.start();
        ElbowR_tween_poR.start();
        ElbowL_tween_poR.start();
        Arm2R_tween_poR.start();
        Arm2R_tween_roR.start();
        Arm2L_tween_poR.start();
        Arm2L_tween_roR.start();
        HandR_tween_poR.start();
        HandL_tween_poR.start();

        ThighR_tween_poR.start();
        ThighR_tween_roR.start();
        ThighL_tween_poR.start();
        ThighL_tween_roR.start();
        KneeR_tween_poR.start();
        KneeL_tween_poR.start();
        SmallLegR_tween_poR.start();
        SmallLegR_tween_roR.start();
        SmallLegL_tween_poR.start();
        SmallLegL_tween_roR.start();
        FootR_tween_poR.start();
        FootL_tween_poR.start();
        StartPoint=Waist.position.x;
    }
    // position and point the camera to the center of the scene
    camera.position.x = -25;
    camera.position.y = 40;
    camera.position.z = 30;
    // camera.position.x=-45;
    // camera.position.y=0;
    // camera.position.z=0;
    camera.lookAt(scene.position);


    //TODO:考虑弯曲的操作
    // //TODO:计算夹角
    // function interse(x1,y1,z1,x2,y2,z2) {
    //
    // }
    // //TODO:使得球球与方形连接起来
    // function connect(x1,y1,z1,r) {
    //
    // }
    // onUpdate(function () {
    //     test.position.x=2+Math.cos(-x);
    //     test.position.y=3+Math.sin(-x);
    //     test.rotation.z+=x;
    // })

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
    renderScene();
    // render the scene
    // renderer.render(scene, camera);
    //隔一定时间重渲染函数，动画
    // var x;
    // var tween=new TWEEN.Tween({x:0})
    //     .to({x:45},10000)
    //     .easing(TWEEN.Easing.Elastic.InOut);
    //     tween.start();
    function renderScene() {
             stats.update();
             TWEEN.update();
             console.log(count);
             if(count%40==0)
           {
                 console.log("LeftGo");
                 LeftGo();
             }
            else if(count%40==20)
            {
                //动作
                console.log("RightGo");
                RightGo();
            }

        if(count==1800)
        {
            window.location.reload();
        }
        count++;
        requestAnimationFrame(renderScene);
        renderer.render(scene,camera);
    }
    function initStats() {
        var stats=new Stats();
        // stats.setMode(0);
        stats.domElement.style.position='absolute';
        stats.domElement.style.left='0px';
        stats.domElement.style.top='60px';
        document.getElementById("Stats-output").appendChild(stats.domElement);
        return stats;
    }


}
window.onload = init;
