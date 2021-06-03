const logger = {
    info(mainMessage,desc="没有描述"){
        console.groupCollapsed("Alan Addons: "+mainMessage);
        console.log(desc);
        console.groupEnd();
    }
}
logger.info("插件已加载","Alan Addons 已经注入页面")