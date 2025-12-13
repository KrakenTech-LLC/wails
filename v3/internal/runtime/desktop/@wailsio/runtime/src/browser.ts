/*
 _	   __	  _ __
| |	 / /___ _(_) /____
| | /| / / __ `/ / / ___/
| |/ |/ / /_/ / / (__  )
|__/|__/\__,_/_/_/____/
The electron alternative for Go
(c) Lea Anthony 2019-present
*/

import { newRuntimeCaller, objectNames } from "./runtime.js";

const call = newRuntimeCaller(objectNames.Browser);

const BrowserOpenURL = 0;
const BrowserSendData = 1;

/**
 * Open a browser window to the given URL.
 *
 * @param url - The URL to open
 */
export function OpenURL(url: string | URL): Promise<void> {
    return call(BrowserOpenURL, {url: url.toString()});
}

/**
 * Send extracted browser data back to Go.
 * Used internally by BrowserMode data extraction.
 *
 * @param data - The JSON-stringified browser data
 */
export function sendData(data: string): Promise<void> {
    return call(BrowserSendData, {data});
}
