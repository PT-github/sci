<template>
    <div class="comp-part2">
        <div class="team">
            <div class="wid">
                <div class="left_layout">
                    <h1>编辑团队<span>每一位编辑都就职或毕业于下列顶尖研究院所和学府</span></h1>
                    <div class="scroll">
                        <a class="pos prev"><img src="/static/imgs/ico12.png" alt=""></a>
                        <a class="pos next"><img src="/static/imgs/ico13.png" alt=""></a>
                        <swiper :options="mySwiper" class='mainSwiper'>
                            <swiper-slide v-for='(v, index) in 3' :key="'comp-part2_slider' + index">
                                <div class="slide-content">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                    <img src="/static/imgs/ico14.png" alt="">
                                </div>
                            </swiper-slide>
                        </swiper>
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
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'CompPart2',
        data() {
            return {
                mySwiper: {
                    width: 583,
                    height: 298,
                    autoplay: true,
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev',
                    },
                    loop:true
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .mainSwiper {
        width: 583px;
        height: 298px;
        margin-left: 31px;
        .slide-content {
            img {
                width: 120px;
                height: 120px;
                float: left;
                margin-left: 4%;
                margin-top: 5%;
            }
            img:nth-child(4n+1){margin-left:1%;}
        }
    }
    .team {
        height: 500px;
        background: url(/static/imgs/img3.jpg) center no-repeat;
        h1 {
            padding-top: 31px;
            text-align: center;
        }
        .scroll {
            position: relative;
            width: 645px;
            margin-left: 36px;
            height: 340px;
            .pos {
                position: absolute;
                top: 48%;
                cursor: pointer;
                z-index: 1;
            }
            .next {
                right: 0;
            }
            .prev {
                left: 0;
            }
        }
        .left_layout {
            height: 458px;
            width: 717px;
            background: #fff;
            float: left;
            border: 1px solid #c9c9c9;
            margin: 20px;
            position: relative;
            p {
                a {
                    position: absolute;
                    bottom: 5%;
                    left: 45%;
                    color: #666;
                    font-weight: bold;
                }
            }
            h1 {
                padding-top: 31px;
                text-align: center;
                span {
                    display: block;
                    font-size: 16px;
                    font-weight: normal;
                    margin-top: 14px;
                }
            }
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