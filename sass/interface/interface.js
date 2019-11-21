const domain='https://sprog.makepolo.net'

export const api={
    get_code:`${domain}/saas/get_code.php`,//
    app_login:`${domain}/saas/login_app.php`,
    skey:`${domain}/saas/get_access.php`,
    reg:`${domain}/saas/reg`,//注册
    get_province:`${domain}/saas/get_province.php`,//获取省
    get_city:`${domain}/saas/get_city.php`,//获取省下城市
    matche:`${domain}/saas/matche_clue.php`,//商机分配
    clue_list:`${domain}/saas/clue_list.php`,//商机列表 //未分配
    matched_clue:`${domain}/saas/matched_clue_list.php`,//已经分配的商机
    re_buy:`${domain}/saas/servuce_mall/repay.php`,    
    cpc_buy:`${domain}/saas/servuce_mall/cpc.php`,
    point_buy:`${domain}/saas/servuce_mall/purchase_score.php`,
    acg_buy:`${domain}/saas/servuce_mall/baidu_b2b.php`,
    jingjia_buy:`${domain}/saas/servuce_mall/qbb.php`,
    cpc_consume:`${domain}/saas/servuce_mall/cpc_consume_stat.php`,
    point_consume:`${domain}/saas/servuce_mall/bussines_point.php`,
    baidu_consume:`${domain}/saas/servuce_mall/b2b_consume_stat.php`,
    order_list:`${domain}/saas/servuce_mall/order_list.php`,
    cpc_consume:`${domain}/saas/servuce_mall/cpc_consume_stat.php`,
    hot_word:`${domain}/saas/servuce_mall/box_word.php`,
    check_word:`${domain}/saas/servuce_mall/check_box_word.php`,
    add_word:`${domain}/saas/servuce_mall/add_box_word.php`,
    article_issue:`${domain}/saas/article/article_issue.php`,//保存文章
    article_aready_issue:`${domain}/saas/article/article_pubed_list.php`,
    article_list:`${domain}/saas/article/article_list.php`,//获取文章列表
    article_one:`${domain}/saas/article/article_one.php`,//获取文章
    article_edit:`${domain}/saas/article/article_update.php`,
    article_del:`${domain}/saas/article/article_del.php`,
    article_item:`${domain}/saas/article/cat_list.php`,
    up_img:`${domain}/saas/upload_img.php`,
    plat_list:`${domain}/saas/3th/platform_list.php`,
    plat_auth:`${domain}/saas/3th/auth_url.php`,
    plat_pub:`${domain}/saas/3th/pub.php`,
    recommend:`${domain}/saas/business/recommend.php`,//推荐商机
    business_info:`${domain}/saas/business/business_info.php`,//商机详情
    view_phone:`${domain}/saas/business/view_phone.php`,//商机点扣费
    my_user:`${domain}/saas/my_user_list.php`,//代理商或销售
    add_user:`${domain}/saas/add_user.php`,//添加用户
    userinfo:`${domain}/saas/user/info.php`,
    change_password:`${domain}/saas/user/change_password.php`,
    forgot_passwd:`${domain}/saas/forgot_passwd.php`,//忘记密码--获取验证码
    set_new_passwd:`${domain}/saas/set_new_passwd.php`,
    ver_check:`${domain}/saas/ver/check.php`,
    // evaluate:`${domain}/saas/evaluate/evaluate.php`,//评论
    sj_search:`${domain}/saas/business/purchase.php`,//商机搜索

    
}