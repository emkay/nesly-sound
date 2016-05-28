#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__zipfile="${__dir}/nesasm.zip"
__nesasmUrl="https://codeload.github.com/cesarparent/NESAsm-3.1-Mac/zip/master"
__nesasmdir="NESAsm-3.1-Mac-master"

function main {
  curl ${__nesasmUrl} > $__zipfile;
  unzip $__zipfile; 
  cd $__nesasmdir;
  make;
  mkdir -p $__dir/bin && cp ./build/nesasm $__dir/bin;

  cleanup
}

function cleanup {
  rm $__zipfile;
  rm -r ../$__nesasmdir;
}

main
