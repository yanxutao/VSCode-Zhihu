/**
 * GET, PUT, POST Captcha through this API
 */
export const CaptchaAPI = `https://www.zhihu.com/api/v3/oauth/captcha?lang=en`;


/**
 * Prefetch QRCode https://www.zhihu.com/api/v3/account/api/login/qrcode
 * Get QRCode https://www.zhihu.com/api/v3/account/api/login/qrcode/${token}/image
 * Query ScanInfo https://www.zhihu.com/api/v3/account/api/login/qrcode/${token}/scan_info
 */
export const QRCodeAPI = 'https://www.zhihu.com/api/v3/account/api/login/qrcode';

/**
 * API for Aliyun OSS File Upload
 */
export const ImageUpload = 'https://api.zhihu.com/images';


/**
 * Image-hosting domain for zhihu
 * `https://pic4.zhimg.com/80/${file_name}_hd.png`
 */
export const ImageHostAPI = 'https://pic4.zhimg.com/80';

/**
 * Get qrcode ticket
 */
export const UDIDAPI = 'https://www.zhihu.com/udid';

/**
 * POST Login data to this API to aquire authentication
 */
export const LoginAPI = 'https://www.zhihu.com/api/v3/oauth/sign_in';

/**
 * Helper link to indicate if already login in
 */
export const SignUpRedirectPage = 'https://www.zhihu.com/signup';

/**
 * Feed Story
 */
export const FeedStoryAPI = 'https://www.zhihu.com/api/v3/feed/topstory/recommend';

/**
 * Get hot stories
 */
export const HotStoryAPI = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists';

/**
 * Get info about myself
 */
export const SelfProfileAPI = 'https://www.zhihu.com/api/v4/me';

/**
 * AnswerAPI = 'https://www.zhihu.com/api/v4/answers/${answerId}'
 */
export const AnswerAPI = 'https://www.zhihu.com/api/v4/answers';

/**
 * Answer URL 'https://www.zhihu.com/answers'
 */
export const AnswerURL = 'https://www.zhihu.com/answer';

/**
 * QuestionAPI = 'https://www.zhihu.com/api/v4/questions/${questionId}'
 */
export const QuestionAPI = 'https://www.zhihu.com/api/v4/questions'

/**
 * QuestionURL = 'https://www.zhihu.com/question/${question'
 */
export const QuestionURL = 'https://www.zhihu.com/question'

/**
 * ArticleAPI = 'https://zhuanlan.zhihu.com/api/articles/${articleId}/publish'
 * 
 * `POST` https://zhuanlan.zhihu.com/api/articles/drafts for creation
 * 
 * `PATCH` https://zhuanlan.zhihu.com/api/articles/${articleId}/draft` for patching
 * 
 * `PUT` https://zhuanlan.zhihu.com/api/articles/${articleId}/publish for publishing 
 */

export const ZhuanlanAPI = 'https://zhuanlan.zhihu.com/api/articles';

/**
 * Html Page: 'https://zhuanlan.zhihu.com/p/${articleId}'
 */
export const ZhuanlanURL = 'https://zhuanlan.zhihu.com/p/';

/**
 * ArticleAPI = 'https://www.zhihu.com/api/v4/articles/${articleId}'
 */
export const ArticleAPI = 'https://www.zhihu.com/api/v4/articles'

/**
 * Search All items in Zhihu
 */
export const SearchAPI: string = "https://www.zhihu.com/api/v4/search_v3";


/**
 *  get sms
 */
export const SMSAPI = 'https://www.zhihu.com/api/v3/oauth/sign_in/digits';

/**
 *  default zhihu domain
 */
export const ZhihuDomain = 'zhihu.com'