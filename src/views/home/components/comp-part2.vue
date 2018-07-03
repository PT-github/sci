<template>
    <div class="comp-part2">
        <div class="team">
            <div class="wid">
                <div class="left_layout">
                    <h1>编辑团队<span>每一位编辑都就职或毕业于下列顶尖研究院所和学府</span></h1>
                    <div class="scroll">
                        <a class="pos prev"><img src="img/ico12.png" alt=""></a>
                        <a class="pos next"><img src="img/ico13.png" alt=""></a>
                        <div class="layout_move" style="position: relative; overflow: hidden; height: 298.281px;">
                            <ul style="width: 1749px; position: absolute; left: 0px;">
                                <li>
                                    <img src="img/ico14.png" alt="">
                                    <img src="img/ico15.png" alt="">
                                    <img src="img/ico16.png" alt="">
                                    <img src="img/ico17.png" alt="">
                                    <img src="img/ico18.png" alt="">
                                    <img src="img/ico19.png" alt="">
                                    <img src="img/ico20.png" alt="">
                                    <img src="img/ico21.png" alt="">
                                </li>
                                <li>
                                    <img src="img/ico23.png" alt="">
                                    <img src="img/ico24.png" alt="">
                                    <img src="img/ico25.png" alt="">
                                    <img src="img/ico27.png" alt="">
                                    <img src="img/ico28.png" alt="">
                                    <img src="img/ico29.png" alt="">
                                    <img src="img/ico30.png" alt="">
                                    <img src="img/ico31.png" alt="">
                                </li>
                                <li>
                                    <img src="img/ico32.png" alt="">
                                    <img src="img/ico33.png" alt="">
                                    <img src="img/ico34.png" alt="">
                                    <img src="img/ico35.png" alt="">
                                    <img src="img/ico36.png" alt="">
                                    <img src="img/ico37.png" alt="">
                                    <img src="img/ico38.png" alt="">
                                    <img src="img/ico39.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p><a href="index.php?page=sci_editors">了解更多</a></p>
                </div>

                <div class="right_layout">
                    <h1>新闻及优惠</h1>
                    <ul>
                        <li><a href="index.php?page=letpub_aaas">国际著名期刊Science向作者提名使用LetPub编辑服务<i> -New</i></a></li>
                        <li><a href="index.php?page=budget">LetPub预存款服务，让您的科研基金尽其用<i> -New</i></a></li>
                        <li><a href="index.php?page=LetPub_CAS2016">LetPub在中科院成功举办论文写作与发表相关讲座<i> -New</i></a></li>
                        <li><a href="index.php?page=pnas">著名SCI期刊PNAS（IF=9.6）推荐LetPub的编辑服务</a></li>
                        <li><a href="index.php?page=aacr">美国癌症研究协会AACR出版社推荐LetPub编辑服务</a></li>
                    </ul>
                    <p><a href="index.php?page=info">了解更多</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CompPart2'
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .team {
        height: 500px;
        background: url(/static/imgs/img3.jpg) center no-repeat;
        h1 {
            padding-top: 31px;
            text-align: center;
        }
        .left_layout {
            height: 458px;
            width: 717px;
            background: #fff;
            float: left;
            border: 1px solid #c9c9c9;
            margin: 20px;
            position: relative;
        }
        .right_layout {
            float: right;
            width: 319px;
            height: 458px;
            background: #fff;
            margin: 20px 20px 20px 0;
            border: 1px solid #c9c9c9;
            position: relative;
            h1 {
                padding-bottom: 24px;
                border-bottom: 1px dashed #7c7c7c;
            }
            ul {
                margin-left: 10px;
                margin-top: 20px;
                margin-right: 10px;
                height: 290px;
                padding: 0 10px 0 20px;
                overflow: hidden;
                li {
                    font-size: 14px;
                    width: 100%;
                    position: relative;
                    margin-top: 15px;
                    float: left;
                    &:after {
                        content: '';
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        background: #1d55a0;
                        left: -12px;
                        top: 10px;
                    }
                    a {
                        display: block;
                        float: left;
                        color: #171717;
                        line-height: 1.5;
                    }
                    i {
                        color: #e60b11;
                    }
                }
            }
            p {
                a {
                    position: absolute;
                    bottom: 5%;
                    left: 40%;
                    color: #666;
                    font-weight: bold;
                }
            }
        }
    }
</style>