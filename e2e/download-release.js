require("dotenv").config()
require('dotenv').config({path:"./../.env"});
require('dotenv').config({path:"../../.env"});
require("dotenv").config({path:'../../../.env'})
require("dotenv").config({path:'../../../../.env'})

console.log(process.env['GH_TOKEN'])

var downloadRelease = require('download-github-release');

var user = 'BitHighlander';
var repo = 'pioneer-desktop';
var outputdir = '.';
var leaveZipped = false;

// Define a function to filter releases.
function filterRelease(release) {
  // Filter out prereleases.
  return release.prerelease === true;
}

// Define a function to filter assets.
function filterAsset(asset) {
  // Select assets that contain the string 'windows'.
  return asset.name.indexOf('.zip') >= 0;
  // return asset.name.indexOf('windows') >= 0;
}

downloadRelease(user, repo, outputdir, filterRelease, filterAsset, leaveZipped)
  .then(function() {
    console.log('All done!');
  })
  .catch(function(err) {
    console.error(err.message);
  });


// var request = require('request');
//
// var headers = {
//   'Accept': 'application/octet-stream',
//   'User-Agent': 'request module',
// };
//
// //https://github.com/BitHighlander/pioneer-desktop/releases/download/untagged-6b1f89677a67b6a89a53/pioneer-desktop-8.1.12.dmg
// //https://github.com/BitHighlander/pioneer-desktop/releases/download/v8.1.12/pioneer-desktop-8.1.12.dmg
// var API_URL = "https://"+process.env['GH_TOKEN']+":@api.github.com/repos/BitHighlander/pioneer-desktop"
// var ASSET_ID = 'pioneer-desktop-8.1.12.dmg'
//
// var options = {
//   url: `${API_URL}/releases/download/v8.1.12/${ASSET_ID}`,
//   headers: headers,
//   encoding: null // we want a buffer and not a string
// };
//
//
// function callback(error, response, body) {
//   if (error) {
//     console.error(error);
//   }
//   console.log(response.statusCode)
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//   }
//
//   console.log(options.url);
// }
// var req = request(options, callback);
// console.log(req.headers)
