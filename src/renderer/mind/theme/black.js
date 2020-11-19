const blue={
    name:'black',
    text:'黑色',
    use:false,
    config:{
        //主根节点
        'main-root-fill':'rgb(5,196,235)',             //填充色
        'main-root-stroke':'transparent',           //边框
        'main-root-textFill':'#fff',         //字体颜色
        'main-root-fontSize':'18',         //字体大小
        'main-root-textPadding':[18,14,18,14],
        //二级节点
        'second-node-fill':'rgb(35, 39, 62)',
        'second-node-stroke':'rgb(115, 154, 163)',//'rgb(115, 154, 163)',
        'second-node-textFill':'rgb(236,236,244)',
        'second-node-fontSize':'14',
        'second-node-textPadding':[8,7,8,7],
        'distance':40,                  //根节点与二级节点之间的距离
        //自由节点（根节点）
        'free-root-fill':'rgb(253, 241, 107)',
        'free-root-stroke':'transparent',
        'free-root-textFill':'#fff',
        'free-root-fontSize':'14',
        'free-root-textPadding':[8,7,8,7],
        //自由节点（二级节点）
        'free-second-node-fill':'rgb(35, 39, 62)',
        'free-second-node-stroke':'rgb(115, 154, 163)',
        'free-second-node-textFill':'#fff',
        'free-second-node-fontSize':'12',
        'free-second-node-textPadding':[7,5,7,5],
        'free-distance':30,               //自由根节点与二级节点之间的距离
        //普通节点
        'node-fill':'rgb(35, 39, 62)',
        'node-stroke':'transparent',
        'node-textFill':'rgb(115, 154, 163)',
        'node-fontSize':'12',
        'node-textPadding':[6,5,6,5],
        //连线
        'stroke':'rgb(115, 154, 163)',                      //连线颜色
        'lineWidth':2,                    //连线粗细
        //canvas 设置
        'background':'rgb(35, 39, 62)',               //画布背景色
        //关联线
        'relate-stroke':'rgb(206, 214, 218)',                //关联线颜色
        'relate-textFill':'#fff',              //关联线文字颜色
        //外框
        'wireFrame-stroke':'rgb(206, 214, 218)',              //外框 颜色
        'wireFrame-fill':'transparent',                //外框填充色
        //总结
        'induce-stroke':'rgb(253, 241, 107)',                 //总结 线的颜色
        'induce-fill':'rgb(66,78,96)',                   //总结 文字背景色
        'induce-textFill':'#fff',               //总结 文字颜色
        'induce-fontSize':'',               //总结 文字大小
        'induce-fontFamily':'',             //字体
        'induce-fontStyle':''               //字型
    }   
  }

  export default blue;