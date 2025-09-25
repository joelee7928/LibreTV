const CUSTOMER_SITES = {
    dyttzy: {
      api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
      name: '电影天堂资源',
    }
    heimue': {
      api: 'https://json.heimuer.xyz/api.php/provide/vod',
      name: '黑木耳',
    }
    ruyi: {
      api: 'https://cj.rycjapi.com/api.php/provide/vod',
      name: '如意资源',
    }
    bfzy: {
      api: 'https://bfzyapi.com/api.php/provide/vod',
      name: '暴风资源',
     }
    tyyszy: {
      api: 'https://tyyszy.com/api.php/provide/vod',
      name: '天涯资源',
    }
    ffzy: {
      api: 'http://ffzy5.tv/api.php/provide/vod',
      name: '非凡影视',
    }
    zy360: {
      api: 'https://360zy.com/api.php/provide/vod',
      name: '360资源',
    }
    maotaizy: {
      api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
      name: '茅台资源',
    }
    wolong: {
      api: 'https://wolongzyw.com/api.php/provide/vod',
      name: '卧龙资源',
    }
    jisu: {
      api: 'https://jszyapi.com/api.php/provide/vod',
      name: '极速资源',
    }
    dbzy: {
      api: 'https://dbzy.tv/api.php/provide/vod',
      name: '豆瓣资源',
    }
    mozhua: {
      api: 'https://mozhuazy.com/api.php/provide/vod',
      name: '魔爪资源',
    }
    mdzy: {
      api: 'https://www.mdzyapi.com/api.php/provide/vod',
      name: '魔都资源',
    }
    zuid: {
      api: 'https://api.zuidapi.com/api.php/provide/vod',
      name: '最大资源',
    }
    yinghua: {
      api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
      name: '樱花资源',
    }
    wujin: {
      api: 'https://api.wujinapi.me/api.php/provide/vod',
      name: '无尽资源',
    }
    wwzy: {
      api: 'https://wwzy.tv/api.php/provide/vod',
      name: '旺旺短剧',
    }
    ikun: {
      api: 'https://ikunzyapi.com/api.php/provide/vod',
      name: 'iKun资源',
    }
    lzi: {
      api: 'https://cj.lziapi.com/api.php/provide/vod',
      name: '量子资源站',
    }
    xiaomaomi: {
      api: 'https://zy.xmm.hk/api.php/provide/vod',
      name: '小猫咪资源',
    }
    hsck: {
      api: 'https://hsckzy.vip/api.php/provide/vod/at/json/',
      name: '黄色仓库',
    }
    91jp: {
      api: 'https://91jpzyw.com/api.php/provide/vod/at/json',
      name: '91精品资源',
    }
    hwbys: {
      api: 'https://hw8.live/api.php/provide/vod/?ac=list',
      name: '华为吧影视资源',
    }
    sbzy: {
      api: 'https://subocaiji.com/api.php/provide/vod/at/json',
      name: '速播资源',
    }
    jyzy: {
      api: 'https://jyzyapi.com/provide/vod/at/json',
      name: '金鹰资源',
    }
    xzyz: {
      api: 'https://xzybb1.com/api.php/provide/vod/at/xml',
      name: '幸资源站',
    }
    ytzy: {
      api: 'https://apiyutu.com/api.php/provide/vod/?ac=list',
      name: '玉兔资源',
    }
    xbzy: {
      api: 'https://xingba111.com/api.php/provide/vod/?ac=list',
      name: '杏吧资源',
    }
    wxzy: {
      api: 'https://api.wuxianzy.net/api.php/provide/vod/?ac=list',
      name: '无线资源',
    }
    xjzy: {
      api: 'https://api.xiaojizy.live/provide/vod?ac=list',
      name: '小鸡资源',
    }
    xxbzy: {
      api: 'https://www.xxibaozyw.com/api.php/provide/vod/?ac=list',
      name: 'X细胞资源',
    }
    thzy: {
      api: 'https://thzy1.me/api.php/provide/vod/?ac=list',
      name: '桃花资源',
    }
    fqzy: {
      api: 'https://fqzy.me//api.php/provide/vod/?ac=list',
      name: '番茄资源',
    }
    nxxzy: {
      api: 'https://Naixxzy.com/api.php/provide/vod/?ac=list',
      name: '奶香香资源',
    }
    yyzy: {
      api: 'https://cj.yayazy.net/api.php/provide/vod/?ac=list',
      name: '丫丫资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
