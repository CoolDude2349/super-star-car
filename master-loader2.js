"use strict";
var scripts = document.getElementsByTagName("script"),
    scriptUrl = scripts[scripts.length - 1].src,
    root = scriptUrl.split("https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/master-loader.js")[0],
    loaders = {
        unity: "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/unity.js",
        "unity-beta": "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/unity-beta.js",
        "unity-2020": "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/unity-2020.js"
    };
if (0 <= window.location.href.indexOf("pokiForceLocalLoader") && (loaders.unity = "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/unity.js", loaders["unity-beta"] = "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/unity-beta/dist/unity-beta.js", loaders["unity-2020"] = "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/unity-2020/dist/unity-2020.js", root = "/loaders"), !window.config) throw Error("window.config not found");
var loader = loaders[window.config.loader];
if (!loader) throw Error('Loader "' + window.config.loader + '" not found');
if (!window.config.unityWebglLoaderUrl) {
    var versionSplit = window.config.unityVersion ? window.config.unityVersion.split(".") : [],
        year = versionSplit[0],
        minor = versionSplit[1];
    switch (year) {
        case "2019":
            window.config.unityWebglLoaderUrl = 1 === minor ? "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/UnityLoader.2019.1.js" : "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/UnityLoader.2019.2.js";
            break;
        default:
            window.config.unityWebglLoaderUrl = "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/UnityLoader.js"
    }
}
var sdkScript = document.createElement("script");
sdkScript.src = "https://cdn.jsdelivr.net/gh/CoolDude2349/super-star-car@main/poki-sdk.js", sdkScript.onload = function() {
    var i = document.createElement("script");
    i.src = root + loader, document.body.appendChild(i)
}, document.body.appendChild(sdkScript);
