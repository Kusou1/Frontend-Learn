/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // alert('设备就绪');

    // 应用挂起
    document.addEventListener('pause', function() {
        alert('应用挂起');
    })

    // 应用恢复
    document.addEventListener('resume', function() {
        alert('应用恢复');
    })

    // 回退按钮
    document.addEventListener('backbutton', function() {
        alert('回退按钮')
    })

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // 添加获取位置的单击事件
    document.getElementById('getPosition').addEventListener('click', getPosition)

    // 拍照
    document.getElementById('takePic').addEventListener('click', takePic)

    // 获取设备信息
    document.getElementById('deviceInfo').addEventListener('click', deviceInfo)

    // 添加自定义插件的事件监听
    document.getElementById('myToast').addEventListener('click', myToast)
}

// 获取地理位置
function getPosition() {
    var options = {
        enableHighAccuracy: true,
        maximumAge: 10000, // 毫秒为单位
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options)

    function onSuccess(position) {
        alert('经度：' + position.coords.longitude + "\n" +
              '纬度：' + position.coords.latitude + "\n" + 
              'Altitude: '          + position.coords.altitude          + '\n' + // 高度
              'Accuracy: '          + position.coords.accuracy          + '\n' + // 精确度
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' + // 高度精确度
              'Heading: '           + position.coords.heading           + '\n' + // 方向
              'Speed: '             + position.coords.speed             + '\n' + // 速度
              'Timestamp: '         + position.timestamp                + '\n'
        );
    }

    function onError(error) {
        alert("Code: " + error.code + "\n Message: " + error.message)
    }
}

// 拍照
function takePic() {
    navigator.camera.getPicture(onSuccess, onError, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    })

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage')
        image.src = imageURI
    }

    function onError(message) {
        alert("拍照失败：" + message)
    }
}

// 获取设备信息
function deviceInfo() {
    alert("Cordova 环境的版本：" + device.cordova + "\n" + 
        "Device model: " + device.model + "\n" + 
        "操作系统: " + device.platform + "\n" + 
        "UUID: " + device.uuid + "\n" + 
        "是否在模拟器上: " + device.isVirtual + "\n" + 
        "设备序列号: " + device.serial + "\n" + 
        "操作系统版本号: " + device.version + "\n" + 
        "终端制造商: " + device.manufacturer + "\n"
    )
}

// 自定义插件
function myToast() {
    cordova.plugins.MyToast.coolMethod("hello", onSuccess, onError)

    function onSuccess(message) {
        alert("MyToast success " + message)
    }

    function onError() {
        alert('MyToast Error')
    }
}