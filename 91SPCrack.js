/*
 *
 *
脚本功能：91视频解锁会员
软件版本：5.1.1
下载地址：https://shrtm.nu/bssp
脚本作者：Hausd0rff
更新时间：2021.11.18
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 91视频解锁会员
^https?:\/\/ap\w{1}\.(weilaixushi|orientlion|qdjdswkj)\.com\/m_user\/info url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/91SPCrack.js
^https?:\/\/.*\/common\/splash_config url reject-200

[mitm] 

hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com
*
*
*/


var body = $response.body;
    
    body = "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";

$done({body});
