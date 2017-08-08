$(function () {
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function () {
        $(this).css('color','#fff')
    }).mouseout(function () {
        $(this).css('color','#a4b094');
    });
    $('.shopCar').mouseover(function () {
        $(this).css({color:'#ff6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function () {
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入特效*/
    $('.ser1').mouseover(function () {
        if(flag){
            $('.ser1 input').css('border','1px solid #000');
            $('.ser2').css('border','1px solid #000').css('borderLeft','none');
        }
    }).mouseout(function () {
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
        }
    });
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({color:'#fff',background:'orange'})
    }).mouseout(function () {
        $(this).css({color:'#757575',background:'#EEEEEE'})
    });
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function () {
        $(this).css({background:'orange',color:'#fff'});
    }).mouseout(function () {
        $(this).css({background:'#fff',color:'#000'});
    });
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').slideDown().css('border-color','orange');
    }).blur(function () {
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').slideUp().css('border-color','#ccc');
    });
    /*导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color','#000');
    });
    $('.nav').mouseout(function () {
        $('.select').slideUp();
    });
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish(); //finish 停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp();
    });
    /*轮播图效果*/
    var num = 0;
    var timer ;
    timer = setInterval(function () {
        outplay();
    },3000);
    $('.round li').mouseover(function () {
        num = $(this).index();
        displayImg();

    }).mouseout(function () {
        timer = setInterval(outplay,3000);
    });
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(outplay,3000);
    })
    $('.direcL').click(function () {
        //上一张
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    });
    $('.direcR').click(function () {
        num = num + 1;
        if(num > 4){
            num = 0 ;
        }
       displayImg();
    });
    function displayImg() {
        $('.banner img').eq(num).removeClass('hide').siblings('img').addClass('hide');
        $('.round li').eq(num).css('background','orange').siblings().css({background:'black',opacity:'0.8'});
    }
    function outplay() {
        num++;
        if(num>4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background','transparent');
    });
    /*用户移出二级当行的范围后，让他消失*/
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，让他显示*/
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').css('background','transparent');
    });
    /*小米明星点击轮播*/
    $('.star .prev').click(function () {
        $('.star .next').css({
            color:'#000',
            border:'1px solid #000',
            cursor: 'pointer'
        });
        $(this).css({
            color:'#ccc',
            border:'1px solid #ccc',
            cursor: 'default'
        });
        $('.one').removeClass('hide');
        $('.tow').addClass('hide');
    });
    $('.star .next').click(function () {
        $('.star .prev').css({
            color:'#000',
            border:'1px solid #000',
            cursor: 'pointer'
        });
        $(this).css({
            color:'#ccc',
            border:'1px solid #ccc',
            cursor: 'default',
            borderLeft:'1px solid #000'
        });
        $('.tow').removeClass('hide');
        $('.one').addClass('hide');
    });
    /*智能硬件、搭配、配件、周边、热评产品、视频内容,改变margin和box-shadow*/
    $('.productR li').add('.product1 li img').add('.proList1').add('.proList2 .twoRow li').add('.productL img').add('.review .hotList li').add('.video .videoList li').mouseover(function () {
        $(this).css('margin','15px 10px 5px 0 ')
        $(this).css('box-shadow','0 0 28px gray');
    }).mouseout(function () {
        $(this).css('margin','20px 10px 0 0 ');
        $(this).css('box-shadow','none')
    });
    /*搭配、配件、周边,tab切换*/
    $('.match .navList li').add('.perimeter .navList li').add('.parts .navList li').mouseover(function () {
        var match = $(this).parents('.match');
        var parts = $(this).parents('.parts');
        var perimeter = $(this).parents('.perimeter');
        match.find('.proR .proLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
        parts.find('.proR .proLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
        perimeter.find('.proR .proLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
    });
    /*搭配、配件、周边，评价弹出*/
    for(var j = 0;j<$('.proLi').length;j++){
        $('.proLi' + j).find('.proList1').mouseover(function () {
            $(this).find('.slideDiv').stop(true,false).slideDown();
        }).mouseout(function () {
            $(this).find('.slideDiv').stop(true,false).slideUp();
        });
    }
    /*为你推荐*/
    $('.forYou .forYouList li').mouseover(function () {
        $(this).css('paddingTop','48px');
    }).mouseout(function () {
        $(this).css('paddingTop','50px');
    });
    var a = 0;
    var step = 0;
    $('.forYou .next').click(function () {
        if(a<3){
            a++;
            step = (a * 1226) + 'px';
            $('.forYou .forYouList').css('left' , '-'+step);

            $('.forYou .prev').css({
                color:'#000',
                border:'1px solid #000',
                cursor:'pointer'
            })
        }
        if(a == 3){
            $('.forYou .next').css({
                color:'#ccc',
                border:'1px solid #ccc',
                cursor:'default',
                borderLeft:'1px solid #000'
            });
        }
    });
    $('.forYou .prev').click(function () {
        if(a > 0){
            a--;
            step = (a * 1226) + 'px';
            $('.forYou .forYouList').css('left' , '-'+step);
            $('.forYou .next').css({
                color:'#000',
                border:'1px solid #000',
                cursor:'pointer'
            });
        }
        if(a == 0){
            $('.forYou .prev').css({
                color:'#ccc',
                border:'1px solid #ccc',
                cursor:'default'
            })
        }
    });
    /*热评产品*/
    /*内容*/
    var arr = [
        Num1 = 0,
        Num2 = 0,
        Num3 = 0,
        Num4 = 0
    ];
    for (var i = 1 ; i < 5 ; i ++) {
        (function (i) {
            $('.box' + i).mouseover(function () {
                $('.box' + i + ' .prev').css('display', 'block');
                $('.box' + i + ' .next').css('display', 'block');
            }).mouseout(function () {
                $('.box' + i + ' .next').css('display', 'none');
                $('.box' + i + ' .prev').css('display', 'none');
            });
            $('.box' + i + ' .boxList p').click(function () {
                $('.box' + i + ' ul li').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
                $('.box' + i + ' .boxList p').eq($(this).index()).addClass('boxlistActive').siblings().removeClass('boxlistActive');
            });
            $('.box' + i + ' .next').click(function () {
                if (arr[i - 1] < 3) {
                    $('.box' + i + ' ul li').eq(++ arr[i - 1]).removeClass('hide').siblings().addClass('hide');
                    $('.box' + i + ' .boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
                }
            });
            $('.box' + i + ' .prev').click(function () {
                if (arr[i - 1] > 0) {
                    $('.box' + i + ' ul li').eq(-- arr[i - 1]).removeClass('hide').siblings().addClass('hide');
                    $('.box' + i + ' .boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
                }
            });
        })(i);
    }
    /*视频*/
    $('.videoList li img').mouseover(function () {
        $(this).siblings('.iconfont').css('color','orange');
    }).mouseout(function () {
        $(this).siblings('.iconfont').css('color','#fff');
    })
});
