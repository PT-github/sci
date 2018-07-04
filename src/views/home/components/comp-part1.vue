<template>
    <div class="comp-part1">
        <div class="feedback">
            <div class="wid">
                <div class="left_layout">
                    <h1>客户反馈</h1>
                    <div class="scroll">
                        <a class="pos prev"><img src="/static/imgs/ico6.png" alt=""></a>
                        <a class="pos next"><img src="/static/imgs/ico7.png" alt=""></a>
                        <swiper :options="mySwiper" class='mainSwiper'>
                            <swiper-slide v-for='(v, index) in 10' :key="'comp-part1_slider' + index">
                                <div class="pict">
                                    <img src="/static/imgs/shiyunsheng-20161019.jpg" width="180" border="0">
                                </div>
                                <div class="text">
                                    <b>史云胜博士 | 清华大学</b>
                                    <p><span>论文题目</span></p>
                                    <p>Characterization of Superlubricity Nanometer Interface by Raman
                                        Spectroscopy</p>
                                    <p><span>服务评价</span></p>
                                    <p>导师推荐的LetPub，反应迅速及时，服务规范和热情，修改的结果让人满意，并且比预计提前了一天，值得推荐！</p>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="right_layout">
                    <h1>科研工具</h1>
                    <div class="search">
                        <form id="bottomsearchform1" name="bottomsearchform1" method="post"
                              action="./index.php?page=journalapp&amp;searchsort=relevance&amp;view=search">
                            <input name="searchname" id="searchnamebottom" type="text"
                                   style="width:175px; height:40px; line-height:40px;" placeholder="请输入SCI期刊名搜索"
                                   class="ui-autocomplete-input" autocomplete="off">
                            <button style="cursor:pointer;"
                                    onclick="window.location='./index.php?page=journalapp&amp;view=search&amp;searchsort=relevance&amp;searchname='+escape(document.bottomsearchform1.searchname.value); return false;"></button>
                        </form>
                    </div>
                    <div class="keycode">
                        <p><a href="index.php?page=journalapp" title="SCI影响因子查询">SCI影响因子查询</a></p>
                        <p><a href="index.php?page=grant" title="国家自然基金查询">国家自然基金查询</a></p>
                        <p><a href="index.php?page=lecture_overview" title="SCI讲座资料下载">SCI讲座资料下载</a></p>
                        <p><a href="index.php?page=sci_writing" title="SCI论文写作材料">SCI论文写作材料</a></p>
                        <p><a href="index.php?page=med_english" title="专业医学英语词典">专业医学英语词典</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'CompPart1',
        data() {
            return {
                mySwiper: {
                    width: 527,
                    height: 265,
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
        width: 527px;
        height: 265px;
        margin-left: 60px;
        .pict {
            float: left;
            height: 240px;
            overflow: hidden;
        }
        .text {
            float: right;
            width: 316px;
            b {
                font-size: 18px;
                color: #232323;
                display: block;
                margin-bottom: 25px;
            }
            p {
                font-family: "";
                font-size: 14px;
                line-height: 1.5;
                margin-top: 10px;
                overflow: hidden;
                span {
                    background: #3d5998;
                    color: #fff;
                    padding: 4px 10px;
                }
            }
        }
    }
    .feedback {
        height: 420px;
        background: url(/static/imgs/img1.jpg) center no-repeat;
        margin-top: 20px;
        h1 {
            font-size: 28px;
            color: #202020;
            text-align: center;
            padding: 31px 0;
        }
        .left_layout {
            float: left;
            width: 717px;
            height: 380px;
            background: #f0f0f0;
            margin: 20px;
            .scroll {
                position: relative;
                width: 638px;
                margin-left: 38px;
                .pos {
                    position: absolute;
                    top: 50%;
                    margin-top: -66px;
                    cursor: pointer;
                }
                .prev {
                    left: 0;
                }
                .next {
                    right: 0;
                }
            }
        }
        .right_layout {
            float: right;
            width: 321px;
            height: 380px;
            background: #f0f0f0;
            margin: 20px 20px 20px 0;
            .search {
                margin-top: 15px;
                border: 1px solid #dcdcdc;
                background: #fff;
                width: 240px;
                height: 40px;
                margin-left: 40px;
                border-radius: 4px 0 0 4px;
                input {
                    margin-left: 10px;
                    border: none;
                    height: 100%;
                    width: 175px;
                    background: none;
                }
                button {
                    width: 54px;
                    height: 40px;
                    background: url(/static/imgs/ico5.png);
                    border: none;
                    float: right;
                }
            }
            .keycode {
                text-align: center;
                margin-top: 30px;
                a {
                    font-size: 18px;
                    color: #fff;
                    background: #3d5998;
                    display: inline-block;
                    line-height: 32px;
                    margin-top: 6px;
                    border-radius: 4px;
                    padding: 0 6px;
                    min-width: 152px;
                }
            }
        }
    }
    button {
        font-family: "microsoft yahei";
        outline: none;
        cursor: pointer;
    }
    form {
        display: block;
        margin-top: 0em;
        width: 240px;
    }
</style>