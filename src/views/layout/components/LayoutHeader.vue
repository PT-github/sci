<template>
    <div class="layout-header">
        <div class="top">
            <div class="wid">
                <p class="fr">
                    <a href="index.php?page=referral_program" class="a1" style="background: #F39F19;">推荐同事</a>
                    <a href="index.php?page=journals_publishers" class="a1">机构合作</a>
                    <a href="https://www.letpub.com.cn">中文</a>
                    <a href="https://www.letpub.tw">繁體中文</a>
                    <a href="https://www.letpub.com">English</a>
                    <a href="https://www.letpub.co.kr/">한국어</a>
                    <a href="https://www.letpub.jp/">日本語</a>
                    <a href="https://www.letpub.com.br/">Português</a>
                    <a href="http://www.letpub.com/es/">Español</a>
                </p>
            </div>
        </div>
        <div class="logo_layout">
            <div class="wid">
                <div class="logo">
                    <a href="https://www.letpub.com.cn" title="SCI论文修改"><img src="/static/imgs/ico0.png" alt=""></a>
                </div>
                <h1>美国ACCDON公司旗下品牌</h1>
                <div class="fri_area" style="line-height:1em;">
                    <p style="padding-left:16px;" class="p1"><i class="i0"></i><span style="padding-left:6px;">021-34243335,021-33632887</span></p>
                    <p style="padding-left:16px;"><i class="i1"></i><span style="padding-left:6px;">chinasupport@letpub.com<span></span></span></p>
                    <p style="height:27px; position:relative; ">
                        <a href="https://www.letpub.com.cn/index.php?page=login">登录</a>
                        <a href="https://www.letpub.com.cn/index.php?page=register" style="margin-left:6px;">注册</a>
                        <span style="color:#f00; padding-left:8px; font-size:13px; position:absolute; bottom:2px; width:100px;">新注册优惠</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LayoutHeader'
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .logo_layout {
        height: 109px;
        .logo {
            float: left;
            margin-top: 20px;
        }
        h1 {
            float: left;
            font-size: 14px;
            color: #224890;
            margin-left: 10px;
            margin-top: 50px;
            border-left: 1px solid #CCC;
            padding: 5px 15px;
        }
        .fri_area {
            float: right;
            margin-top: 6px;
            p {
                margin-top: 10px;
                i {
                    display: inline-block;
                    margin-right: 4px;
                    vertical-align: middle;
                }
                i.i0 {
                    width: 19px;
                    height: 19px;
                    background: url(/static/imgs/ico1.png);
                    margin-top: -4px;
                }
                i.i1 {
                    width: 20px;
                    height: 13px;
                    background: url(/static/imgs/ico2.png);
                    margin-top: -2px;
                }
                a {
                    width: 75px;
                    float: left;
                    height: 27px;
                    line-height: 27px;
                    text-align: center;
                    background: #385692;
                    color: #fff;
                    border-radius: 20px;
                    margin-left: 15px;
                }
            }
            p.p1 {
                color: #385692;
            }
        }
    }
    .wid {
        width: 1100px;
        margin: 0 auto;
    }
    .top {
        width: 100%;
        height: 40px;
        background: #f1f1f1;
        p {
            a {
                margin-left: 10px;
                float: left;
                font-size: 12px;
                height: 22px;
                line-height: 22px;
                color: #666666;
                position: relative;
            }
            a.a1 {
                color: #fff;
                background: #385692;
                width: 72px;
                height: 22px;
                border-radius: 3px;
                text-align: center;
                margin-right: 8px;
                &::after {
                    content: '';
                    position: absolute;
                    right: -8px;
                    width: 1px;
                    height: 12px;
                    background: #666666;
                    top: 5px;
                }
            }
        }
        p.fr {
            font-family: "";
            color: #666666;
            margin-top: 10px;
        }
    }
</style>