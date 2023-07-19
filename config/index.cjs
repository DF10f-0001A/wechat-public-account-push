/*埃斯林特-残疾*/

 /**
 *The configuration of this project is convenient for newcomers and has been reduced to the simplest configuration.
 *If you want to use more functions, please refer to [3 Config Parameter Description
 *Add attributes by yourself to support more personalized functions
 */
 常数用户配置= {

 //Use WeChat test account: public account APP_ ID
应用ID : “wx0a1f3fdf19935b30” ,

 //Use WeChat test account: public account APP_ SECRET
APP_SECRET应用程序 : “071f823be1bfff72a5064b14af2fa075” ,

省 : &#39;Gansu&#39; ,
城市 : &#39;Lanzhou&#39; ,

用户 : [
 {
 //Name of the person you want to send
名称 : &#39;Baby&#39; ,
 //Use WeChat test number: scan the code to follow a string generated after your WeChat test number, which can be seen in the background of the test number
身份证件 : “OzVuNg78eT-NeH7Let0FuEGoDnSHsx_iamJUMctOUk4” ,
 //Use WeChat test number: the template ID of the template message you want to send to him
 使用模板ID :‘j1527557380’ ,
 //The new calendar date is only used to obtain constellation fortune, and the format must be MM-DD
 星座日期 : &#39;&#39; ,
节日 : [
 //Note: The configured date of this item is the lunar date, because there is an * symbol before &#34;birthday&#34; in &#39;type&#39;
 {
类型 : &#39;Wife&#39; ,名称 : &#39;Baby&#39; ,年 : &#39;1999&#39; ,日期 : &#39;03-29&#39; ,
 } ,
 //Note: This configuration date is the Gregorian date, because there is no * symbol before &#34;birthday&#34; in &#39;type&#39;
 {
类型 : &#39;Husband&#39; ,名称 : &#39;Shen Mingkai&#39; ,年 : &#39;1999&#39; ,日期 : &#39;02-28&#39; ,
 } ,
 {
类型 : &#39;618&#39; ,名称 : &#39;Love Memorial Day&#39; ,年 : &#39;2020&#39; ,日期 : &#39;06-18&#39; ,
 } ,
 ] ,
 //We have been together for xxxx days
自定义日期列表 : [
 //Days together
 {关键字 :&#39;爱情日&#39; ,日期 : &#39;2020-06-18&#39; } ,
 //Wedding anniversary
 {关键字 :&#39;结婚日&#39; ,日期 : &#39;2030-01-01&#39; } ,
 ] ,
 } ,
 ] ,


 //[Push Completion Reminder] template ID, used to check whether you have successfully sent the template
回调模板ID : &#39;&#39; ,

回拨用户 : [
 {
名称 : &#39;Own&#39; ,
 //Use WeChat test number: your WeChat ID, scan the code to follow a string generated after your WeChat test number, which can be seen in the background of the test number
身份证件 : &#39;&#39; ,
 }
  ],

}

module.exports = USER_CONFIG

