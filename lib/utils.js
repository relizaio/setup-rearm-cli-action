const os = require('os');
const path = require('path');

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
    x32: '386',
    x64: 'amd64'
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    win32: 'windows'
  };
  return mappings[os] || os;
}

function getDownloadObject(version) {
  const platform = os.platform();
  const filename = `rearm-${ version }-${ mapOS(platform) }-${ mapArch(os.arch()) }`;
  const extension = 'zip';
  const binPath = filename;
  const url = `https://d7ge14utcyki8.cloudfront.net/rearm-download/${ version }/${ filename }.${ extension }`;
  return {
    url,
    binPath
  };
}

function getSyftDownloadObject(version) {
  const platform = os.platform();
  const filename = `rearm-${ version }-${ mapOS(platform) }-${ mapArch(os.arch()) }`;
  const extension = 'zip';
  const binPath = filename;
  const url = `https://d7ge14utcyki8.cloudfront.net/rearm-download/${ version }/${ filename }.${ extension }`;
  return {
    url,
    binPath
  };
}
module.exports = { getDownloadObject }