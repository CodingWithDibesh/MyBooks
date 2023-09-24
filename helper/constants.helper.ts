/**
 * @description
 *  "beforeinstallprompt" is used to trigger event to show installation prompts.
 *  We will use it to show installation prompt on our mobile devices on first visit
 * @disclaimer
 *  This API is not compatible to with all devices thus we cannot rely on it
 *  Refer -> caniuse for more info
 * @url https://caniuse.com/?search=beforeinstallprompt
 */
export const BEFORE_INSTALL_PROMPT = "beforeinstallprompt"
/**
 * @description
 * "appinstalled" is used to determine whether your app is installed or not.
 * We will be using it to not show installation prompt after app is installed 
 * on our website. 
 * @disclaimer
 *  This API is not compatible to with all devices thus we cannot rely on it
 *  Refer -> caniuse for more info
 * @url https://caniuse.com/?search=appinstalled
 */
// appinstalled -> API refer caniuse for more info
export const APP_INSTALLED = "appinstalled"

// Customize your INSTALLATION STATUS and MESSAGE
export const INSTALLATION_STATUS = "MY_BOOKS_APP_STATUS"
export const INSTALLATION_MESSAGE = "MY_BOOKS_APP_INSTALLED"