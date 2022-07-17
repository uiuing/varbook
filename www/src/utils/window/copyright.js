import bannerBase64 from '@/utils/data/bannerBase64'

const copyright = {
  init: () => {
    // eslint-disable-next-line no-console
    console.log(
      `%c %c\n\n\n适合中文程序员的变量命名助手，NLP+翻译，规范变量命名，定制化变量命名规则\n作者: uiuing  个人主页: uiuing.com\n%c在校学生，开源不易🙏\n`,
      ` padding: 60px 300px;
    background-image: url(${bannerBase64});
    background-size: contain;
    background-repeat: no-repeat;
    color: transparent;`,
      'color: #3eaf7c;font-size: 20px;margin-bottom: 20px;',
      'color: #3eaf7c;font-size: 30px;margin-bottom: 20px;'
    )
  }
}

export default copyright
